import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, writeFile, mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { hostDshVersion, inspectSubagentRuntime, loadSubagentRuntime, matchingSubagentRuntimeVersion } from '../src/subagent-runtime.js'

test('missing optional runtime never loads a module or launches a process', async () => {
  const resolve = () => { throw Error('missing') }
  assert.deepEqual(inspectSubagentRuntime(resolve), { installed: false })
  await assert.rejects(loadSubagentRuntime({ resolve, run: () => assert.fail(), importModule: () => assert.fail() }), /not prepared/)
})

test('component selection follows the host cohort instead of an auto-installed plugin peer', async () => {
  const root = await mkdtemp(join(tmpdir(), 'subscription-host-cohort-'))
  try {
    const sdk = join(root, 'host', 'node_modules', '@deepseek-ai', 'dsh-llm')
    await mkdir(sdk, { recursive: true })
    const entry = join(root, 'host', 'entry.js'), peer = join(root, 'plugin-sdk.json')
    await writeFile(entry, '')
    await writeFile(join(sdk, 'package.json'), JSON.stringify({ version: '0.2.1-rc.3' }))
    await writeFile(peer, JSON.stringify({ version: '0.2.2-alpha.2' }))
    assert.equal(hostDshVersion(() => peer, entry), '0.2.1-rc.3')
    assert.equal(hostDshVersion(() => peer, join(root, 'missing-entry.js')), '0.2.2-alpha.2', 'embedded deployments retain the local SDK fallback')
  } finally { await rm(root, { recursive: true, force: true }) }
})
