import assert from 'node:assert/strict'
import { RPC_ENDPOINTS } from '../src/rpc-contract.js'
import test from 'node:test'
import Schema from '@deepseek-ai/schemastery'

test('settings schema survives the native browser JSON round trip', () => {
  const schema = plugin.Config
  const plain = config => Object.fromEntries(Object.entries(config).map(([key, field]) => [key, typeof field?.get === 'function' ? field.get() : field]))
  const value = plain(schema({ imageSketch: true, imageSketchAgent: true, searchDomains: ['EXAMPLE.com', 'example.com'], disabledModels: ['gpt-5.5'] }))
  const browserSchema = new Schema(JSON.parse(JSON.stringify(schema)))
  assert.deepEqual(plain(browserSchema(JSON.parse(JSON.stringify(value)))), value)
  assert.equal(value.autoQuotaRetry, false)
  assert.deepEqual(value.disabledModels, ['gpt-5.5'])
  assert.deepEqual(value.searchDomains, ['example.com'])
  assert.throws(() => browserSchema({ searchDomains: ['https://example.com/path'] }), /Invalid search domain/)
})

test('every subscription preference remains editable on supported DSH settings hosts', () => {
  for (const [name, field] of Object.entries(plugin.Config.dict)) {
    assert.equal(field.meta.volatile, true, `${name} must be writable in DSH settings`)
  }
})

import * as plugin from '../src/index.js'
import {
  CONTEXT_MODE_CUSTOM,
  CONTEXT_MODE_EXTENDED,
  CONTEXT_MODE_STANDARD,
  CUSTOM_CONTEXT_MODEL_DEFAULTS,
  contextModelGroups,
  formatContextWindow,
  normalizeAutoQuotaRetry,
  normalizeQuickQuotaMode,
  normalizeSearchProvider,
  parseContextWindow,
  QUICK_QUOTA_MODE_BAR,
  QUICK_QUOTA_MODE_FORECAST,
  QUICK_QUOTA_MODE_OFF,
  QUICK_QUOTA_MODE_PERCENT,
  OUTPUT_VERBOSITY_DEFAULT,
  SEARCH_PROVIDER_AUTO,
  SEARCH_PROVIDER_CODEX,
  SEARCH_PROVIDER_DSH,
  SPEED_MODE_STANDARD,
} from '../src/settings-contract.js'

const { apply: applyPlugin } = plugin

test('composer quota mode normalizes formal values and legacy booleans', () => {
  assert.equal(normalizeAutoQuotaRetry(undefined), false)
  assert.equal(normalizeAutoQuotaRetry(false), false)
  assert.equal(normalizeAutoQuotaRetry('false'), false)
  assert.equal(normalizeQuickQuotaMode(QUICK_QUOTA_MODE_OFF), QUICK_QUOTA_MODE_OFF)
  assert.equal(normalizeQuickQuotaMode(QUICK_QUOTA_MODE_PERCENT), QUICK_QUOTA_MODE_PERCENT)
  assert.equal(normalizeQuickQuotaMode(QUICK_QUOTA_MODE_BAR), QUICK_QUOTA_MODE_BAR)
  assert.equal(normalizeQuickQuotaMode(QUICK_QUOTA_MODE_FORECAST), QUICK_QUOTA_MODE_FORECAST)
  assert.equal(normalizeQuickQuotaMode(undefined, true), QUICK_QUOTA_MODE_PERCENT)
  assert.equal(normalizeQuickQuotaMode(undefined, false), QUICK_QUOTA_MODE_OFF)
  assert.equal(normalizeQuickQuotaMode('invalid', true), QUICK_QUOTA_MODE_PERCENT)
})

