import { createSettingsAdapter } from './settings-adapter.js'
import { observeAdapter } from './request-observer.js'
import { createLiteModelDirectory } from './hidden-model-directory.js'
import { createDefaultModelController } from './default-model.js'
import { withDefaultReasoningEffort } from './default-reasoning-effort.js'
import { DEFAULT_REASONING_EFFORT_FIELD, normalizeDefaultReasoningEffort } from './settings-contract.js'
import { PREFERENCE_FIELDS, normalizeReasoningCache } from './preference-fields.js'
import { createSubscriptionConnection } from './subscription-connection.js'
import { createCompactionBridge } from './subscription-compaction.js'
import { createReasoningBridge } from './subscription-reasoning.js'
import { registerSubscriptionTransport } from './subscription-transport.js'
import * as dshCredentials from '@deepseek-ai/dsh-credentials'
import WebSocket from 'ws'
import { hostname } from 'node:os'
import { readSubscriptionCredentials } from './subscription-credentials.js'
import { USER_AGENT } from './version.js'
import { createRemoteControl } from './remote-control.js'
import { createDshRemoteControl } from './remote-control-dsh.js'
import { createRemoteHistorySource } from './remote-history-source.js'
import { createUltraExecutionPreset } from './ultra-execution.js'
import { loadHostSessionSdk } from './host-session-sdk.js'
import { createRemoteImageAssets } from './remote-image-assets.js'
import { dshHomePath } from '@deepseek-ai/dsh-home-paths'
import * as dshLlm from '@deepseek-ai/dsh-llm'
import { retryPolicyFor } from './retry-policy.js'
import { PiAiAdapter } from '@deepseek-ai/dsh-llm-pi-ai'
import { createRequire } from 'node:module'

// Match the settings host's volatile protocol, not a stale profile-local peer.
const z = createRequire(import.meta.resolve('@deepseek-ai/dsh-settings'))('@deepseek-ai/schemastery')

import { createCodexAuthService, DshOAuthCredentialStore } from './credential-store.js'
import { DshOAuthAccountVault } from './account-vault.js'
import { openCodexAuthUrl } from './external-url.js'
import { CodexLoginCoordinator, createCodexRpcHandler } from './login-coordinator.js'
import { createCodexNetworkTransport } from './oauth-network.js'
import { createModels, openaiCodexProvider, openaiCodexSubscriptionProvider } from './pi-ai-runtime.js'
import { createOfficialModelCatalog, withModelCatalogReady } from './model-catalog.js'
import { readCapabilitySettings, normalizeSearchDomains, CUSTOM_CONTEXT_OVERRIDES_FIELD, SEARCH_MODE_FIELD, SEARCH_MODES, SEARCH_DOMAINS_FIELD, QUOTA_ALERTS_FIELD, QUOTA_ALERT_MODES, QUOTA_THRESHOLD_FIELDS, MAX_CONTEXT_BUDGET } from './capability-settings.js'
import { FETCH_PROVIDER_FIELD, normalizeFetchProvider } from './settings-contract.js'
import { IMAGE_FEATURE_DEFAULTS } from './image-features.js'
import { IMAGE_MODELS, DEFAULT_IMAGE_MODEL } from './image-models.js'
import { diagnosticLog } from './diagnostic-log.js'
import { setAuthFailureLogger } from './http-failure.js'
import { PACKAGE_VERSION } from './version.js'
import { hostDshVersion } from './subagent-runtime.js'
import { createDiagnosticOperations } from './diagnostic-operations.js'
import { VOICE_CALL_FIELD, VOICE_VOICE_FIELD, VOICE_LANGUAGE_FIELD, normalizeVoiceCall, normalizeVoiceVoice, normalizeVoiceLanguage, AUTO_QUOTA_RETRY_FIELD, CONNECTORS_FIELD, normalizeConnectorMode, CONTEXT_MODE_FIELD, contextModelGroups, CUSTOM_CONTEXT_MODEL_CAPS, CUSTOM_CONTEXT_MODEL_DEFAULTS, CUSTOM_CONTEXT_MODEL_FIELDS, CUSTOM_CONTEXT_WINDOW_FIELD, DEFAULT_AUTO_QUOTA_RETRY, DEFAULT_CUSTOM_CONTEXT_WINDOW, DISABLED_MODELS_FIELD, INPUT_IMAGE_DETAIL_FIELD, REASONING_SUMMARY_FIELD, normalizeReasoningSummary, RETRY_POLICY_FIELD, normalizeRetryPolicy, STREAM_IDLE_TIMEOUT_MINUTES_FIELD, LEGACY_QUICK_QUOTA_FIELD, normalizeAutoQuotaRetry, normalizeDisabledModels, normalizeInputImageDetail, normalizeQuickQuotaMode, normalizeOutputVerbosity, normalizeStreamIdleTimeoutMinutes, QUICK_QUOTA_MODE_FORECAST, QUICK_QUOTA_MODE_FIELD, OUTPUT_VERBOSITY_FIELD, SEARCH_PROVIDER_FIELD, SPEED_MODE_FIELD, normalizeContextMode, normalizeCustomContextWindow, supportsCodexFastMode } from './settings-contract.js'
import { createCodexUsageReader } from './usage.js'
import { createAccountUsageReader } from './account-usage.js'
import { createPlanHistoryReader } from './plan-history.js'
import { createUsageProfileReader } from './usage-profile.js'
import { createQuotaForecastReader } from './quota-forecast.js'
import { QuotaForecastStateStore } from './quota-forecast-store.js'

