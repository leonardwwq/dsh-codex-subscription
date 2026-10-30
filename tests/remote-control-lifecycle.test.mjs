import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createRemoteControl } from '../src/remote-control.js'
import { createSubscriptionRpcHandler } from '../src/subscription-rpc.js'
import { CodexLoginCoordinator } from '../src/login-coordinator.js'

test('a queued account reset fences recovery of the old relay after a failed suspension', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-reset-fence-'))
  try {
    const starts = []
    let number = 0, failNext = false, rejectStop, startedStop
    const stopStarted = new Promise(resolve => { startedStop = resolve })
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => {
      const id = ++number
      return { start() { starts.push(id) }, status() { return {} }, stop() {
        if (failNext) { failNext = false; startedStop(); return new Promise((_resolve, reject) => { rejectStop = reject }) }
      } }
    } })
    await control.enable()
    await control.suspend()
    failNext = true
    const failing = control.suspend()
    const caught = assert.rejects(failing, /stop failed/u)
    await stopStarted
    const reset = control.resume()
    rejectStop(new Error('stop failed'))
    await caught
    await assert.rejects(reset, /stop failed/u)
    assert.deepEqual(starts, [1], 'the old relay must not restart before the pending reset')
    await control.accountChanged()
    assert.deepEqual(starts, [1, 2])
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('a failed first stop resumes only after a successful retry and no other suspension', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-retry-start-'))
  try {
    let failures = 0, starts = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => ({
      start() { starts++ }, stop() { if (failures > 0) { failures--; throw new Error('stop failed') } }, status() { return {} },
    }) })
    await control.enable()
    failures = 1
    await assert.rejects(control.suspend(), /stop failed/u)
    assert.equal(starts, 2, 'a confirmed second stop restores the old account')
    await control.suspend()
    failures = 1
    await assert.rejects(control.suspend(), /stop failed/u)
    assert.equal(starts, 2, 'another transaction still owns the suspension')
    await control.resume()
    assert.equal(starts, 3)
    failures = 2
    await assert.rejects(control.suspend(), /stop failed/u)
    assert.equal(starts, 3, 'an unconfirmed stop must not restart')
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('failed suspension releases its count and a safe retry restores remote access', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-suspend-retry-'))
  try {
    let fail = true, starts = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => ({
      start() { starts++ }, stop() { if (fail) throw new Error('stop failed') }, status() { return {} }, pair() { return { pairingCode: 'new' } },
    }) })
    await control.enable()
    await assert.rejects(control.suspend(), /stop failed/u)
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
    fail = false
    await control.suspend()
    await control.resume()
    assert.equal(starts, 2)
    assert.deepEqual(await control.pair(), { pairingCode: 'new' })
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('overlapping logins release each suspension only when its provider settles', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-logins-'))
  try {
    let starts = 0, id = 0, finishFirst, finishSecond, enteredFirst, enteredSecond
    const resumes = []
    const gates = [new Promise(resolve => { finishFirst = resolve }), new Promise(resolve => { finishSecond = resolve })]
    const entries = [new Promise(resolve => { enteredFirst = resolve }), new Promise(resolve => { enteredSecond = resolve })]
    const entriesResolve = [enteredFirst, enteredSecond]
    let calls = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => ({ start() { starts++ }, stop() {}, status() { return {} } }) })
    const coordinator = new CodexLoginCoordinator({ async login() { const index = calls++; entriesResolve[index](); await gates[index] }, async status() { return { authenticated: true } } }, {
      createId: () => String(++id), onLoginStart: () => control.suspend(), onLoginSettled: (_id, safe) => { if (safe) { const task = control.resume(); resumes.push(task); return task } },
    })
    await control.enable()
    const first = coordinator.start({ method: 'browser' })
    await entries[0]
    const second = coordinator.start({ method: 'browser' })
    await entries[1]
    finishSecond()
    await second
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
    assert.equal(starts, 1)
    finishFirst()
    await first
    await Promise.all(resumes)
    assert.equal(starts, 2)
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('failed stop retains the old relay and refuses new connections until safely stopped', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-unsafe-'))
  try {
    let fail = true, created = 0, starts = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => {
      created++
      return { start() { starts++ }, stop() { if (fail) throw new Error('stop failed') }, status() { return {} } }
    } })
    await control.enable()
    await assert.rejects(control.accountChanged(), /stop failed/u)
    await control.enable()
    assert.equal(created, 1)
    assert.equal(starts, 1)
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
    fail = false
    await control.accountChanged()
    assert.equal(created, 2)
    assert.equal(starts, 2)
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('failed login suspension cannot report the old account as a successful login', async () => {
  let loginCalled = false, settled
  const coordinator = new CodexLoginCoordinator({
    async login() { loginCalled = true },
    async status() { return { authenticated: true } },
  }, { createId: () => 'id', onLoginStart: () => Promise.reject(new Error('stop failed')), onLoginSettled: (_id, safe) => { settled = safe } })
  const result = await coordinator.start({ method: 'browser' })
  assert.equal(loginCalled, false)
  assert.equal(result.authenticated, false)
  assert.equal(result.phase, 'failed')
  assert.equal(settled, false)
})