test('context settings expose safe presets and bounded custom values', async () => {
  assert.equal(plugin.normalizeContextMode(CONTEXT_MODE_STANDARD), CONTEXT_MODE_STANDARD)
  assert.equal(plugin.normalizeContextMode(CONTEXT_MODE_EXTENDED), CONTEXT_MODE_EXTENDED)
  assert.equal(plugin.normalizeContextMode(CONTEXT_MODE_CUSTOM), CONTEXT_MODE_CUSTOM)
  assert.equal(plugin.normalizeContextMode('unknown'), CONTEXT_MODE_STANDARD)
  assert.equal(plugin.normalizeCustomContextWindow(500_000), 500_000)
  assert.equal(plugin.normalizeCustomContextWindow(99), 128_000)
  assert.equal(plugin.normalizeCustomContextWindow(2_000_000), 1_000_000)
})

test('custom context starts from the audited Codex default and accepts plain token counts', () => {
  assert.deepEqual(CUSTOM_CONTEXT_MODEL_DEFAULTS, {
    'gpt-5.4': 272_000,
    'gpt-5.4-mini': 272_000,
    'gpt-5.5': 272_000,
    'gpt-5.6': 272_000,
    'gpt-6-astra': 272_000,
  })
  assert.equal(formatContextWindow(1_000_000), '1M')
  assert.equal(formatContextWindow(400_000), '400K')
  assert.equal(parseContextWindow('750000'), 750_000)
  assert.equal(parseContextWindow('272000'), 272_000)
  assert.ok(Number.isNaN(parseContextWindow('750K')))
  assert.ok(Number.isNaN(parseContextWindow('0.5M')))
})

test('custom context rows follow the active upstream model catalog', () => {
  assert.deepEqual(contextModelGroups([
    { id: 'gpt-5.4', name: 'GPT-5.4' },
    { id: 'gpt-5.6-sol', name: 'GPT-5.6 Sol' },
    { id: 'gpt-5.6-terra', name: 'GPT-5.6 Terra' },
    { id: 'gpt-6-astra', name: 'GPT-6 Astra' },
    { id: 'gpt-5.3-codex-spark', name: 'GPT-5.3 Codex Spark' },
  ]), [
    { key: 'gpt-5.4', label: 'GPT-5.4', maximum: 1_000_000 },
    { key: 'gpt-5.6', label: 'GPT-5.6 Sol / Terra', maximum: 872_000 },
    { key: 'gpt-6-astra', label: 'GPT-6 Astra', maximum: 872_000 },
    { key: 'gpt-5.3-codex-spark', label: 'GPT-5.3 Codex Spark', maximum: 128_000, fixed: true },
  ])
})

