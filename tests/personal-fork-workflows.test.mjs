import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const workflow = name => readFileSync(new URL(`../.github/workflows/${name}.yml`, import.meta.url), 'utf8')
const job = (source, name) => {
  const match = source.match(new RegExp(`^  ${name}:\\n([\\s\\S]*?)(?=^  [\\w-]+:|$(?![\\s\\S]))`, 'mu'))
  assert.ok(match, `missing job ${name}`)
  return match[1]
}

test('personal fork disables inherited compatibility and publishing even on manual dispatch', () => {
  const compatibility = workflow('upstream-compatibility')
  const publish = workflow('publish')
  assert.doesNotMatch(compatibility, /^  schedule:/mu)
  for (const [source, name] of [[compatibility, 'prepare'], [publish, 'preflight']]) {
    assert.match(job(source, name), /^    if: \$\{\{ false \}\}$/mu)
  }
  for (const [source, name] of [[compatibility, 'promote'], [publish, 'release']]) {
    assert.match(job(source, name), /^    if: [^\n]* && false$/mu)
  }
  // always() bypasses skipped dependencies, so this job needs its own hard guard.
  assert.match(job(publish, 'publish-npm'), /^    if: >-\n      always\(\) &&\n      false &&/mu)
})
