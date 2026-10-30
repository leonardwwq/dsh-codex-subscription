export const CHANNEL = '/codex-subscription'
export const RPC_ENDPOINTS = Object.freeze([
  'status', 'login/start', 'login/status', 'login/submit', 'login/cancel', 'logout',
  'account/select', 'account/remove', 'usage/accounts',
  'preferences/status', 'preferences/models', 'preferences/update',
  'remote/status', 'remote/pair', 'remote/clients', 'remote/revoke',
])

// Components use a plugin-scoped client; DSH owns transport and authentication.
export function createSubscriptionRpcClient(transport) {
  return Object.freeze({
    async call(channel, endpoint, payload, signal) {
      if (channel !== CHANNEL || !RPC_ENDPOINTS.includes(endpoint)) throw new Error('Invalid subscription RPC target')
      try {
        return await transport.call('/api', `codex-subscription/${endpoint}`, payload, signal)
      } catch (error) {
        // DSH reports a route it never received as a transport failure; keep the
        // browser console able to say which call broke.
        try { console.error(`[codex-subscription] ${endpoint} failed`) } catch { /* console may be gone */ }
        throw error
      }
    },
  })
}

export function unwrap(response) {
  if (!response?.ok) throw new Error(response?.error?.message ?? 'Codex RPC failed')
  return response.value
}