function fakeContext({ connection = true, webServer = true, fetchRouting = true } = {}) {
  const registered = []
  const disposedAdapters = []
  const handled = []
  const listeners = []
  const searchProviders = []
  const tools = []
  const settings = []
  const webUpdates = []
  const disposers = new Map()
  const pendingEffects = []
  const provided = new Map()
  const preference = { autoQuotaRetry: false, quickQuotaVisible: false, searchProvider: SEARCH_PROVIDER_AUTO, outputVerbosity: OUTPUT_VERBOSITY_DEFAULT, streamIdleTimeoutMinutes: 10, speedMode: SPEED_MODE_STANDARD, contextMode: CONTEXT_MODE_STANDARD, customContextWindow: 272_000, customContextGpt54: 1_000_000, customContextGpt54Mini: 400_000, customContextGpt55: 1_000_000, customContextGpt56: 1_000_000 }
  let credential
  const records = new Map()
  // Mirrors the real loader: the entry keeps the raw config, the fiber holds resolved volatile references
  // and its update() takes a raw config.
  const webEntry = {
    options: { id: 'web', config: { searchProvider: 'deepseek-official', fetchProvider: 'local' } },
    fiber: {
      config: { searchProvider: { get: () => 'deepseek-official' }, fetchProvider: { get: () => 'local' } },
      async update(config, noSave) {
        webUpdates.push({ config, noSave })
        this.config = Object.fromEntries(Object.entries(config).map(([key, value]) => [key, { get: () => value }]))
      },
    },
  }
  const searchProviderMap = new Map([['deepseek-official', { id: 'deepseek-official', available: () => true, async search() { return { sources: [], truncated: false } } }]])
  const fetchProviderMap = new Map([['local', { id: 'local', available: () => true, async fetch(request) { return { native: true, url: request.url } } }]])
  const updateSettings = async patch => {
    Object.assign(preference, patch)
    await Promise.all(listeners.filter(entry => entry.event === 'loader/volatile-update').map(entry => entry.listener()))
  }
  const ctx = {
    credentials: {
      async resolve() { return credential === undefined ? undefined : { value: credential } },
      async set(_ref, value) { credential = value },
      async unset() { credential = undefined },
      async readRecord(key) { return records.get(key) },
      async modifyRecord(key, mutate) {
        const next = await mutate(records.get(key))
        if (next === undefined) records.delete(key)
        else records.set(key, next)
        return next
      },
      async deleteRecord(key) { records.delete(key) },
    },
    llm: {
      registerAdapter(providers, adapter) {
        registered.push({ providers, adapter })
        return () => { disposedAdapters.push(adapter) }
      },
    },
    attachments: {
      imageLimits: {
        maxImageBytes: 10 * 1024 * 1024,
        maxMessageImageBytes: 10 * 1024 * 1024,
        mediaTypes: ['image/png'],
      },
      async saveImage() { throw new Error('not used') },
    },
    tools: {
      register(tool) {
        tools.push(tool)
        return () => { const index=tools.indexOf(tool);if(index>=0)tools.splice(index,1) }
      },
    },
    web: {
      searchProviders: searchProviderMap,
      fetchProviders: fetchProviderMap,
      registerFetchProvider(provider) { fetchProviderMap.set(provider.id, provider); return () => fetchProviderMap.delete(provider.id) },
      registerSearchProvider(provider) {
        searchProviders.push(provider)
        searchProviderMap.set(provider.id, provider)
        return () => {}
      },
    },
    webServer: webServer ? {} : undefined,
    connection: connection ? {
      fetch: {
        register(route) {
          handled.push(route)
          return () => {}
        },
      },
    } : undefined,
    settings: {
      writable: true,
      configure(presentation) {
        settings.push(presentation)
        return () => {}
      },
      async update(id, patch) {
        assert.equal(id, 'codex-subscription')
        await updateSettings(patch)
      },
    },
    fiber: { entry: { options: { id: 'codex-subscription' } } },
    loader: {
      * entries() { yield webEntry },
    },
    inject(services, callback) {
      if (services.every(service => ctx[service] !== undefined)) callback(ctx)
    },
    on(event, listener) {
      const entry = { event, listener }
      listeners.push(entry)
      return () => {
        const index = listeners.indexOf(entry)
        if (index >= 0) listeners.splice(index, 1)
      }
    },
    get(name) { return provided.get(name) },
    provide(name, value) { provided.set(name, value) },
    effect(register, label) {
      const result = register()
      if (result && typeof result.then === 'function') {
        const pending = Promise.resolve(result).then(dispose => {
          if (typeof dispose === 'function') disposers.set(label, dispose)
        })
        pendingEffects.push(pending)
        return pending
      }
      if (typeof result === 'function') disposers.set(label, result)
      return result
    },
  }
  if (!fetchRouting) Object.defineProperty(ctx.web, 'fetchProviders', { get: () => fetchProviderMap })
  return {
    ctx, config: preference, registered, disposedAdapters, handled, listeners, provided, searchProviders, settings, tools, webUpdates, disposers, fetchProviderMap,
    async settleEffects() { await Promise.all(pendingEffects) },
    async request(endpoint, payload, signal) {
      const method = 'codex-subscription/' + endpoint
      const route = handled.find(route => route.path === '/api/' + method)
      const response = await route.fetch(new Request('http://localhost' + route.path, {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({type:'client-request',rpcId:'test-rpc',method,payload}), signal}))
      return (await response.json()).result
    },
    updateSettings,
  }
}

