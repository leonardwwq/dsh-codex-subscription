import assert from 'node:assert/strict'
import test from 'node:test'
import { registerSubscriptionTransport } from '../src/subscription-transport.js'
import { CHANNEL, createSubscriptionRpcClient, RPC_ENDPOINTS } from '../src/rpc-contract.js'
import { diagnosticLog } from '../src/diagnostic-log.js'

test('subscription transport validates envelopes and preserves correlation and cancellation', async () => {
  const routes = new Map()
  let invoked = 0
  const dispose = registerSubscriptionTransport({ fetch: { register(route) {
    routes.set(route.path, route)
    return () => routes.delete(route.path)
  } } }, async (endpoint, payload, signal) => {
    invoked++
    assert.equal(endpoint, 'status')
    assert.equal(signal.aborted, false)
    return { ok: true, value: payload }
  })
  const route = routes.get('/api/codex-subscription/status')
  const request = (body, headers = { 'content-type': 'application/json' }) => new Request('http://localhost' + route.path, { method: 'POST', headers, body })
  const envelope = { type: 'client-request', rpcId: 'test-123', method: 'codex-subscription/status', payload: { force: true } }
  const response = await route.fetch(request(JSON.stringify(envelope)))
  assert.deepEqual(await response.json(), { type: 'server-response', rpcId: 'test-123', result: { ok: true, value: { force: true } } })
  assert.equal((await route.fetch(request('{'))).status, 400)
  assert.equal((await route.fetch(request(JSON.stringify({ ...envelope, method: 'codex-subscription/logout' })))).status, 400)
  assert.equal((await route.fetch(request('{}'))).status, 400)
  assert.equal((await route.fetch(request('{}', { 'content-type': 'text/plain' }))).status, 415)
  assert.equal(invoked, 1)
  assert.equal(routes.size, RPC_ENDPOINTS.length)
  dispose()
  assert.equal(routes.size, 0)
})

test('subscription transport redacts uncaught failures and rolls back partial registration', async () => {
  diagnosticLog.clear()
  let route
  registerSubscriptionTransport({ fetch: { register(value) { route ??= value; return () => {} } } }, () => { throw new Error('private credential xyz987') })
  const response = await route.fetch(new Request('http://localhost' + route.path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ type: 'client-request', rpcId: 'a', method: 'codex-subscription/status', payload: {} }) }))
  assert.doesNotMatch(await response.text(), /private credential/)
  assert.doesNotMatch(JSON.stringify(diagnosticLog.snapshot()), /private credential|xyz987/)
  let active = 0
  assert.throws(() => registerSubscriptionTransport({ fetch: { register() {
    if (active === 2) throw new Error('duplicate route')
    active++
    return () => active--
  } } }, () => {}), /duplicate route/)
  assert.equal(active, 0)
})

test('client maps only subscription endpoints onto the authenticated DSH carrier', async () => {
  const signal = new AbortController().signal
  let actual
  const client = createSubscriptionRpcClient({ call: (...args) => { actual = args; return Promise.resolve({ ok: true, value: 1 }) } })
  assert.equal((await client.call(CHANNEL, 'status', {}, signal)).value, 1)
  assert.deepEqual(actual, ['/api', 'codex-subscription/status', {}, signal])
  await assert.rejects(client.call('/other', 'status', {}), /Invalid/)
  await assert.rejects(client.call(CHANNEL, 'usage', {}), /Invalid/)
  await assert.rejects(client.call(CHANNEL, '../logout', {}), /Invalid/)
})

test('client does not log the details of transport exceptions', async () => {
  const calls = []
  const original = console.error
  console.error = (...args) => calls.push(args)
  try {
    const client = createSubscriptionRpcClient({ call: async () => { throw new Error('private credential xyz987') } })
    await assert.rejects(client.call(CHANNEL, 'status', {}), /private credential/)
    assert.equal(calls.length, 1)
    assert.doesNotMatch(JSON.stringify(calls), /private credential|xyz987/)
  } finally {
    console.error = original
  }
})
