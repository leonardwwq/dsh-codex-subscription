import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'
import config from '../tsdown.config.mjs'

// The lite build ships one client chunk: no feature chunks are emitted, so this
// suite only guards the shared build rules the entry still depends on.
const main = config.find(value => value.outputOptions?.entryFileNames === 'client.js')

test('dependency source labels and maps do not depend on an external pnpm store path', () => {
  const stable = 'node_modules/.pnpm/synthetic@1.0.0/node_modules/synthetic/index.js'
  const outside = `../../another-checkout/${stable}`
  const transform = main.plugins.find(value => value.name === 'dsh-client-portable-source-paths')
  const code = `//#region ${outside}\nconst original = 'unchanged';\n//#endregion`
  assert.equal(String(transform.renderChunk(code)), code.replace(outside, stable))
  assert.equal(main.outputOptions.sourcemapPathTransform(outside), stable)
  assert.equal(main.outputOptions.sourcemapPathTransform(outside.replaceAll('/', '\\')), stable)
  assert.equal(main.outputOptions.sourcemapPathTransform('../src/client.jsx'), '../src/client.jsx')
})

test('the emitted client registers once under one plugin owner with usable source maps', async () => {
  const source = await readFile(new URL('../lib/client.js', import.meta.url), 'utf8')
  assert.equal(/\/\/#region (?:\.\.\/)+[^\n]*node_modules/u.test(source), false, 'client.js exposes an external dependency location')
  const registrations = []
  const context = vm.createContext({ window: { __ModuleLoader__: { load: value => registrations.push(value) } } })
  new vm.Script(source, { filename: 'client.js' }).runInContext(context)
  assert.equal(registrations.length, 1)
  assert.equal(registrations[0].id, 'dsh-codex-subscription')
  assert.equal(typeof registrations[0].factory, 'function')
  assert.equal(registrations[0].chunk, undefined)
  assert.equal(/\brequire\(['"]\.\/client\.[^'"]+['"]\)/u.test(source), false, 'client.js contains an unsupported synchronous relative chunk require')
  assert.equal(/\bimport\(['"]\.\/client\.[^'"]+['"]\)/u.test(source), false, 'client.js bypasses the host chunk loader with native import()')
  const map = JSON.parse(await readFile(new URL('../lib/client.js.map', import.meta.url), 'utf8'))
  assert.ok(map.sources.length > 0)
  assert.equal(map.sourcesContent.length, map.sources.length)
  assert.ok(!map.sources.some(item => /(?:\.\.\/)+.*node_modules/u.test(item)), 'dependency map paths must be portable')
  assert.ok(!map.sources.some(item => /sketch-studio|subscription-image-viewer\.jsx/u.test(item)), 'removed feature implementations must not be in the lite client')
})

test('the lite build emits a single client chunk and no feature builds', () => {
  const browser = config.filter(value => value.platform === 'browser')
  assert.equal(browser.length, 1)
  assert.equal(browser[0].outputOptions.entryFileNames, 'client.js')
  for (const value of browser) assert.equal(value.outputOptions.codeSplitting, false)
})