test('plugin activates without the web connection service in Headless mode', async () => {
  const host = fakeContext({ connection: false })

  assert.doesNotThrow(() => applyPlugin(host.ctx, host.config))
  await host.settleEffects()
  assert.deepEqual(host.registered.map(item => item.providers), [['openai-codex']])
  assert.equal(host.handled.length, 0)
})

test('a credential read failure does not prevent adapter registration', async () => {
  const host = fakeContext()
  host.ctx.credentials.resolve = async () => { throw new Error('credential store unavailable') }
  applyPlugin(host.ctx, host.config)
  await host.settleEffects()
  assert.deepEqual(host.registered.map(item => item.providers), [['openai-codex']])
})

test('adapter is registered immediately and disposal cannot wait for or register after a stuck vault read', async () => {
  const host = fakeContext()
  let release
  const vault = new Promise(resolve => { release = resolve })
  host.ctx.credentials.resolve = () => vault
  applyPlugin(host.ctx, host.config)
  assert.equal(host.registered.length, 1, 'no provider-missing startup window')
  await new Promise(resolve => setImmediate(resolve))
  const result = host.disposers.get('codex-subscription: official model catalog')()
  assert.equal(result, undefined, 'disposal does not await asynchronous initialization')
  assert.equal(host.disposedAdapters.length, 1)
  await assert.rejects(host.registered[0].adapter.resolveModel('openai-codex', 'gpt-6-luna'), error => error.name === 'AbortError')
  release(undefined)
  await new Promise(resolve => setImmediate(resolve))
  assert.equal(host.registered.length, 1, 'late initialization cannot register an adapter again')
})

test('signed out, the account advertises no models and model metadata needs no credentials', async () => {
  const host = fakeContext()
  applyPlugin(host.ctx, host.config)
  await host.settleEffects()
  // DSH 0.2.1-alpha.3 and later resolve the route's key while listing models, so signed out must answer
  // "no credential" (an empty list) rather than an authorization failure.
  host.ctx.credentials.resolve = async () => undefined
  const adapter = host.registered[0].adapter
  assert.deepEqual(await adapter.listModels('openai-codex'), [], 'no bundled list stands in for the account catalog')
  await assert.rejects(adapter.resolveModel('openai-codex', 'gpt-5.5'))
})

test('successful account changes wake parked quota recovery while failed changes do not', async () => {
  let succeeds = true
  let wakes = 0
  const handler = plugin.createSubscriptionRpcHandler({
    authHandler: async endpoint => succeeds
      ? { ok: true, value: { authenticated: endpoint !== 'logout' } }
      : { ok: false, error: { code: 'internal', message: 'account change failed', details: { issues: [] } } },
    usageReader: { clearCache() {}, clearScope() {}, clear() {} },
    resetCreditService: { clear() {} },
    onAccountChanged: () => { wakes += 1 },
  })
  const signal = new AbortController().signal

  assert.equal((await handler('account/select', { id: 'account-b' }, signal)).ok, true)
  assert.equal((await handler('account/remove', { id: 'account-a' }, signal)).ok, true)
  assert.equal((await handler('login/status', {}, signal)).ok, true)
  assert.equal((await handler('logout', {}, signal)).ok, true)
  assert.equal(wakes, 4)
  succeeds = false
  assert.equal((await handler('account/select', { id: 'missing' }, signal)).ok, false)
  assert.equal(wakes, 4)
})

