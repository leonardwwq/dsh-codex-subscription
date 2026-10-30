import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const source = path => readFile(new URL(`../src/${path}`, import.meta.url), 'utf8')

test('lite account actions and identity changes invalidate the remote card anonymously', async () => {
  const client = await source('client.jsx')
  const account = await source('client-account.jsx')
  assert.match(client, /key=\{`\$\{actionEpoch\}:\$\{accountEpoch\.current\.value\}`\}/u)
  assert.match(client, /accountEpoch\.current\.identity !== effectiveIdentity/u)
  assert.match(client, /const acceptAccount = next => \{ invalidateRemote\(\); accountStatus\.acceptAccount\(next\) \}/u)
  assert.match(account, /const begin = \(method, label\) => \{[^]*?onAccountChange\(\)/u)
  for (const action of ['logout', 'selectAccount']) {
    assert.match(account, new RegExp(`const ${action} = [^\\n]*\\n    onAccountChange\\(\\)`))
  }
  assert.match(account, /if \(removeId !== id\)[^\n]*\n    onAccountChange\(\)/u)
})

test('remote requests capture a generation invalidated at unmount and StrictMode cleanup', async () => {
  const remote = await source('client-remote-control.jsx')
  assert.match(remote, /useLayoutEffect\(\(\) => \{[^]*?\}, \[on\]\)/u)
  assert.match(remote, /generation\.current \+= 1/u)
  assert.equal((remote.match(/const token = generation\.current/gu) ?? []).length, 4)
  assert.equal((remote.match(/valid\(token\)/gu) ?? []).length, 8)
  assert.doesNotMatch(remote, /if \(alive\.current/u)
})