export const name = 'codex-subscription'
export const inject = ['llm', 'credentials', 'settings', 'attachments']

const PROVIDER = 'openai-codex'
const OAUTH_EXPIRY_SKEW_MS = 60_000
const CREDENTIAL_REF = dshCredentials.credentialRef('OPENAI_CODEX_SUBSCRIPTION_OAUTH')
const LEGACY_CREDENTIAL_REF = dshCredentials.credentialRef('WSL043_OPENAI_CODEX_OAUTH')
const ACCOUNT_VAULT_KEY = dshCredentials.credentialKey('codex-subscription', 'accounts')
const MAX_REQUEST_IMAGE_BYTES = 20 * 1024 * 1024
const REQUEST_IMAGE_PIXEL_BUDGET = 2048 * 2048
const REQUEST_IMAGE_MAX_BYTES = 1024 * 1024

import { createSubscriptionRpcHandler } from './subscription-rpc.js'
export { createSubscriptionRpcHandler } from './subscription-rpc.js'

const settingsFields = {
  [DISABLED_MODELS_FIELD]: z.transform(z.array(z.string()).max(100), normalizeDisabledModels).default([]),
  [AUTO_QUOTA_RETRY_FIELD]: z.boolean().default(DEFAULT_AUTO_QUOTA_RETRY),
  ...Object.fromEntries(Object.entries(PREFERENCE_FIELDS).map(([field, rule]) => [field, rule.default === undefined ? z.union(rule.choices) : z.union(rule.choices).default(rule.default)])),
  imageModel: z.union(Object.keys(IMAGE_MODELS)).default(DEFAULT_IMAGE_MODEL),
  imageQuality: z.union(['auto','low','medium','high','xhigh','max']).default('auto'),
  ...Object.fromEntries(Object.entries(IMAGE_FEATURE_DEFAULTS).map(([key, value]) => [key, z.boolean().default(value)])),
  [CUSTOM_CONTEXT_OVERRIDES_FIELD]: z.dict(z.number().step(1).min(1).max(MAX_CONTEXT_BUDGET)).default({}),
  [SEARCH_MODE_FIELD]: z.union(SEARCH_MODES).default('live'),
  [SEARCH_DOMAINS_FIELD]: z.transform(z.array(z.string()).max(20), normalizeSearchDomains).default([]),
  ...Object.fromEntries(QUOTA_THRESHOLD_FIELDS.map(key => [key, z.number().step(1).min(1).max(100).default(20)])),
  [QUOTA_ALERTS_FIELD]: z.union(QUOTA_ALERT_MODES).default('important'),
  [LEGACY_QUICK_QUOTA_FIELD]: z.boolean(),
  [CUSTOM_CONTEXT_WINDOW_FIELD]: z.number().step(1).min(128_000).max(1_000_000).default(DEFAULT_CUSTOM_CONTEXT_WINDOW),
  ...Object.fromEntries(Object.entries(CUSTOM_CONTEXT_MODEL_FIELDS).map(([modelKey, field]) => [field, z.number().step(1).min(128_000).max(CUSTOM_CONTEXT_MODEL_CAPS[modelKey]).default(CUSTOM_CONTEXT_MODEL_DEFAULTS[modelKey])])),
}
// Keep the metadata API usable by older hosts; the host-matched Schemastery
// above also creates the runtime references required by newer volatile loaders.
export const Config = z.object(Object.fromEntries(Object.entries(settingsFields).map(([key, field]) => [key, field.extra('volatile', true)])))