test('forecast cache management exposes only its size and delegates serialized clearing', async () => {
  let clears = 0
  const handler = plugin.createSubscriptionRpcHandler({ usageReader: {
    clear: async () => { clears++ },
    storage: async () => ({ bytes: clears ? 0 : 128, limit: 262144 }),
  } })
  assert.deepEqual(await handler('storage/status', {}, new AbortController().signal), { ok: true, value: { bytes: 128, limit: 262144 } })
  assert.equal(clears, 0)
  assert.deepEqual(await handler('storage/clear-forecast', { path: 'ignored' }, new AbortController().signal), { ok: true, value: { bytes: 0, limit: 262144 } })
  assert.equal(clears, 1)
  const aborted = AbortSignal.abort()
  await assert.rejects(handler('storage/clear-forecast', {}, aborted))
  assert.equal(clears, 1)
})

test('preferences/models refreshes the catalog before returning the current model surfaces', async () => {
  const calls = []
  let fail = false
  const handler = plugin.createSubscriptionRpcHandler({
    modelCatalog: {
      async refresh() {
        calls.push('refresh')
        if (fail) throw new Error('credential details must stay private')
      },
    },
    preferences: {
      status() {
        calls.push('status')
        return { contextModels: [{ key: 'gpt-6-astra' }], verbosityModels: ['gpt-6-astra'] }
      },
    },
  })
  const signal = new AbortController().signal
  assert.deepEqual(await handler('preferences/models', {}, signal), {
    ok: true,
    value: { availableModels: [], contextModels: [{ key: 'gpt-6-astra' }], verbosityModels: ['gpt-6-astra'], fastModels: [], ultrafastModels: [], ultraModels: [], catalogStatus: undefined },
  })
  assert.deepEqual(calls, ['refresh', 'status'])

  fail = true
  const failed = await handler('preferences/models', {}, signal)
  assert.deepEqual(failed, {
    ok: false,
    error: { code: 'internal', message: 'Could not refresh Codex model catalog', details: { issues: [] } },
  })
  assert.doesNotMatch(JSON.stringify(failed), /credential details/)
})

test('usage failures use a DSH-supported bounded RPC error', async () => {
  const handler = plugin.createSubscriptionRpcHandler({
    async authHandler() { throw new Error('not used') },
    usageReader: { async read() { throw new Error('host secret') }, clear() {} },
    resetCreditService: { async inspect() {}, async prepare() {}, async consume() {}, clear() {} },
  })
  const result = await handler('usage', {}, new AbortController().signal)
  assert.deepEqual(result, {
    ok: false,
    error: { code: 'internal', message: 'Could not read ChatGPT usage', details: { issues: [] } },
  })
  assert.doesNotMatch(JSON.stringify(result), /host secret/)
})

test('original image RPC delegates only a bounded session-owned chunk request', async () => {
  const calls = []
  const inherited = { assetId: 'img_0123456789abcdef0123456789abcdef', sha256: 'a'.repeat(64) }
  const handler = plugin.createSubscriptionRpcHandler({
    originalImages: {
      async chunk(sessionId, assetId, offset, access) {
        calls.push({ sessionId, assetId, offset, access })
        return sessionId === 'session-a' ? { ref: { assetId }, offset, encoded: 'AA==', done: true } : undefined
      },
    },
    resolveInheritedOriginal(sessionId, assetId) {
      return sessionId === 'session-a' && assetId === inherited.assetId ? inherited : undefined
    },
  })
  const signal = new AbortController().signal
  assert.deepEqual(await handler('image/original/chunk', {
    sessionId: 'session-a', assetId: 'img_0123456789abcdef0123456789abcdef', offset: 0,
  }, signal), {
    ok: true,
    value: { ref: { assetId: 'img_0123456789abcdef0123456789abcdef' }, offset: 0, encoded: 'AA==', done: true },
  })
  assert.equal(calls.length, 1)
  assert.deepEqual(calls[0], {
    sessionId: 'session-a', assetId: inherited.assetId, offset: 0, access: inherited,
  })
  assert.deepEqual(await handler('image/original/chunk', { sessionId: 'session-b', assetId: 'img_0123456789abcdef0123456789abcdef', offset: 0 }, signal), {
    ok: false, error: { code: 'not-found', message: 'Original image is unavailable', details: { issues: [] } },
  })
  assert.deepEqual(await handler('image/original/chunk', { sessionId: 'session-a', assetId: 'same', offset: -1 }, signal), {
    ok: false, error: { code: 'invalid-input', message: 'Invalid original image request', details: { issues: [] } },
  })
})

