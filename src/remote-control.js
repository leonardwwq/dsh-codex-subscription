import { randomUUID } from 'node:crypto'
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { createRemoteControlHost } from './remote-control-host.js'
import { createRemoteControlRelay } from './remote-control-relay.js'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/iu

/** The installation id only tells ChatGPT "this is the same machine"; it is not a secret. */
async function installationId(filename, fresh = false) {
  try {
    if (fresh) throw Object.assign(new Error('rotate'), { code: 'ENOENT' })
    const value = JSON.parse(await readFile(filename, 'utf8'))?.installationId
    if (typeof value === 'string' && UUID.test(value)) return value
  } catch (error) {
    if (error?.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error
  }
  const created = randomUUID()
  await mkdir(dirname(filename), { recursive: true })
  const temporary = `${filename}.${process.pid}.tmp`
  await writeFile(temporary, `${JSON.stringify({ installationId: created })}\n`, { mode: 0o600 })
  await rename(temporary, filename)
  return created
}

/**
 * Optional ChatGPT Remote Control host. Nothing is contacted until enable().
 * @param {{ credentials: Function, WebSocket: Function, fetch?: Function, stateFile: string, hostName: string, userAgent: string, methods: object, notifications?: object, onConnection?: Function, onClose?: Function, base?: string }} options
 */
export function createRemoteControl(options) {
  const phones = new Set()
  const host = createRemoteControlHost({
    methods: options.methods,
    notifications: options.notifications,
    onConnection: options.onConnection,
    onActive: (client, notify) => { phones.add(client.id); options.onActive?.(client, notify) },
    onClose: (client, notify) => { phones.delete(client.id); options.onClose?.(client, notify) },
    debug: process.env.DSH_CODEX_REMOTE_DEBUG === '1',
    debugFile: options.debugFile,
  })
  let relay
  let creating
  let transition = Promise.resolve()
  let wanted = false
  let suspended = 0
  let generation = 0
  let pendingResets = 0
  let accountAbort = new AbortController()
  let unsafeRelay
  const stoppingRelays = new WeakMap()
  const stopRelay = value => {
    if (!value) return Promise.resolve(undefined)
    const pending = stoppingRelays.get(value)
    if (pending) return pending
    let result
    try { result = value.stop() } catch (error) { result = Promise.reject(error) }
    // Attach a rejection handler immediately, even if a lifecycle transition is queued.
    const settled = Promise.resolve(result).then(() => {
      if (unsafeRelay === value) unsafeRelay = undefined
      return undefined
    }, error => { unsafeRelay = value; return error })
    stoppingRelays.set(value, settled)
    void settled.then(() => { if (stoppingRelays.get(value) === settled) stoppingRelays.delete(value) })
    return settled
  }
  const ensureRelay = async () => {
    if (relay) return relay
    creating ??= (async () => {
      const instance = (options.relayFactory ?? createRemoteControlRelay)({
        debug: process.env.DSH_CODEX_REMOTE_DEBUG === '1',
        credentials: options.credentials,
        fetch: options.fetch,
        WebSocket: options.WebSocket,
        installationId: await installationId(options.stateFile),
        renewInstallation: () => installationId(options.stateFile, true),
        hostName: options.hostName,
        userAgent: options.userAgent,
        appServerVersion: options.appServerVersion,
        base: options.base,
        serve: client => host.serve(client),
      })
      relay = instance
      return instance
    })().finally(() => { creating = undefined })
    return creating
  }
  // Serialize setting changes so a late initialization cannot undo a disable,
  // and a slow shutdown cannot stop a subsequent enable.
  const enqueue = operation => {
    const result = transition.catch(() => {}).then(operation)
    transition = result
    return result
  }
  const startRelay = value => {
    const report = () => { try { options.onStartError?.() } catch { /* diagnostics only */ } }
    try { void Promise.resolve(value.start()).catch(report) } catch { report() }
  }
  const requireEnabled = () => {
    if (!wanted || suspended || unsafeRelay) throw Object.assign(new Error('Remote Control is turned off'), { code: 'unavailable' })
  }
  const operation = async (signal, run) => {
    requireEnabled()
    const epoch = generation
    const combined = signal ? AbortSignal.any([signal, accountAbort.signal]) : accountAbort.signal
    await transition.catch(() => {})
    combined.throwIfAborted()
    requireEnabled()
    const value = await ensureRelay()
    combined.throwIfAborted()
    requireEnabled()
    const result = await run(value, combined)
    if (epoch !== generation || combined.aborted) throw Object.assign(new Error('Account changed'), { code: 'account-changed' })
    requireEnabled()
    return result
  }
  return Object.freeze({
    host,
    enable() {
      wanted = true
      const epoch = generation
      return enqueue(async () => {
        const value = await ensureRelay()
        if (wanted && !suspended && !unsafeRelay && !pendingResets && epoch === generation) startRelay(value)
        return this.status()
      })
    },
    disable() {
      wanted = false
      accountAbort.abort()
      accountAbort = new AbortController()
      generation++
      return enqueue(async () => {
        const error = await stopRelay(relay)
        if (error) throw error
        return this.status()
      })
    },
    suspend() {
      suspended++
      const epoch = ++generation
      accountAbort.abort()
      accountAbort = new AbortController()
      const stopping = stopRelay(relay)
      return enqueue(async () => {
        let safelyStopped = false
        try {
          if (creating) await creating
          const firstError = await stopping
          const secondError = await stopRelay(relay)
          safelyStopped = !secondError && !unsafeRelay
          if (firstError || secondError) throw firstError ?? secondError
        } catch (error) {
          // A failed acquisition has no matching resume. Only restart when a
          // retry confirmed shutdown and no other transaction holds a suspension.
          suspended--
          if (safelyStopped && wanted && !suspended && !pendingResets && epoch === generation && relay) startRelay(relay)
          throw error
        }
      })
    },
    resume() {
      if (suspended > 0) suspended--
      return this.accountChanged()
    },
    accountChanged() {
      // Invalidate outstanding operations synchronously, before waiting for shutdown.
      const epoch = ++generation
      pendingResets++
      accountAbort.abort()
      accountAbort = new AbortController()
      const stopping = stopRelay(relay)
      return enqueue(async () => {
        try {
          if (creating) await creating
          const old = relay
          const firstError = await stopping
          // An already-queued enable might have restarted the old relay after the
          // immediate stop; stop it again, but never concurrently.
          const secondError = await stopRelay(old)
          if (firstError || secondError) throw firstError ?? secondError
          if (relay === old) relay = undefined
          if (wanted && !suspended && !unsafeRelay && pendingResets === 1 && epoch === generation) {
            const next = await ensureRelay()
            if (wanted && !suspended && !unsafeRelay && pendingResets === 1 && epoch === generation) startRelay(next)
          }
        } finally { pendingResets-- }
      })
    },
    pair(signal) {
      return operation(signal, (value, combined) => value.pair(combined))
    },
    clients(signal) {
      return operation(signal, (value, combined) => value.listClients(combined))
    },
    async revoke(clientId, signal) {
      await operation(signal, (value, combined) => value.revokeClient(clientId, combined))
      return this.clients(signal)
    },
    status() {
      const value = relay?.status() ?? { status: 'stopped', enrolled: false, clients: 0, reconnects: 0 }
      return { ...value, phones: phones.size, methods: host.seen(), trace: host.trace() }
    },
  })
}
