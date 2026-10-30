import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const compatibility = JSON.parse(readFileSync(new URL('../compatibility.json', import.meta.url), 'utf8'))

test('lite evidence is separate from historical compatibility claims', () => {
  assert.match(compatibility.evidence.scope, /historical pre-lite/u)
  assert.ok(Array.isArray(compatibility.evidence.liteVerified))
  for (const version of compatibility.evidence.liteVerified) {
    assert.match(version, /^\d+\.\d+\.\d+(?:-[\w.-]+)?$/u)
    assert.ok([...compatibility.supported, ...compatibility.previews].includes(version))
  }
  assert.equal(new Set(compatibility.evidence.liteVerified).size, compatibility.evidence.liteVerified.length)
})

test('real host acceptance refuses to guess a host or use existing credentials', () => {
  const script = new URL('../scripts/accept-lite-host.mjs', import.meta.url)
  const result = spawnSync(process.execPath, [script.pathname], { encoding: 'utf8' })
  assert.equal(result.status, 2)
  assert.match(result.stderr, /usage:/u)
  const source = readFileSync(script, 'utf8')
  assert.doesNotMatch(source, /\.\.\.process\.env|credentialsHome|cpSync/u)
  assert.match(source, /DSH_HOME: join\(home/u)
})

test('retained official acceptance probes credential-free RPC after web readiness', () => {
  const script = readFileSync(new URL('../.github/scripts/accept-official-release.ps1', import.meta.url), 'utf8')
  assert.match(script, /\$env:DSH_HOME = Join-Path \$acceptanceRoot 'dsh-home'/u)
  assert.match(script, /foreach \(\$endpoint in @\('status', 'remote\/status'\)\)/u)
  assert.match(script, /Invoke-RestMethod -Method Post[\s\S]*?-WebSession \$webSession/u)
  assert.match(script, /\$rpc\.result\.ok -ne \$true/u)
  assert.match(script, /\$rpc\.result\.value\.authenticated -ne \$false/u)
  assert.match(script, /Assert-InstalledOnce\s+Start-And-ProbeWeb/u)
  for (const workflow of ['publish.yml', 'upstream-compatibility.yml']) {
    const source = readFileSync(new URL(`../.github/workflows/${workflow}`, import.meta.url), 'utf8')
    assert.match(source, /accept-official-release\.ps1/u, workflow)
  }
})