test('quota reset RPC exposes bounded inspection, prepare, and consume results', async () => {
  const calls = []
  const handler = plugin.createSubscriptionRpcHandler({
    async authHandler() { throw new Error('not used') },
    usageReader: { async read() {}, clear() {} },
    resetCreditService: {
      async inspect(value) { calls.push(['inspect', value]); return { availableCount: 1, nextExpiresAt: 9 } },
      async prepare(value) { calls.push(['prepare', value]); return { challengeId: 'opaque', readyAt: 5 } },
      async consume(value) { calls.push(['consume', value]); return { code: 'reset', windowsReset: ['primary'] } },
      clear() {},
    },
  })
  const controller = new AbortController()
  assert.deepEqual(await handler('reset-credit/inspect', {}, controller.signal), {
    ok: true,
    value: { availableCount: 1, nextExpiresAt: 9 },
  })
  assert.deepEqual(await handler('reset-credit/prepare', {}, controller.signal), {
    ok: true,
    value: { challengeId: 'opaque', readyAt: 5 },
  })
  assert.deepEqual(await handler('reset-credit/consume', { challengeId: 'opaque', acknowledged: true }, controller.signal), {
    ok: true,
    value: { code: 'reset', windowsReset: ['primary'] },
  })
  assert.equal(calls.length, 3)
})

test('quota reset RPC forwards only the opaque credit reference to host prepare', async () => {
  let prepared
  const handler = plugin.createSubscriptionRpcHandler({
    async authHandler() { throw new Error('not used') },
    usageReader: { async read() {}, clear() {} },
    resetCreditService: {
      async inspect() { return { availableCount: 2, credits: [] } },
      async prepare(value) { prepared = value; return { challengeId: 'opaque', readyAt: 5 } },
      async consume() { return { code: 'reset', windowsReset: [] } },
      clear() {},
    },
  })
  const controller = new AbortController()
  await handler('reset-credit/prepare', { creditRef: 'opaque-ref' }, controller.signal)
  assert.equal(prepared.creditRef, 'opaque-ref')
  assert.equal(prepared.creditId, undefined)
})

test('quota reset RPC bounds host failures and logout invalidates pending challenges', async () => {
  let cleared = 0
  const handler = plugin.createSubscriptionRpcHandler({
    async authHandler(endpoint) { return endpoint === 'logout' ? { ok: true, value: {} } : { ok: false } },
    usageReader: { async read() {}, clear() { cleared += 1 } },
    resetCreditService: {
      async inspect() { throw new Error('provider-secret credit-secret') },
      async prepare() { throw new Error('provider-secret credit-secret') },
      async consume() { throw new Error('provider-secret credit-secret') },
      clear() { cleared += 1 },
    },
  })
  const controller = new AbortController()
  const failed = await handler('reset-credit/prepare', {}, controller.signal)
  assert.deepEqual(failed, {
    ok: false,
    error: { code: 'internal', message: 'Could not prepare a quota reset', details: { issues: [] } },
  })
  assert.doesNotMatch(JSON.stringify(failed), /provider-secret|credit-secret/)
  await handler('logout', {}, controller.signal)
  assert.equal(cleared, 2)
})

test('diagnostics converts credential failures to a fixed public issue without leaking host errors', async () => {
  const report = await plugin.createSubscriptionDiagnostics({
    auth: { async status() { throw new Error('refresh-secret account-local') } },
    preferences: { status: () => ({ quickQuotaVisible: false, searchProvider: 'dsh', fetchProvider: 'dsh', fetchRoutingAvailable: true, speedMode: 'standard', writable: true }) },
  })

  assert.deepEqual(report.account, { status: 'unknown' })
  assert.deepEqual(report.issues, [{ code: 'account-status-unavailable' }])
  assert.doesNotMatch(JSON.stringify(report), /refresh-secret|account-local/)
})

