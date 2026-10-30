import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { testFiles } from '../scripts/test-groups.mjs'

const script = fileURLToPath(new URL('../scripts/ci-change-plan.mjs', import.meta.url))

function plan(files, event = 'push', extraArgs = []) {
  return spawnSync(process.execPath, [
    script,
    '--base', 'HEAD',
    '--files', files.join(','),
    ...extraArgs,
  ], { encoding: 'utf8', env: { ...process.env, GITHUB_EVENT_NAME: event } })
}

test('manual validation runs every local gate even for test-only changes', () => {
  const result = plan(['tests/remote-history-source.test.mjs'], 'workflow_dispatch')
  assert.equal(result.status, 0, result.stderr)
  assert.deepEqual(JSON.parse(result.stdout).plan, { behavior: true, delivery: true, manager: true, runtime: true })
})

test('documentation and marketplace screenshot changes run delivery checks without pretending runtime changed', () => {
  for (const file of ['README.md', 'README.en.md', 'CONTRIBUTING.md', 'screenshots.json']) {
    const result = plan([file])
    assert.equal(result.status, 0, result.stderr)
    assert.deepEqual(JSON.parse(result.stdout).plan, {
      behavior: false, delivery: true, manager: false, runtime: false,
    }, file)
  }
})

test('previously omitted suites and future behavior tests reach their CI gate', () => {
  for (const file of ['account-status-controller', 'account-vault', 'context-draft-state', 'image-original-store', 'preference-controller', 'quota-forecast', 'quota-forecast-store', 'subscription-image-viewer', 'future-behavior']) {
    const result = plan([`tests/${file}.test.mjs`])
    assert.equal(result.status, 0, result.stderr)
    assert.equal(JSON.parse(result.stdout).plan.behavior, true, file)
    if (file !== 'future-behavior') assert.ok(testFiles('behavior').includes(`tests/${file}.test.mjs`), file)
  }
  const viewerContract = plan(['tests/subscription-image-viewer-contract.test.mjs'])
  assert.equal(JSON.parse(viewerContract.stdout).plan.delivery, true)
  assert.ok(testFiles('delivery').includes('tests/subscription-image-viewer-contract.test.mjs'))
})

test('test dispatch changes exercise all local CI gates', () => {
  for (const file of ['scripts/test-groups.mjs', 'scripts/run-tests.mjs', '.github/scripts/accept-official-release.ps1', '.github/scripts/test-official-runtime.mjs', '.github/scripts/prepare-official-test-dependencies.mjs']) {
    const result = plan([file])
    assert.equal(result.status, 0, result.stderr)
    assert.deepEqual(JSON.parse(result.stdout).plan, {
      behavior: true, delivery: true, manager: true, runtime: false,
    })
  }
})

test('runtime changes run local gates without consulting published versions', () => {
  const result = plan(['src/index.js'], 'push', ['--package-version', '1.9.0', '--published', '1.10.0'])
  assert.equal(result.status, 0, result.stderr)
  const output = JSON.parse(result.stdout)
  assert.deepEqual(output.plan, { behavior: true, delivery: true, manager: false, runtime: true })
  assert.equal('publishedVersion' in output, false)
})

test('CI has local validation without registry version or official matrix gates', () => {
  const workflow = readFileSync(new URL('../.github/workflows/ci.yml', import.meta.url), 'utf8')
  const planner = readFileSync(script, 'utf8')
  assert.doesNotMatch(workflow, /(?:npm|pnpm)\s+view\b/u)
  assert.doesNotMatch(workflow, /official-acceptance:|matrix\.channel|--published/u)
  assert.doesNotMatch(planner, /execFileSync\(['"](?:npm|pnpm)['"]|publishedVersion|compareVersions/u)
  assert.match(workflow, /pnpm run test:behavior/u)
  assert.match(workflow, /pnpm run test:delivery/u)
  assert.match(workflow, /pnpm run build/u)
})