test('account transactions suspend in-flight pairing and nested transactions stay suspended', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-transactions-'))
  try {
    let starts = 0, pairEntered, finishPair, finishA, finishB
    const entered = new Promise(resolve => { pairEntered = resolve })
    const pairGate = new Promise(resolve => { finishPair = resolve })
    const gateA = new Promise(resolve => { finishA = resolve })
    const gateB = new Promise(resolve => { finishB = resolve })
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => ({
      start() { starts++ }, stop() {}, status() { return {} }, async pair() { pairEntered(); await pairGate; return { pairingCode: 'stale' } },
    }) })
    const handler = createSubscriptionRpcHandler({ remoteControl: control, usageReader: { clearCache() {} },
      authHandler: async (_endpoint, payload) => { await (payload.id === 'a' ? gateA : gateB); return { ok: false } },
    })
    await control.enable()
    const pair = control.pair()
    await entered
    const a = handler('account/select', { id: 'a' }, new AbortController().signal)
    const b = handler('account/remove', { id: 'b' }, new AbortController().signal)
    finishPair()
    await assert.rejects(pair, { code: 'account-changed' })
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
    finishA()
    await a
    assert.equal(starts, 1)
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
    finishB()
    await b
    assert.equal(starts, 2)
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('off operations fail closed and start failures are handled without details', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-off-'))
  try {
    let creates = 0, reports = 0, calls = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, onStartError: (...args) => { reports++; assert.deepEqual(args, []) }, relayFactory: () => {
      creates++
      return { start() { return Promise.reject(new Error('secret')) }, stop() {}, status() { return {} }, pair() { calls++ }, listClients() { calls++ }, revokeClient() { calls++ } }
    } })
    for (const operation of [() => control.pair(), () => control.clients(), () => control.revoke('x')]) await assert.rejects(operation, { code: 'unavailable' })
    assert.equal(creates, 0)
    await control.enable()
    await new Promise(resolve => setImmediate(resolve))
    assert.equal(reports, 1)
    const disabling = control.disable()
    await assert.rejects(() => control.pair(), { code: 'unavailable' })
    await disabling
    assert.equal(calls, 0)
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('login suspends before credential commit and resumes without polling', async () => {
  const events = []
  let finish, release
  const gate = new Promise(resolve => { finish = resolve })
  const suspended = new Promise(resolve => { release = resolve })
  const coordinator = new CodexLoginCoordinator({
    async login() { events.push('login'); await gate },
    async status() { return { authenticated: true } },
  }, {
    createId: () => 'login-id',
    onLoginStart() { events.push('suspend'); return suspended },
    onLoginSettled() { events.push('resume') },
  })
  const login = coordinator.start({ method: 'browser' })
  await new Promise(resolve => setImmediate(resolve))
  assert.deepEqual(events, ['suspend'])
  release()
  await new Promise(resolve => setImmediate(resolve))
  assert.deepEqual(events, ['suspend', 'login'])
  finish()
  await login
  assert.deepEqual(events, ['suspend', 'login', 'resume'])
})

