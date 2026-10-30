import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
// These contracts cover the client entry and whatever it actually imports, so a
// module the lite entry no longer uses cannot satisfy a client contract by text.
const reachable = async (entry, seen = new Set()) => {
  if (seen.has(entry)) return seen
  seen.add(entry)
  const source = await read(entry)
  for (const match of source.matchAll(/from\s+['"](\.\/[^'"]+)['"]/gu)) {
    const resolved = entry.slice(0, entry.lastIndexOf('/') + 1) + match[1].slice(2)
    if (!seen.has(resolved)) await reachable(resolved, seen)
  }
  return seen
}
const clientSources = async () => {
  const files = await reachable('src/client.jsx')
  const locales = ['src/client-locales.js', 'src/client-styles.js'].filter(file => !files.has(file))
  return Promise.all([...files, ...locales].map(read))
}
const text = path => path === 'src/client.jsx'
  ? clientSources().then(parts => parts.join('\n'))
  : path === 'src/index.js' ? Promise.all([path, 'src/subscription-rpc.js', 'src/default-model.js'].map(read)).then(parts => parts.join('\n')) : read(path)

test('client is one removable DSH settings section, not a second application shell', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /slots\.inject\(['"]settings\.section['"]/)
  assert.match(source, /id:\s*['"]codex-subscription['"]/)
  assert.match(source, /['"]\/codex-subscription['"]/) // RPC channel
  const withoutRepositorySupportLink = source.replace('https://github.com/WSL043/dsh-codex-subscription/issues/new?template=install-problem.yml', '').replace('https://github.com/WSL043/dsh-codex-subscription/blob/main/README.md#codex-subtask-runtime', '')
  assert.doesNotMatch(withoutRepositorySupportLink, /wsl043/iu)
  assert.match(source, /login\/start/)
  assert.match(source, /login\/status/)
  assert.match(source, /['"]usage\/accounts['"]/)
  assert.doesNotMatch(source, /['"]cache['"]|CacheDiagnostics|CodexCacheTelemetry/)
  assert.doesNotMatch(source, /createRoot|ReactDOM|index\.html|localStorage|sessionStorage|accessToken|refreshToken/)
})

test('the English settings navigation label fits the DSH sidebar', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /const en = \{[\s\S]*?nav:\s*['"]Codex['"][\s\S]*?title:\s*['"]Codex subscription['"]/u)
})

test('runway mode names calibration, idle, and reset-safe states instead of falling back to a bare percentage', async () => {
  const source = `${await text('src/client.jsx')}\n${await read('src/quota-forecast-view.js')}`
  assert.match(source, /quickQuotaForecastHint/u)
  assert.match(source, /quickQuotaForecastCalibrating/u)
  assert.match(source, /quickQuotaForecastIdle/u)
  assert.match(source, /quickQuotaForecastUntilReset/u)
  assert.match(source, /quotaForecastCalibrating/u)
  assert.match(source, /quotaForecastIdle/u)
  assert.match(source, /quotaForecastUntilReset/u)
  assert.match(source, /forecast\?\.status === ['"]calibrating['"]/u)
  assert.match(source, /forecast\?\.status === ['"]idle['"]/u)
  assert.match(source, /quotaForecastView/u)
  assert.match(source, /formatQuotaRunout/u)
  assert.match(source, /正在校准/u)
  assert.match(source, /预计可用到重置/u)
  assert.match(source, /Calibrating/u)
  assert.match(source, /Enough until reset/u)
})

test('a fresh sign-in attempt clears stale client flow state before starting', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /const begin = \(method, label\) => \{\s*flowGeneration\.current \+= 1\s*setFlow\(undefined\);\s*setBusy\(true\); setError\(undefined\)/u)
})

test('settings exposes manual multi-account switching with an explicit remove confirmation', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /addAccount: '添加账号'/u)
  assert.match(source, /call\('account\/select', \{ id \}\)/u)
  assert.match(source, /call\('account\/remove', \{ id \}\)/u)
  assert.match(source, /if \(removeId !== id\) \{ setRemoveId\(id\); return \}/u)
  assert.match(source, /removeId === candidate\.id \? t\('removeConfirm'\)/u)
  assert.doesNotMatch(await read('src/client-account.jsx'), /accountId|\.access\b|\.refresh\b/u)
})

test('account settings identify accounts by sanitized clickable email with privacy masking by default', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /candidate\.email/u)
  assert.match(source, /maskEmail/u)
  assert.match(source, /emailVisible/u)
  assert.match(source, /aria-pressed=\{emailVisible\}/u)
  assert.match(source, /setEmailVisible/u)
  assert.match(source, /emailVisible \? candidate\.email/u)
  assert.doesNotMatch(source, /accountId|accessToken|refreshToken/u)
})

test('email privacy mode resets when the signed-in account or account set changes', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /emailVisibilityKey/u)
  assert.match(source, /setEmailVisible\(false\)/u)
  assert.match(source, /emailVisible && emailVisibilityKey === accountVisibilityKey/u)
})

test('account status stays concise and leaves email identification to the account list', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /accountReady \? signedIn \? t\('connected'\) : t\('disconnected'\) : t\('accountLoading'\)/u)
  const status = source.match(/<div className="codexSubscriptionStatus"[\s\S]*?<\/div>/u)?.[0] ?? ''
  assert.doesNotMatch(status, /AccountEmail/u)
})

test('adding an account offers only login methods and assigns an internal fallback label', async () => {
  const source = await text('src/client.jsx')
  assert.doesNotMatch(source, /accountLabel|setAccountLabel|t\('accountLabel'\)/u)
  assert.match(source, /adding && label === undefined \? `Account \$\{accounts\.length \+ 1\}` : label/u)
  assert.match(source, /onClick=\{\(\) => begin\('browser'\)\}>\{t\('browserLogin'\)\}/u)
  assert.match(source, /onClick=\{\(\) => begin\('device_code'\)\}>\{t\('deviceLogin'\)\}/u)
})

test('preference writes keep ready surfaces mounted while persistence is pending', async () => {
  const [client, controller] = await Promise.all([text('src/client.jsx'), text('src/preference-controller.js')])
  assert.match(controller, /status: current\.status/u)
  assert.doesNotMatch(controller, /status: updating \? ['"]updating['"] : current\.status/u)
  assert.match(controller, /pendingPatch/u)
  assert.match(controller, /const value = pendingPatch === undefined \? current\.value/u)
  assert.match(controller, /saving: updating/u)
  assert.match(controller, /retry: \(\) => failedPatch === undefined/u)
  assert.match(client, /RemoteControlCard[^\n]*snapshot=\{snapshot\}/u)
})

test('account and preference failures stop loading and offer an in-place retry', async () => {
  const source = await text('src/client.jsx')
  assert.match(source, /accountSnapshot\.status === 'error'\s*\?\s*<AccountFailureCard/u)
  assert.match(source, /<AccountFailureCard/u)
  assert.match(source, /accountRetry/u)
  assert.match(source, /accountRetrying/u)
  assert.match(source, /accountStatus\.retry\(\)/u)
  assert.match(source, /void accountStatus\.load\(\)/u)
  assert.match(source, /void preference\.refreshModels\(\)/u)
  assert.match(source, /accountStatus\.reload\(\)/u)
  assert.match(source, /accountStatus\.dispose\(\)/u)
  assert.match(source, /preference\.retry\(\)/u)
  assert.match(source, /preferenceRetry/u)
  assert.doesNotMatch(source, /accountState === ['"](?:loading|error)['"]/u)
})

test('build emits host entries and a DSH module-loader client', async () => {
  const config = await text('tsdown.config.mjs')
  assert.match(config, /src\/index\.js/)
  assert.doesNotMatch(config, /src\/boundary\.js/)
  assert.match(config, /src\/client\.jsx/)
  assert.match(config, /window\.__ModuleLoader__\.load/)
  assert.match(config, /['"]dsh-codex-subscription['"]/)
  assert.doesNotMatch(config, /wsl043/iu)
})