export function apply(ctx, config = {}) {
  try {
  const settings = createSettingsAdapter(ctx, config)
  if (!process.env.NODE_TEST_CONTEXT) diagnosticLog.attach(dshHomePath('state', 'codex-subscription', 'diagnostic-log.jsonl'))
  diagnosticLog.info('plugin', `loaded ${PACKAGE_VERSION}`, `DSH ${hostDshVersion() ?? 'unknown'}, node ${process.version}, ${process.platform}`)
  setAuthFailureLogger((message, detail) => diagnosticLog.error('auth', message, detail))
  const network = createCodexNetworkTransport()
  const diagnosticOperations = createDiagnosticOperations()
  ctx.effect(() => ctx.on?.('tools/result', (exec, result) => diagnosticOperations.tool(exec, result)), 'codex-subscription: operation evidence')
  const accountVault = new DshOAuthAccountVault(ctx.credentials, {
    key: ACCOUNT_VAULT_KEY,
    legacyRef: CREDENTIAL_REF,
    legacyRefs: [LEGACY_CREDENTIAL_REF],
  })
  const store = new DshOAuthCredentialStore(ctx.credentials, CREDENTIAL_REF, [LEGACY_CREDENTIAL_REF], {
    expirySkewMs: OAUTH_EXPIRY_SKEW_MS,
    vault: accountVault,
  })
  const baseProvider = openaiCodexProvider()
  let resolveAuth = async () => undefined
  const modelCatalog = createOfficialModelCatalog({
    onUpdated: () => ctx.llm.emitAdaptersUpdated?.(),
    onCacheError: error => ctx.logger?.debug?.('could not access the Codex model catalog cache (%s)', error?.code ?? error?.name ?? 'unknown error'),
    cacheDirectory: dshHomePath('state', 'codex-subscription', 'model-catalog'),
    getAuth: options => resolveAuth(options),
    readCredential: options => store.read(PROVIDER, options),
    baseModels: () => baseProvider.getModels(),
    fetch: (input, init) => network.fetch('catalog', input, init),
    retryDelaysMs: [5_000, 15_000, 30_000, 60_000, 120_000, 300_000],
  })
  const appendUltraPolicy = loadHostSessionSdk()?.appendPluginRecord
  const ultra = createUltraExecutionPreset({
    catalog: modelCatalog,
    resolveAgent: () => ctx.get?.('agents')?.currentInitiator?.(),
    defaultEffort: () => settings.get()[DEFAULT_REASONING_EFFORT_FIELD],
    record: appendUltraPolicy,
  })
  ctx.effect(() => ultra.install(ctx), 'codex-subscription: Ultra execution preset')
  const connection = createSubscriptionConnection({ resolveMode: () => settings.get().connectionMode })
  // The settings surface edits DSH's own default model instead of keeping a
  // second copy, so every new conversation opens on what the user selected.
  const defaultModel = createDefaultModelController({
    resolveService: () => ctx.get?.('agentDefaultModel'),
    resolveEditor: () => ctx.get?.('configEditor'),
    listModels: () => modelCatalog.getModels().map(model => model.id),
  })
  const accountScope = async () => {
    await resolveAuth()
    const credential = await store.read(PROVIDER)
    return credential?.type === 'oauth' ? credential.accountId : undefined
  }
  const compaction = createCompactionBridge({ enabled: () => settings.get().compactionMode === 'cloud', accountScope })
  const reasoning = createReasoningBridge({
    enabled: () => normalizeReasoningCache(settings.get().reasoningCache) === 'on',
    supportsModel: id => modelCatalog.metadata(id)?.supportsReasoningEffortUpdates === true,
    resolveSession: id => ctx.get?.('sessions')?.get?.(id),
    cloud: () => settings.get().compactionMode === 'cloud',
    unlimited: () => settings.get()[RETRY_POLICY_FIELD] === 'unlimited',
    accountScope,
    diagnostic: reason => diagnosticLog.info('model', `cache-preserving reasoning: ${reason}`),
  })
  ctx.on('session/created', session => reasoning.sessionCreated(session))
  ctx.on('session/disposed', session => reasoning.sessionDisposed(session))
  ctx.on('session/event', (session, event) => reasoning.sessionEvent(session, event))
  ctx.effect(() => () => connection.dispose())
  const provider = openaiCodexSubscriptionProvider({
    ultra,
    connection,
    compaction,
    reasoning,
    resolveSpeedMode: () => settings.get()[SPEED_MODE_FIELD],
    resolveOutputVerbosity: () => normalizeOutputVerbosity(settings.get()[OUTPUT_VERBOSITY_FIELD]),
    resolveInputImageDetail: () => settings.get()[INPUT_IMAGE_DETAIL_FIELD],
    resolveReasoningSummary: () => settings.get()[REASONING_SUMMARY_FIELD],
    resolveContextMode: () => normalizeContextMode(settings.get()[CONTEXT_MODE_FIELD]),
    resolveCustomContextWindow: modelKey => {
      const overrides = readCapabilitySettings(settings.get())[CUSTOM_CONTEXT_OVERRIDES_FIELD]
      if (Object.hasOwn(overrides, modelKey)) return overrides[modelKey]
      const field = CUSTOM_CONTEXT_MODEL_FIELDS[modelKey]
      if (field === undefined) return undefined
      return normalizeCustomContextWindow(settings.get()[field] ?? CUSTOM_CONTEXT_MODEL_DEFAULTS[modelKey], CUSTOM_CONTEXT_MODEL_CAPS[modelKey])
    },
    resolveReviewModel: () => settings.get().reviewModel,
    catalog: modelCatalog,
    runNetwork: network.run,
  })
  let fetchRouted = false
  const preferences = {
    status: () => {
      const models = modelCatalog.getModels()
      return {
        [DISABLED_MODELS_FIELD]: normalizeDisabledModels(settings.get()[DISABLED_MODELS_FIELD]),
        [AUTO_QUOTA_RETRY_FIELD]: normalizeAutoQuotaRetry(settings.get()[AUTO_QUOTA_RETRY_FIELD]),
        compactionMode: settings.get().compactionMode ?? 'dsh',
        reasoningCache: normalizeReasoningCache(settings.get().reasoningCache),
        [DEFAULT_REASONING_EFFORT_FIELD]: normalizeDefaultReasoningEffort(settings.get()[DEFAULT_REASONING_EFFORT_FIELD]),
        connectionMode: settings.get().connectionMode ?? 'sse',
        reviewModel: settings.get().reviewModel ?? 'session',
        remoteControl: settings.get().remoteControl ?? 'off',
        composerPredictions: settings.get().composerPredictions === 'on' ? 'on' : 'off',
        otherModels: settings.get().otherModels === 'off' ? 'off' : 'on',
        subagentBackend: settings.get().subagentBackend ?? 'dsh',
        subagentBackendAvailable: false,
        subagentRuntimeInstalled: false,
        ...readCapabilitySettings(settings.get()),
        [QUICK_QUOTA_MODE_FIELD]: normalizeQuickQuotaMode(
          settings.get()[QUICK_QUOTA_MODE_FIELD],
          settings.get()[LEGACY_QUICK_QUOTA_FIELD],
        ),
        [SEARCH_PROVIDER_FIELD]: settings.get()[SEARCH_PROVIDER_FIELD],
        [FETCH_PROVIDER_FIELD]: normalizeFetchProvider(settings.get()[FETCH_PROVIDER_FIELD]),
        fetchRoutingAvailable: fetchRouted,
        [SPEED_MODE_FIELD]: settings.get()[SPEED_MODE_FIELD],
        [OUTPUT_VERBOSITY_FIELD]: normalizeOutputVerbosity(settings.get()[OUTPUT_VERBOSITY_FIELD]),
        [INPUT_IMAGE_DETAIL_FIELD]: normalizeInputImageDetail(settings.get()[INPUT_IMAGE_DETAIL_FIELD]),
        [REASONING_SUMMARY_FIELD]: normalizeReasoningSummary(settings.get()[REASONING_SUMMARY_FIELD]),
        [VOICE_CALL_FIELD]: normalizeVoiceCall(settings.get()[VOICE_CALL_FIELD]),
        [VOICE_VOICE_FIELD]: normalizeVoiceVoice(settings.get()[VOICE_VOICE_FIELD]),
        [VOICE_LANGUAGE_FIELD]: normalizeVoiceLanguage(settings.get()[VOICE_LANGUAGE_FIELD]),
        [RETRY_POLICY_FIELD]: normalizeRetryPolicy(settings.get()[RETRY_POLICY_FIELD]),
        [CONNECTORS_FIELD]: normalizeConnectorMode(settings.get()[CONNECTORS_FIELD]),
        [STREAM_IDLE_TIMEOUT_MINUTES_FIELD]: normalizeStreamIdleTimeoutMinutes(settings.get()[STREAM_IDLE_TIMEOUT_MINUTES_FIELD]),
        [CONTEXT_MODE_FIELD]: normalizeContextMode(settings.get()[CONTEXT_MODE_FIELD]),
        [CUSTOM_CONTEXT_WINDOW_FIELD]: normalizeCustomContextWindow(settings.get()[CUSTOM_CONTEXT_WINDOW_FIELD]),
        ...Object.fromEntries(Object.entries(CUSTOM_CONTEXT_MODEL_FIELDS).map(([modelKey, field]) => [field, normalizeCustomContextWindow(settings.get()[field] ?? CUSTOM_CONTEXT_MODEL_DEFAULTS[modelKey], CUSTOM_CONTEXT_MODEL_CAPS[modelKey])])),
        contextModels: contextModelGroups(models),
        availableModels: models.map(({ id, name }) => ({ id, name })),
        catalogStatus: modelCatalog.status(),
        verbosityModels: provider.getModels().filter(model => modelCatalog.metadata(model.id)?.supportVerbosity ?? model.id !== 'gpt-5.3-codex-spark').map(model => model.id),
        ultrafastModels: provider.getModels().filter(model => modelCatalog.metadata(model.id)?.supportsUltrafast === true).map(model => model.id),
        ultraModels: provider.getModels().filter(model => ultra.supported(model.id)).map(model => model.id),
        fastModels: provider.getModels().filter(model => modelCatalog.metadata(model.id)?.supportsFast ?? supportsCodexFastMode(model.id)).map(model => model.id),
        writable: ctx.settings.writable,
      }
    },
    update: async patch => {
      const rest = { ...patch }
      if (Object.keys(rest).some(key => key !== 'remoteControl')) throw new Error('Only Remote Control settings are available')
      if (Object.keys(rest).length) await settings.update(rest)
    },
  }
  const authModels = createModels({ credentials: store })
  authModels.setProvider(provider)
  const profile = Object.freeze({
    provider: PROVIDER,
    displayName: 'ChatGPT subscription',
    piProvider: provider,
    configuredMaxTokens: new Map(),
    // Custom PiAiAdapter profiles bypass the settings-backed profile resolver,
    // so the model diagnostics the host adapter reads on resolution must be
    // present here rather than left undefined.
    modelErrors: new Map(),
    // Custom PiAiAdapter profiles bypass the settings-backed profile resolver,
    // so request-image limits must be complete here rather than left undefined.
    maxRequestImageBytes: MAX_REQUEST_IMAGE_BYTES,
    requestImagePixelBudget: REQUEST_IMAGE_PIXEL_BUDGET,
    requestImageMaxBytes: REQUEST_IMAGE_MAX_BYTES,
    // pi-ai owns prompt_cache_key and encrypted reasoning replay. The explicit
    // profile values make the subscription cache contract auditable.
    cacheRetention: 'short',
    // The request-local connection policy upgrades this only when opted in.
    transport: 'sse',
  })
  // Retries are DSH's own: this only hands its retry layer the policy the person chose.
  const retryProfile = choice => {
    const retryPolicy = retryPolicyFor(choice, dshLlm.resolveRetryPolicy)
    return retryPolicy === undefined ? {} : { retryPolicy }
  }
  let profileKey
  let profileSnapshot
  const profiles = () => {
    const preferences = settings.get()
    const streamIdleTimeoutMinutes = normalizeStreamIdleTimeoutMinutes(preferences[STREAM_IDLE_TIMEOUT_MINUTES_FIELD])
    const retryChoice = normalizeRetryPolicy(preferences[RETRY_POLICY_FIELD])
    const key = JSON.stringify([modelCatalog.revision(), streamIdleTimeoutMinutes, retryChoice, normalizeContextMode(preferences[CONTEXT_MODE_FIELD]), preferences[CUSTOM_CONTEXT_OVERRIDES_FIELD], ...Object.values(CUSTOM_CONTEXT_MODEL_FIELDS).map(field => preferences[field])])
    if (key !== profileKey) {
      profileKey = key
      profileSnapshot = new Map([[PROVIDER, Object.freeze({ ...profile, streamIdleTimeoutMs: streamIdleTimeoutMinutes * 60 * 1000, ...retryProfile(retryChoice) })]])
    }
    return profileSnapshot
  }
  resolveAuth = () => authModels.getAuth(PROVIDER)
  const adapterAuth = Object.freeze({
    credentials: store,
    authContext: Object.freeze({
      env: async () => undefined,
      fileExists: async () => false,
    }),
  })
  const adapter = new PiAiAdapter({
    profiles,
    resolveApiKey: async () => {
      let resolved
      try {
        resolved = await resolveAuth()
      } catch (error) {
        // DSH lists models by resolving the route's key; signed out has to read as "no credential".
        if (error?.code === 'MISSING_CREDENTIAL') throw new dshLlm.LlmError('ChatGPT subscription is not signed in', 'MISSING_CREDENTIAL')
        throw new dshLlm.LlmError('ChatGPT subscription authorization failed', 'AUTH_FAILED')
      }
      if (typeof resolved?.auth.apiKey !== 'string' || resolved.auth.apiKey.length === 0) {
        throw new dshLlm.LlmError('ChatGPT subscription is not signed in', 'MISSING_CREDENTIAL')
      }
      return resolved.auth.apiKey
    },
    auth: adapterAuth,
    resolveAttachments: () => ctx.get?.('attachments'),
  })
  // Hiding a model means "do not use it": the host directory drops hidden models, except those a session, the default or a plugin setting still uses.
  const hiddenDirectory = createLiteModelDirectory({
    provider: PROVIDER,
    disabled: () => normalizeDisabledModels(settings.get()[DISABLED_MODELS_FIELD]),
    pinned: () => {
      const keep = []
      try {
        for (const session of ctx.get?.('sessions')?.list?.() ?? []) {
          const route = session.requestContext?.()
          if (route?.provider === PROVIDER && typeof route.model === 'string') keep.push(route.model)
        }
      } catch {}
      const selection = defaultModel.status()
      if (selection.managed) keep.push(selection.model)
      return keep
    },
    fallback: () => { const selection = defaultModel.status(); return selection.managed ? selection.model : undefined },
    emit: () => ctx.llm.emitAdaptersUpdated?.(),
  })
  ctx.effect(() => settings.watch((value, previous) => hiddenDirectory.settingsChanged(normalizeDisabledModels(value[DISABLED_MODELS_FIELD]), normalizeDisabledModels(previous[DISABLED_MODELS_FIELD]))), 'codex-subscription: hidden model directory')
  ctx.effect(() => ctx.on?.('session/event', (_session, event) => { if (event?.type === 'request/context') hiddenDirectory.dependenciesChanged() }), 'codex-subscription: hidden model dependencies')
  ctx.effect(() => settings.watch((value, previous) => {
    if (normalizeDefaultReasoningEffort(value[DEFAULT_REASONING_EFFORT_FIELD]) !== normalizeDefaultReasoningEffort(previous[DEFAULT_REASONING_EFFORT_FIELD])) ctx.llm.emitAdaptersUpdated?.()
  }), 'codex-subscription: default reasoning effort')
  ctx.effect(() => {
    const lifetime = new AbortController()
    const defaults = withDefaultReasoningEffort(ultra.wrapAdapter(observeAdapter(reasoning.wrapAdapter(compaction.wrapAdapter(provider.wrapRetryAdapter(adapter))), provider)), {
      preference: () => settings.get()[DEFAULT_REASONING_EFFORT_FIELD],
      modelDefault: id => modelCatalog.metadata(id)?.defaultReasoningEffort,
    })
    const readyAdapter = withModelCatalogReady(hiddenDirectory.wrap(defaults), modelCatalog, { signal: lifetime.signal })
    const disposeAdapter = ctx.llm.registerAdapter([PROVIDER], readyAdapter)
    // Defer credential work until the synchronous apply() has installed resolveAuth.
    void Promise.resolve().then(() => modelCatalog.refresh({ signal: lifetime.signal }))
      .catch(error => { if (!lifetime.signal.aborted) ctx.logger?.debug?.('could not refresh Codex model catalog (%s)', error?.code ?? error?.name ?? 'unknown error') })
    return () => {
      lifetime.abort()
      disposeAdapter?.()
      modelCatalog.clear()
    }
  }, 'codex-subscription: official model catalog')
  const auth = createCodexAuthService(authModels, store, {
    runLogin: operation => network.run('login', operation),
    accountVault,
    createLoginModels: credentials => {
      const loginModels = createModels({ credentials })
      loginModels.setProvider(provider)
      return loginModels
    },
  })
  const coordinator = new CodexLoginCoordinator(auth, {
    onLoginStart: () => remoteControl.suspend(),
    onLoginSettled: (_id, suspended) => { if (suspended) return remoteControl.resume() },
  })
  const remoteImages = createRemoteImageAssets({
    credentials: ({ signal }) => readSubscriptionCredentials(resolveAuth, options => store.read(PROVIDER, { ...options, signal }), signal),
    fetch: (input, init) => network.fetch('remote', input, init),
    stateFile: dshHomePath('state', 'codex-subscription', 'remote-images.json'),
  })
  const remoteBridge = createDshRemoteControl({
    controller: () => ctx.get?.('sessionController'),
    agents: () => ctx.get?.('agents'),
    permissions: () => ctx.get?.('permissionPresets'),
    workspaces: () => ctx.get?.('workspaceRegistry'),
    attachments: () => ctx.attachments,
    remoteImages,
    usage: () => usageReader,
    usageProfile: () => usageProfileReader,
    projections: () => ctx.get?.('sessionProjections'),
    skills: () => ctx.get?.('skills'),
    commands: () => ctx.get?.('commands'),
    llm: () => ctx.llm,
    modelMetadata: (provider, model) => provider === PROVIDER ? modelCatalog.metadata(model) : undefined,
    historySource: createRemoteHistorySource({ query: () => ctx.get?.('sessionQuery') }),
    speed: {
      tiers: (provider, model) => provider === PROVIDER ? (modelCatalog.metadata(model)?.serviceTiers ?? []) : [],
      current: () => settings.get()[SPEED_MODE_FIELD],
      set: mode => settings.update({ [SPEED_MODE_FIELD]: mode }),
    },
    trace: entry => { try { remoteControl.host.note(entry) } catch { /* diagnostics only */ } },
    userAgent: USER_AGENT,
    configFile: dshHomePath('state', 'codex-subscription', 'remote-config.json'),
  })
  ctx.effect(() => () => remoteBridge.close())
  const remoteControl = createRemoteControl({
    credentials: signal => readSubscriptionCredentials(resolveAuth, options => store.read(PROVIDER, { ...options, signal }), signal),
    WebSocket,
    fetch: (input, init) => network.fetch('remote', input, init),
    stateFile: dshHomePath('state', 'codex-subscription', 'remote-control.json'),
    debugFile: dshHomePath('state', 'codex-subscription', 'remote-debug.jsonl'),
    hostName: `DSH (${hostname()})`,
    userAgent: USER_AGENT,
    // Only for acceptance runs against a local stand-in relay; anything but chatgpt.com or a loopback address is refused.
    base: process.env.DSH_CODEX_REMOTE_BASE || undefined,
    methods: remoteBridge.methods,
    onStartError: () => ctx.logger?.debug?.('Remote Control background start failed'),
    onActive: (_client, notify) => remoteBridge.adopt(notify),
    onClose: (_client, notify) => remoteBridge.forget(notify),
  })
  ctx.on('agent/assistant-stream', ({ agent, frame }) => { try { remoteBridge.onStream(agent?.session, frame) } catch { /* the phone view must never disturb the session */ } })
  ctx.on('session/event', (session, event) => { try { remoteBridge.onSessionEvent(session, event) } catch { /* the phone view must never disturb the session */ } })
  // Prepended: the DSH window answers these too and would otherwise claim them before the phone sees them.
  ctx.on('approval/request', (request, next) => { try { return remoteBridge.onApproval(request, next) } catch { return next() } }, true)
  ctx.on('user-questions/request', (request, next) => { try { return remoteBridge.onQuestion(request, next) } catch { return next() } }, true)
  ctx.effect(() => {
    // Remote Control stays off until the user switches it on; then it follows the setting.
    let wanted = false
    const follow = value => {
      const next = value.remoteControl === 'on'
      if (next === wanted) return
      wanted = next
      void (next ? remoteControl.enable() : remoteControl.disable()).catch(error => ctx.logger?.debug?.('Remote Control: %s', error?.code ?? error?.message))
    }
    follow(settings.get())
    const unwatch = settings.watch(follow)
    return () => { unwatch(); void remoteControl.disable().catch(() => {}) }
  }, 'codex-subscription: Remote Control host')
  const baseUsageReader = createCodexUsageReader({
    getAuth: resolveAuth,
    readCredential: options => store.read(PROVIDER, options),
    fetch: (input, init) => network.fetch('quota', input, init),
  })
  const planHistoryReader = createPlanHistoryReader({
    getAuth: resolveAuth,
    readCredential: options => store.read(PROVIDER, options),
    fetch: (input, init) => network.fetch('quota', input, init),
  })
  const usageProfileReader = createUsageProfileReader({
    getAuth: resolveAuth,
    readCredential: options => store.read(PROVIDER, options),
    fetch: (input, init) => network.fetch('quota', input, init),
  })
  const usageReader = createQuotaForecastReader({
    reader: baseUsageReader,
    enabled: () => normalizeQuickQuotaMode(settings.get()[QUICK_QUOTA_MODE_FIELD], settings.get()[LEGACY_QUICK_QUOTA_FIELD]) === QUICK_QUOTA_MODE_FORECAST,
    scope: async () => await accountVault?.activeId() ?? 'legacy',
    stateStore: new QuotaForecastStateStore({
      filename: dshHomePath('state', 'codex-subscription', 'quota-forecast.json'),
    }),
  })
  ctx.effect(() => {
    let forecasting = false
    const warmForecast = value => {
      const next = normalizeQuickQuotaMode(value[QUICK_QUOTA_MODE_FIELD], value[LEGACY_QUICK_QUOTA_FIELD]) === QUICK_QUOTA_MODE_FORECAST
      if (!next) {
        if (forecasting) void usageReader.clear().catch(error => ctx.logger?.debug?.('could not clear Codex quota forecast: %s', error.message))
        forecasting = false
        return
      }
      forecasting = true
      void usageReader.read().catch(error => ctx.logger?.debug?.('could not warm Codex quota forecast: %s', error.message))
    }
    warmForecast(settings.get())
    const unwatch = settings.watch(warmForecast)
    return () => {
      unwatch()
      usageReader.clearCache()
    }
  }, 'codex-subscription: quota forecast warm-up')
  const accountUsageReader = createAccountUsageReader({
    vault: accountVault,
    createModels: credentials => {
      const accountModels = createModels({ credentials })
      accountModels.setProvider(provider)
      return accountModels
    },
    fetch: (input, init) => network.fetch('quota', input, init),
    expirySkewMs: OAUTH_EXPIRY_SKEW_MS,
    activeReader: baseUsageReader,
  })
  const subscriptionHandler = createSubscriptionRpcHandler({
    authHandler: createCodexRpcHandler(coordinator, { openExternal: openCodexAuthUrl }),
    usageReader,
    accountUsageReader,
    planHistoryReader,
    usageProfileReader,
    preferences,
    defaultModel,
    remoteControl,
    loginLifecycleManaged: true,
    onAccountChanged: () => { usageProfileReader.clear() },
    onCleanupFailure: () => diagnosticOperations.record('account/cleanup', 'failed'),
    modelCatalog,
    closeConnections: () => connection.dispose(),
  })

  const handler = diagnosticOperations.wrap(subscriptionHandler)

  ctx.inject(['connection'], connectionContext => {
    try {
      connectionContext.effect(
        () => registerSubscriptionTransport(connectionContext.connection, handler),
        'codex-subscription: DSH-trusted account RPC',
      )
    } catch (error) {
      // Without these routes the settings page cannot reach this plugin at all,
      // so record the reason instead of failing silently in the host loader.
      diagnosticLog.error('rpc', 'route registration failed')
      throw error
    }
  })
  diagnosticLog.info('plugin', 'apply completed')
  } catch (error) {
    const detail = error instanceof Error ? error.message : ''
    // Log only a recognized condition, never arbitrary host error details.
    diagnosticLog.error('plugin', 'apply failed', /adapter for provider ["']openai-codex["'] is already registered/iu.test(detail)
      ? 'openai-codex is already registered; check for a duplicate provider entry in the profile'
      : undefined)
    throw error
  }
}

export { createCodexAuthService, DshOAuthCredentialStore } from './credential-store.js'
export { createSubscriptionDiagnostics } from './diagnostics.js'
export { normalizeContextMode, normalizeCustomContextWindow } from './settings-contract.js'
export { createDefaultModelController, DEFAULT_MODEL_PROVIDER } from './default-model.js'
export { assertCodexAuthUrl, commandForCodexAuthUrl, openCodexAuthUrl } from './external-url.js'
export { CodexLoginCoordinator, createCodexRpcHandler } from './login-coordinator.js'
export { CODEX_USAGE_URL, createCodexUsageReader, parseCodexUsage } from './usage.js'
export {
  CODEX_RESET_CONSUME_URL,
  CODEX_RESET_CREDITS_URL,
  createCodexResetCreditService,
} from './reset-credits.js'
export {
  CODEX_IMAGE_GENERATION_URL,
  CODEX_IMAGE_TOOL_NAME,
  createCodexImageTool,
  decodeCodexPng,
} from './codex-images.js'