test('account cleanup tolerates absent optional reset service', async () => {
  let failures = 0
  const handler = createSubscriptionRpcHandler({
    authHandler: async () => ({ ok: true, value: {} }),
    usageReader: { clearCache() {} }, onCleanupFailure: () => { failures++ },
  })
  await handler('account/select', { id: 'a' }, new AbortController().signal)
  assert.equal(failures, 0)
})

test('concurrent lifecycle changes preserve their order and share one relay', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-lifecycle-'))
  try {
    const calls = []
    let running = false
    let releaseStop
    const gate = new Promise(resolve => { releaseStop = resolve })
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => {
      calls.push('create')
      return {
        start() { calls.push('start'); running = true },
        async stop() { calls.push('stop'); await gate; running = false },
        status() { return { status: running ? 'connected' : 'stopped' } },
        async pair() { return {} },
      }
    } })
    const first = control.enable()
    const stop = control.disable()
    const next = control.enable()
    const pairing = control.pair()
    await first
    releaseStop()
    await Promise.all([stop, next, pairing])
    assert.deepEqual(calls, ['create', 'stop', 'start'])
    assert.equal(control.status().status, 'connected')
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('account changes invalidate an in-flight pair and restore only when enabled', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-account-'))
  try {
    const calls = []
    let finishPair, pairStarted
    const started = new Promise(resolve => { pairStarted = resolve })
    const gate = new Promise(resolve => { finishPair = resolve })
    let number = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => {
      const id = ++number
      return {
        start() { calls.push(`start${id}`) },
        async stop() { calls.push(`stop${id}`) },
        status() { return { status: 'stopped' } },
        async pair() { pairStarted(); await gate; return { pairingCode: 'old-secret' } },
      }
    } })
    await control.enable()
    const pair = control.pair()
    await started
    await control.accountChanged()
    finishPair()
    await assert.rejects(pair, { code: 'account-changed' })
    assert.ok(calls.includes('stop1'))
    assert.ok(calls.includes('start2'))
    await control.disable()
    await control.accountChanged()
    assert.equal(number, 2)
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('completed login polls invalidate only once per login, including concurrent polls', async () => {
  let resets = 0
  const handler = createSubscriptionRpcHandler({
    authHandler: async (_endpoint, payload) => ({ ok: true, value: { id: payload.id, authenticated: true } }),
    usageReader: { clearCache() {} }, resetCreditService: { clear() {} },
    remoteControl: { accountChanged() { resets++ } },
  })
  const signal = new AbortController().signal
  await Promise.all(Array.from({ length: 5 }, () => handler('login/status', { id: 'first' }, signal)))
  await handler('login/status', { id: 'first' }, signal)
  assert.equal(resets, 1)
  await handler('login/status', { id: 'second' }, signal)
  assert.equal(resets, 2)
})

test('overlapping account resets share pending stops and handle rejection', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-stop-'))
  try {
    let rejectStop, entered
    const started = new Promise(resolve => { entered = resolve })
    let active = 0, maxActive = 0, stops = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => ({
      start() {}, status() { return {} },
      async stop() {
        active++; maxActive = Math.max(maxActive, active)
        try {
          if (++stops > 1) throw new Error('retry failed')
          await new Promise((_resolve, reject) => { rejectStop = reject; entered() })
        } finally { active-- }
      },
    }) })
    await control.enable()
    const first = control.accountChanged()
    const second = control.accountChanged()
    const results = Promise.allSettled([first, second])
    await started
    rejectStop(new Error('stop failed'))
    await results
    assert.equal(maxActive, 1)
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('an account change during initialization cannot restart the old relay', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-remote-init-'))
  try {
    const calls = []
    let n = 0
    const control = createRemoteControl({ stateFile: join(dir, 'id.json'), methods: {}, relayFactory: () => {
      const id = ++n
      return { start() { calls.push(`start${id}`) }, async stop() { calls.push(`stop${id}`) }, status() { return {} } }
    } })
    const enabling = control.enable()
    const change = control.accountChanged()
    await Promise.all([enabling, change])
    assert.deepEqual(calls, ['stop1', 'start2'])
  } finally { await rm(dir, { recursive: true, force: true }) }
})
