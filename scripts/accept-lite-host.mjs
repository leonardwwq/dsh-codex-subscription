#!/usr/bin/env node
// Credential-free real-host smoke. Requires an already installed official DSH CLI and
// a packed candidate. No account is created or imported. All state is disposable.
import { spawn, spawnSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, rmSync, readFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { randomUUID } from 'node:crypto'

const [binArg, packageArg] = process.argv.slice(2)
if (!binArg || !packageArg || process.argv.length !== 4) {
  console.error('usage: node scripts/accept-lite-host.mjs <absolute-dsh-bin.js> <candidate.tgz>')
  process.exit(2)
}
const bin = resolve(binArg)
const candidate = resolve(packageArg)
const work = mkdtempSync(join(tmpdir(), 'dsh-lite-host-'))
const home = join(work, 'home')
mkdirSync(home)
// Deliberately do not inherit HOME, credentials, proxy, DSH_* or cloud secrets.
const env = { PATH: process.env.PATH, HOME: home, USERPROFILE: home, DSH_HOME: join(home, '.dsh'), XDG_CONFIG_HOME: join(home, 'config'), XDG_CACHE_HOME: join(home, 'cache'), XDG_DATA_HOME: join(home, 'data'), npm_config_userconfig: join(home, 'npmrc'), npm_config_globalconfig: join(home, 'global-npmrc'), npm_config_ignore_workspace_root_check: 'true', NO_PROXY: '127.0.0.1,localhost', ...(process.platform === 'win32' ? { SystemRoot: process.env.SystemRoot, TEMP: work, TMP: work } : { TMPDIR: work }) }
let server
try {
  const install = spawnSync(process.execPath, [bin, 'plugin', '--profile', 'web', 'add', candidate], { cwd: work, env, encoding: 'utf8', timeout: 180000 })
  if (install.status !== 0) {
    const output = `${install.stderr ?? ''}\n${install.stdout ?? ''}`
    const diagnostic = output.match(/diagnostics: ([^\r\n]+)/u)?.[1]
    let detail = ''
    if (diagnostic?.startsWith(`${env.DSH_HOME}/`)) {
      try { detail = readFileSync(diagnostic, 'utf8').slice(-1500) } catch {}
    }
    throw new Error(`plugin add failed (${install.status}): ${output.slice(-1000)}\n${detail}`)
  }
  const port = await new Promise((yes, no) => { const listener = createServer(); listener.on('error', no); listener.listen(0, '127.0.0.1', () => { const port = listener.address().port; listener.close(() => yes(port)) }) })
  server = spawn(process.execPath, [bin, 'web', '--no-open', '--port', String(port)], { cwd: work, env, stdio: ['ignore', 'pipe', 'pipe'] })
  let output = ''
  server.stdout.on('data', chunk => { output += chunk })
  server.stderr.on('data', chunk => { output += chunk })
  const deadline = Date.now() + 90000
  let url
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`host exited (${server.exitCode}): ${output.slice(-1500)}`)
    const match = output.match(/http:\/\/127\.0\.0\.1:\d+\/[^\s]*/u)
    if (match) { url = match[0]; break }
    await new Promise(done => setTimeout(done, 250))
  }
  if (!url) throw new Error(`host startup timeout: ${output.slice(-1500)}`)
  const page = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(5000) })
  const cookie = page.headers.getSetCookie().map(value => value.split(';')[0]).join('; ')
  for (const endpoint of ['status', 'remote/status']) {
    const response = await fetch(new URL(`/api/codex-subscription/${endpoint}`, url), { method: 'POST', headers: { 'content-type': 'application/json', cookie }, body: JSON.stringify({ type: 'client-request', rpcId: randomUUID(), method: `codex-subscription/${endpoint}`, payload: {} }), signal: AbortSignal.timeout(10000) })
    if (!response.ok) throw new Error(`${endpoint}: HTTP ${response.status}`)
    const result = await response.json()
    if (result.result?.ok !== true || (endpoint === 'status' && result.result.value?.authenticated !== false)) throw new Error(`${endpoint}: unexpected RPC response ${JSON.stringify(result).slice(0, 500)}`)
    console.log(`PASS ${endpoint} (credential-free real host)`)
  }
} catch (error) {
  console.error(`FAIL lite host: ${error.message}`)
  process.exitCode = 1
} finally {
  if (server && server.exitCode === null) {
    server.kill()
    await new Promise(done => { server.once('exit', done); setTimeout(done, 3000).unref() })
  }
  rmSync(work, { recursive: true, force: true })
}
