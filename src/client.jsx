import { useEffect, useRef, useState } from 'react'
import { zh, en } from './client-locales.js'
import { STYLE } from './client-styles.js'
import { createPreferenceController } from './preference-controller.js'
import { createAccountStatusController } from './account-status-controller.js'
import { NS, useAccountStatusSnapshot, usePreferenceSnapshot } from './client-shared.js'
import { createSubscriptionRpcClient } from './rpc-contract.js'
import { AccountCard, AccountFailureCard } from './client-account.jsx'
import { RemoteControlCard } from './client-remote-control.jsx'

export const inject = ['slots', 'locale', 'connection']

function LiteSection({ preference, rpc, accountStatus, t }) {
  const snapshot = usePreferenceSnapshot(preference)
  const accountSnapshot = useAccountStatusSnapshot(accountStatus)
  const [actionEpoch, setActionEpoch] = useState(0)
  const invalidateRemote = () => setActionEpoch(value => value + 1)
  // Keep the identity only in memory; React receives an anonymous generation.
  // Reloads of the same account do not discard a live pairing.
  const account = accountSnapshot.account
  const identity = account === undefined ? undefined : JSON.stringify([account.authenticated, (account.accounts ?? []).find(item => item.active)?.id ?? null])
  const accountEpoch = useRef({ identity, value: 0 })
  // An in-progress reload is not itself an account change.
  const effectiveIdentity = accountSnapshot.status === 'loading' ? accountEpoch.current.identity : identity
  if (accountEpoch.current.identity !== effectiveIdentity) {
    accountEpoch.current = { identity: effectiveIdentity, value: accountEpoch.current.value + 1 }
  }
  const acceptAccount = next => { invalidateRemote(); accountStatus.acceptAccount(next) }
  return <section className="codexSubscription">
    <div className="codexSubscriptionHead"><h2>{t('title')}</h2></div>
    {snapshot.error ? <p role="alert">{t('preferenceFailed')} <button type="button" onClick={() => { void preference.retry() }}>{t('preferenceRetry')}</button></p> : null}
    {snapshot.hostReadOnly ? <p role="status">{t('settingsReadonly')}</p> : null}
    {accountSnapshot.status === 'error'
      ? <AccountFailureCard accountStatus={accountStatus} snapshot={accountSnapshot} t={t} rpc={rpc} onAccountChange={invalidateRemote} onRecovered={() => { void preference.refreshModels() }} />
      : <AccountCard rpc={rpc} t={t} account={accountSnapshot.account} setAccount={acceptAccount} onAccountChange={invalidateRemote} onSignedOut={() => { void preference.refreshModels() }} />}
    <RemoteControlCard key={`${actionEpoch}:${accountEpoch.current.value}`} rpc={rpc} preference={preference} snapshot={snapshot} t={t} />
  </section>
}

export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'codex-subscription: copy')
  ctx.effect(() => {
    const tag = document.createElement('style')
    tag.dataset.plugin = 'dsh-codex-subscription'
    tag.textContent = STYLE
    document.head.append(tag)
    return () => tag.remove()
  }, 'codex-subscription: style')
  const rpc = createSubscriptionRpcClient(ctx.get('connection').rpc)
  const preference = createPreferenceController(rpc)
  const accountStatus = createAccountStatusController(rpc)
  ctx.effect(() => {
    void preference.load()
    void accountStatus.load()
    const disposeReset = ctx.on('connection/reset', () => { void preference.load(); void accountStatus.reload() })
    return () => { disposeReset?.(); preference.dispose(); accountStatus.dispose() }
  }, 'codex-subscription: account and remote settings')
  const t = ctx.locale.bind(NS)
  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section', id: 'codex-subscription', order: 15,
    label: () => t('nav'), locale: NS, inject: () => ({ preference, rpc, accountStatus, t }),
  }, LiteSection))
}