test('diagnostics includes bounded request failures and excludes proxy or credential details', async () => {
  const report = await plugin.createSubscriptionDiagnostics({
    auth: { async status() { return { authenticated: false } } },
    preferences: { status: () => ({ contextMode: 'standard', quickQuotaMode: 'off', searchProvider: 'dsh', fetchProvider: 'dsh', fetchRoutingAvailable: true, speedMode: 'standard', writable: true, ignored: 'noise' }) },
    network: { snapshot: () => ({ login: { status: 'failed', stage: 'transport', code: 'dns', route: 'environment', elapsed: '1-5s' } }) },
  })
  assert.deepEqual(report.requests, { login: { status: 'failed', stage: 'transport', code: 'dns', route: 'environment', elapsed: '1-5s' } })
  assert.equal('ignored' in report.configuration, false)
  assert.doesNotMatch(JSON.stringify(report), /proxy|bearer|token|accountId/iu)
})

test('unknown browser search preferences fail safe to automatic routing', () => {
  assert.equal(normalizeSearchProvider(SEARCH_PROVIDER_AUTO), SEARCH_PROVIDER_AUTO)
  assert.equal(normalizeSearchProvider(SEARCH_PROVIDER_DSH), SEARCH_PROVIDER_DSH)
  assert.equal(normalizeSearchProvider(SEARCH_PROVIDER_CODEX), SEARCH_PROVIDER_CODEX)
  assert.equal(normalizeSearchProvider(undefined), SEARCH_PROVIDER_AUTO)
  assert.equal(normalizeSearchProvider('unexpected-provider'), SEARCH_PROVIDER_AUTO)
})

test('catalog diagnostics includes refresh failures without copying private metadata', async () => {
  const report = await plugin.createSubscriptionDiagnostics({
    auth: { status: async () => ({ authenticated: false }) },
    preferences: { status: () => ({}) },
    network: { snapshot: () => ({ catalog: { status: 'failed', stage: 'http', code: 'http-error', httpStatus: 403, route: 'direct', elapsed: 'under-1s', url: 'private-url' } }) },
    modelCatalog: { status: () => ({ source: 'unavailable', refresh: 'failed', accountId: 'private-account' }) },
  })
  assert.equal(report.requests.catalog.httpStatus, 403)
  assert.deepEqual(report.catalog, { source: 'unavailable', refresh: 'failed' })
  assert.doesNotMatch(JSON.stringify(report), /private-|accountId|url/)
})

test('lite plugin registers the model adapter and account/remote RPC without extra tools or search providers', async () => {
  const host = fakeContext({ webServer: false })
  applyPlugin(host.ctx, host.config)
  assert.equal(host.handled.length, RPC_ENDPOINTS.length)
  assert.equal(host.tools.length, 0)
  assert.equal(host.searchProviders.length, 0)
  assert.ok(host.handled.some(entry => entry.path === '/api/codex-subscription/login/start'))
  assert.ok(host.handled.some(entry => entry.path === '/api/codex-subscription/remote/pair'))
  assert.ok(!host.handled.some(entry => entry.path.includes('sketch/')))
  await host.settleEffects()
  assert.equal(host.registered.length, 1)
  assert.deepEqual(host.registered[0].providers, ['openai-codex'])
  assert.equal((await host.request('status', {})).ok, true)
  assert.equal((await host.request('remote/status', {})).ok, true)
  assert.equal((await host.request('preferences/update', { remoteControl: 'off' })).ok, true)
  assert.equal((await host.request('preferences/update', { imageGeneration: true })).ok, false)
})
