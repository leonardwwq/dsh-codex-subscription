import { appendFileSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { testGroup } from './test-groups.mjs'

function argument(name) {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim()
}

function normalizeBase(candidate) {
  if (candidate && !/^0+$/u.test(candidate)) {
    try {
      git('rev-parse', '--verify', `${candidate}^{commit}`)
      return candidate
    } catch {}
  }
  try {
    return git('rev-parse', 'HEAD^')
  } catch {
    return git('rev-parse', 'HEAD')
  }
}

const base = normalizeBase(argument('--base'))
const explicitFiles = argument('--files')
const files = (explicitFiles === undefined ? git('diff', '--name-only', `${base}...HEAD`) : explicitFiles)
  .split(',').flatMap(value => value.split(/\r?\n/u)).map(value => value.trim()).filter(Boolean)
const matches = patterns => files.some(file => patterns.some(pattern => pattern.test(file)))

// Manual CI reruns all local validation gates, even after test-only changes.
const fullAcceptance = process.env.GITHUB_EVENT_NAME === 'workflow_dispatch'
const plannerChanged = fullAcceptance || matches([/^scripts\/(?:ci-change-plan|test-groups|run-tests)\.mjs$/u, /^\.github\/workflows\/ci\.yml$/u,
  /^\.github\/scripts\/(?:accept-official-release\.ps1|test-official-runtime\.mjs|prepare-official-test-dependencies\.mjs)$/u])
const changedTest = group => files.some(file => testGroup(file) === group)
const runtime = fullAcceptance || matches([
  /^src\//u,
  /^lib\//u,
  /^cordis\.patch\.yml$/u,
  /^tsdown\.config\.mjs$/u,
])
const manager = plannerChanged || changedTest('manager') || matches([
  /^dsh-codex\.ps1$/u,
  /^\.github\/scripts\/accept-official-release\.ps1$/u,
])
const delivery = plannerChanged || runtime || changedTest('delivery') || matches([
  /^\.github\//u,
  /^(?:README(?:\.zh-CN|\.en)?|CONTRIBUTING|DIRECTORY|AGENTS|SECURITY|THIRD_PARTY_NOTICES|LICENSE)\.md$/u,
  /^screenshots\.json$/u,
  /^compatibility\.json$/u,
  /^package\.json$/u,
  /^pnpm-lock\.yaml$/u,
  /^pnpm-workspace\.yaml$/u,
  /^scripts\/prepare-compat-release\.mjs$/u,
])
const behavior = plannerChanged || runtime || changedTest('behavior') || matches([
  /^compatibility\.json$/u,
  /^package\.json$/u,
  /^pnpm-lock\.yaml$/u,
  /^pnpm-workspace\.yaml$/u,
])
const plan = { behavior, delivery, manager, runtime }
console.log(JSON.stringify({ base, files, plan }, null, 2))

if (process.env.GITHUB_OUTPUT && existsSync(process.env.GITHUB_OUTPUT)) {
  appendFileSync(process.env.GITHUB_OUTPUT, Object.entries(plan).map(([key, value]) => `${key}=${value}\n`).join(''))
}
