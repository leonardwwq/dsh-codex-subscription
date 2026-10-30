window.__ModuleLoader__.load({
	id: "dsh-codex-subscription",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region /0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		_deepseek_ai_dsh_client_ui_primitives = __toESM(_deepseek_ai_dsh_client_ui_primitives, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client-locales.js
		const zh = {
			voiceNativeCaptureConfirm: "允许本次通话使用此电脑的麦克风和扬声器？挂断或离开会话后会停止收音。",
			voiceMediaHint: "窗口不支持 WebRTC 时，可在浏览器中继续同一会话。音色试听不受影响，仍使用当前订阅，无需 API Key。",
			voiceBrowserContinue: "在浏览器继续此会话",
			voiceBrowserCall: "在浏览器继续语音通话",
			voiceBrowserCopy: "复制会话链接",
			voiceBrowserCopied: "已复制",
			voiceBrowserCopyFailed: "复制失败，请手动复制链接",
			voicePreviewSignIn: "试听需要重新登录 ChatGPT，请登录后再试。",
			voiceCatalogFailed: "语音目录加载失败，请检查网络后重试；这不表示该音色没有样本。",
			voiceDownloadFailed: "试听音频下载失败，请重试。",
			voicePlaybackFailed: "音频已取得，但播放失败。请检查浏览器的声音权限后重试。",
			voicePreviewFailed: "试听加载失败，请检查连接后重试。",
			voiceWebRTCUnavailable: "此窗口不支持语音通话所需的 WebRTC。请在支持 WebRTC 的浏览器中打开同一 DSH 会话；音色试听仍可使用。",
			voiceInsecure: "语音需要安全连接。请通过 HTTPS 或本机 localhost 打开 DSH。",
			voiceMicUnavailable: "此窗口无法使用麦克风。请在支持麦克风的浏览器中打开 DSH。",
			voiceMicMissing: "未找到可用麦克风，请检查设备连接。",
			"diagnosticsSnapshotTime": "报告快照时间：",
			"diagnosticsUnresolved": "仍有其他未恢复的失败记录，见上方摘要。",
			"diagnosticSeverity_warning": "需关注",
			"diagnosticSeverity_info": "信息",
			"diagnosticNext_restart": "重启后重新生成报告；若版本仍不一致，检查插件更新是否生效。",
			"diagnosticNext_regenerate": "复现问题后立即重新生成报告；若仍不完整，连同操作步骤反馈。",
			"diagnosticNext_supported-options": "继续使用当前可选档位即可；新增能力需要适配验证，不建议手动填入未知参数。",
			"diagnosticNext_reproduce": "核对下列操作与时间是否对应你的问题；若持续失败，反馈操作步骤和本报告。",
			"diagnosticFinding_evidence-truncated": "部分旧记录或宿主作用域未包含在快照中，报告不能覆盖全部历史。",
			"diagnosticsNoRecordedFailure": "当前记录未发现失败；未执行的功能仍未验证。",
			"diagnosticFinding_version-mismatch": "前后端版本不一致，请重启 DSH 后重新生成报告。",
			"diagnosticFinding_collection-incomplete": "部分检查未能完成，请查看详情中的失败或超时项。",
			"diagnosticFinding_catalog-gap": "在线模型目录包含当前适配层尚未支持的档位或能力；不代表模型不可用。",
			"diagnosticFinding_recent-failure": "最近 15 分钟有操作或请求失败，且同一操作尚无后续成功记录。请结合发生时间查看详情。",
			"diagnosticReason_no-readiness-check": "无独立前置检查",
			"diagnosticReason_inspection-failed": "检查未完成",
			"diagnosticReason_inspection-timeout": "检查超时",
			"diagnosticSource_network": "网络请求（非完整回复）",
			"diagnosticReason_catalog-online": "在线目录已载入",
			"diagnosticReason_catalog-unavailable": "尚未读取账户目录",
			"diagnosticReason_storage-readable": "预测缓存可读",
			"diagnosticReason_tool-registered": "全局工具已注册",
			"diagnosticReason_tool-missing": "未找到全局工具",
			"diagnosticsCoverageHint": "分别展示前置条件与最近 15 分钟的进程级证据；不限定当前账号或会话。接口响应、网络请求和工具结果不能替代完整功能验收。",
			"diagnosticsVersionMismatch": "前后端插件版本不同，请重载后重试。",
			"diagnosticsPartial": "部分信息未能采集，其余检查结果已保留。请在详情中查看失败或超时项。",
			"diagnosticsCapability": "功能",
			"diagnosticsReadiness": "前置条件",
			"diagnosticsEvidence": "近期操作证据",
			"diagnosticsUnverified": "尚未验证",
			"diagnosticsHostCollected": "已采集宿主注册与选中结果。registrant 是宿主标签，可能被压缩，不能据此识别插件或判断干扰。",
			"diagnosticsHostUnknown": "宿主界面检查不可用或未挂载，不能据此判断插件干扰。",
			"diagnosticsDetails": "展开脱敏详情",
			"diagnosticsCopyFailed": "复制失败，可展开详情手动复制。",
			"diagnosticSource_rpc": "接口响应",
			"diagnosticSource_tool": "工具",
			"diagnosticOutcome_completed": "完成",
			"diagnosticOutcome_failed": "失败",
			"diagnosticOutcome_cancelled": "取消",
			"diagnosticCapability_account": "登录",
			"diagnosticCapability_accounts": "多账号",
			"diagnosticCapability_settings": "设置",
			"diagnosticCapability_models": "模型",
			"diagnosticCapability_quota": "额度",
			"diagnosticCapability_search": "搜索",
			"diagnosticCapability_images": "生图与编辑",
			"diagnosticCapability_sketch": "草图",
			"diagnosticCapability_subagents": "子任务",
			"diagnosticCapability_compaction": "压缩",
			"diagnosticCapability_transport": "连接",
			"diagnosticCapability_storage": "存储",
			"diagnosticCapability_host-ui": "宿主界面",
			"diagnosticReason_not-instrumented": "证据不足",
			"diagnosticReason_disabled-or-host-owned": "未启用或由宿主管理",
			"diagnosticReason_sign-in-required": "依赖登录",
			"diagnosticReason_local-sign-in-present": "本地登录存在",
			"diagnosticReason_sign-in-unverified": "登录未确认",
			"diagnosticReason_settings-writable": "可写",
			"diagnosticReason_settings-readonly": "不可写",
			"diagnosticReason_restart-required": "需要重启",
			"diagnosticReason_runtime-present": "组件已安装",
			"diagnosticReason_runtime-missing": "组件未安装",
			storageLoading: "正在读取缓存占用…",
			storageTitle: "存储与缓存",
			storageForecast: "额度预测缓存",
			storageClear: "清除预测历史",
			storageHint: "仅清除本地预测历史，不影响订阅额度。",
			storageConfirm: "清除所有已登录账号的本地预测历史？预测需重新积累采样；订阅额度、图片、草稿和登录信息不受影响。",
			storageFailed: "未能读取或清除预测缓存，请重试。",
			runtimeIncompatible: "检测到不兼容的 Codex 子任务组件，请卸载后重启，再安装受支持版本。",
			runtimeManagedElsewhere: "此组件由宿主或其他依赖管理，请在 DSH 插件管理中查看；这里不能直接卸载。",
			runtimeLoading: "正在检查组件…",
			runtimeRestart: "组件已更新，请重启 DSH 后使用。",
			runtime_installing: "正在通过 DSH 安装组件…",
			runtime_removing: "正在通过 DSH 卸载组件…",
			runtime_applying: "正在应用安装结果…",
			runtimeInstall: "安装组件",
			runtimeRemove: "卸载组件",
			runtimeCancel: "取消安装",
			runtimeKeep: "保留",
			runtimeConfirmRemove: "确认卸载",
			runtimeRefresh: "刷新状态",
			runtimeActive: "有 Codex 子任务正在运行，结束后才能安装或卸载。",
			runtimeConfirm: "卸载后将切回 DSH 子任务。普通订阅聊天、生图、登录和草稿保留。确定卸载可选组件？",
			runtimeFailed: "操作未完成。请刷新状态后重试；详细原因可在 DSH 插件管理中查看。",
			runtimeBuildBlocked: "DSH 拦截了依赖安装脚本。请在官方插件管理中审核后再安装。",
			runtimeCancelled: "安装已取消，可重新安装。",
			runtimeUnavailable: "当前宿主未提供组件管理接口，请更新 DSH 或按说明手动管理。",
			runtimeHostUnsupported: "当前 DSH 版本暂无已验证的 Codex 子任务组件。",
			runtimeInstallHint: "此处只管理官方 Codex 子任务组件，由 DSH 负责安装与卸载。安装后不会自动开启子任务；仅切回 DSH 不会卸载组件。",
			compactionTitle: "云端压缩",
			compaction_dsh: "关闭",
			compaction_cloud: "开启",
			compactionHint: "长上下文由 Codex 压缩后继续请求，保留 DSH 历史与原生压缩。开启时该请求使用 SSE；历史改变后重新建立压缩状态。",
			otherModelsTitle: "在 DeepSeek 等其他模型的对话里使用订阅功能",
			otherModels_on: "开",
			otherModels_off: "关",
			otherModelsHint: "关闭后，用 DeepSeek 等非 Codex 模型对话时不再使用订阅的联网搜索（改用 DSH 搜索）、图片生成和 ChatGPT 连接器；Codex 订阅模型不受影响。手机远程控制和语音对话由你主动开启或发起，不受这个开关影响，可在“手机与更多”页单独设置。",
			advancedModelSearch: "模型与搜索",
			modelsSectionTitle: "模型",
			searchSectionTitle: "搜索",
			defaultModelTitle: "默认模型",
			defaultModelHint: "新建会话时默认使用的模型，与在对话里切换模型写的是同一处 DSH 默认模型设置。",
			defaultModelReset: "恢复 DSH 默认",
			defaultModelResetHint: "选择“恢复 DSH 默认”可清除保存的模型选择，恢复上层配置中的默认值，不影响已有会话。",
			defaultModelFollow: "跟随 DSH 默认",
			defaultModelFollowHint: "当前跟随 DSH 默认模型：{value}。选择一个 Codex 模型，之后每次新建会话都用它。",
			defaultModelUnknown: "未知",
			defaultModelUnavailable: "当前 DSH 版本没有提供默认模型服务，无法在这里设置。",
			defaultModelNoCatalog: "登录并加载模型后即可选择默认模型。",
			defaultModelFailed: "默认模型读取或保存失败，请重试，或改在对话中切换模型。",
			inputImageDetail: "输入图片精度",
			inputImageDetailHint: "控制发送给模型的图片精度，精度越高输入 token 用量越大。",
			inputImageDetail_auto: "自动",
			inputImageDetail_low: "低",
			inputImageDetail_high: "高",
			inputImageDetail_original: "原图",
			connectors: "ChatGPT 连接器",
			connectorsHint: "让 DSH 里的任何模型使用你在 ChatGPT 里已连接的应用（GitHub、Gmail、云端硬盘、日历等）。需先在 ChatGPT 里连接应用；应用返回的内容来自第三方，模型不会照其中的指令行事。",
			connectorsMode_off: "连接器关闭，模型看不到这些应用。",
			connectorsMode_read: "模型只能读取（搜邮件、读文件、查 PR），不会修改任何数据。",
			connectorsMode_ask: "发邮件、改文件等写操作每次都会弹出确认，你批准后才执行。",
			connectorsMode_write: "写操作直接执行，不再弹出确认，误操作无法撤回，请谨慎使用。",
			connectors_off: "关闭",
			connectors_read: "只读",
			connectors_ask: "询问后写入",
			connectors_write: "直接写入",
			defaultReasoningEffort: "默认推理等级",
			defaultReasoningEffortHint: "未手动选档时使用；模型不支持时跟随该模型默认值。",
			composerPredictions: "输入预测",
			composerPredictionAccept: "接受建议",
			composerPredictionsShortHint: "Tab 填入草稿",
			composerPredictionsHint: "支持的 Codex 模型在一轮对话完成、草稿为空时，基于当前会话建议下一条消息。Tab 填入草稿，不会自动发送。会产生额外预测请求。官方 Codex 生成预测不计额度或 Credits；DSH 第三方接入是否享有相同豁免尚未确认。接受后发送消息仍正常计量。",
			featureLoading: "正在加载…",
			featureLoadFailed: "加载失败，点击重试",
			featureRetry: "重试",
			defaultUltraHint: "Ultra 是 DSH 主动分工预设，使用模型目录指定的实际推理档，不扩大权限；仅支持的模型显示。",
			defaultReasoningEffort_ultra: "Ultra（主动分工）",
			defaultReasoningEffort_auto: "模型默认",
			defaultReasoningEffort_off: "关闭推理",
			defaultReasoningEffort_minimal: "极低",
			defaultReasoningEffort_low: "低",
			defaultReasoningEffort_medium: "中",
			defaultReasoningEffort_high: "高",
			defaultReasoningEffort_xhigh: "超高",
			defaultReasoningEffort_max: "最高",
			reasoningSummary: "推理摘要",
			reasoningSummaryHint: "让模型在会话的“思考”部分给出推理摘要。自动由模型决定；简洁更短；详细更完整；关闭则不要摘要。",
			reasoningCache: "切换推理强度时复用缓存",
			reasoningCache_off: "关闭",
			reasoningCache_on: "开启",
			reasoningCacheHint: "默认开启，仅对支持的模型生效，切换推理强度时尽量复用此前缓存。关闭后仍有普通缓存；不保证每次命中或提速。",
			reasoningCacheCloud: "当前使用云端自动压缩，此优化暂不生效。切回 DSH 压缩后按此开关的选择生效；不会自动更改压缩设置。",
			reasoningCacheRetry: "当前使用无限重试，此优化暂不生效。切回普通重试策略后按此开关的选择生效；不会自动更改重试设置。",
			retryPolicy: "请求重试",
			retryPolicyHint: "请求因网络或服务端错误失败时的自动重试次数。默认沿用 DSH 的标准重试；无限会一直重试直到成功或手动停止。",
			retryPolicy_default: "默认",
			retryPolicy_off: "不重试",
			retryPolicy_10: "10 次",
			retryPolicy_20: "20 次",
			retryPolicy_unlimited: "无限",
			reasoningSummary_auto: "自动",
			reasoningSummary_concise: "简洁",
			reasoningSummary_detailed: "详细",
			reasoningSummary_none: "关闭",
			subagentBackendTitle: "独立子任务",
			subagentBackend_dsh: "DSH",
			subagentBackend_codex: "Codex",
			connectionTitle: "连接方式",
			state_connection_cloud: "已开启云端压缩，本次请求实际使用 SSE。",
			diagnosticsLog: "运行日志",
			diagnosticsLogHint: "按时间记录运行中发生的事，错误和警告在最上面的筛选里。内容已去掉令牌、邮箱和路径。",
			logLevel_all: "全部",
			logLevel_warn: "警告和错误",
			logLevel_error: "仅错误",
			logEmpty: "这个级别暂时没有记录。",
			logCopy: "复制日志",
			logCopied: "已复制日志",
			logEarlier: "上次运行",
			remoteTitle: "手机远程控制",
			remote_off: "关闭",
			remote_on: "开启",
			voiceStart: "语音对话",
			voiceEnd: "结束语音",
			voiceConnecting: "正在连接语音…",
			voiceListening: "在听",
			voiceSpeaking: "在说",
			voiceWorking: "DSH 正在处理…",
			voiceMute: "关闭麦克风",
			voiceUnmute: "打开麦克风",
			voiceMuteSpeaker: "关闭声音",
			voiceUnmuteSpeaker: "打开声音",
			voiceMicBlocked: "没有麦克风权限，请在浏览器或系统里允许后再试。",
			voiceFailed: "语音没有接通，请稍后再试。",
			voiceTitle: "语音对话",
			voiceHint: "输入框里没有内容时，发送键变成语音键：点一下就能和 DSH 说话，让它做事，它的回答会念出来。语音通话由 ChatGPT 订阅提供，通话内容会经过 OpenAI。",
			voiceVoice: "音色",
			voiceLanguage: "回答语言",
			voiceAuto: "跟你说的语言一致",
			voicePlay: "试听",
			voiceLoading: "加载中…",
			voiceNoSample: "这个音色暂时没有试听样本。",
			voiceUnavailable: "暂无试听",
			voiceMore: "更多音色（暂无试听）",
			voiceLang_zh: "中文",
			voiceLang_en: "English",
			voiceLang_ja: "日本語",
			voiceLang_ko: "한국어",
			voiceLang_es: "Español",
			voiceLang_fr: "Français",
			voiceLang_de: "Deutsch",
			voiceLang_pt: "Português",
			voiceLang_ru: "Русский",
			voicePreviewHint: "切换回答语言会播放该语言的试听；选择自动跟随时，试听使用英语。",
			remoteHint: "开启后，这台电脑上的 DSH 会出现在 ChatGPT 手机 App 的 Codex 主机列表里，可用手机查看对话、发消息、切换模型和审批。需要订阅账号登录；电脑要保持开机和联网。",
			remoteConnected: "电脑已连上 ChatGPT，还没有手机连接",
			remoteConnecting: "正在连接",
			remoteWaiting: "正在等待上一次连接释放，通常几分钟内自动连上",
			remoteUnauthorizedHelp: "服务器拒绝了手机远程（401/403）。请先确认 ChatGPT 登录没有过期；如果登录正常，可能是账号还没开启两步验证（这只是推测），请到 ChatGPT 安全设置里开启后再试。",
			remoteConflictLong: "长时间连不上，通常是另一台电脑、另一份 DSH（或另一个窗口）也在用同一个 ChatGPT 账号开着手机远程，彼此在抢连接。请关闭其他地方的手机远程，再回到这里点“关闭”后重新“开启”。",
			remoteError: "连接失败，会自动重试",
			remoteStopped: "已停止",
			remotePaired: "已配对的手机",
			remoteNoPhones: "还没有手机配对。",
			remoteRevoke: "移除",
			remoteLastSeen: "最近 {date}",
			remotePhoneUnknown: "未命名手机",
			remotePhones: "手机已连接 {count} 部",
			remotePair: "显示配对码",
			remotePairAgain: "重新生成配对码",
			remotePairFailed: "无法生成配对码，请确认已登录订阅账号。",
			remotePairSteps: "在手机 ChatGPT App 的 Codex 里扫码，或输入下面的手动码。",
			remoteManualCode: "手动配对码",
			remoteQrLabel: "配对二维码",
			remoteExpires: "约 {minutes} 分钟内有效",
			remoteExpired: "配对码已过期，请重新生成。",
			remoteLimits: "手机上可以查看和继续 DSH 里的对话、新建对话、发图片、切换模型、选择权限并审批，也能查看改动。手机不能在电脑上执行其他命令。",
			reviewModelTitle: "Auto review 审查模型",
			reviewModel_session: "当前模型",
			reviewModel_official: "Codex 官方审查模型",
			reviewModelHint: "默认使用当前模型。选择官方后，DSH Auto review 用 Codex 自带的审查模型判断工具调用（账号目录提供时），审查规则与放行、拒绝流程仍由 DSH 负责；不可用时沿用当前模型。",
			connectionHint: "默认 SSE。WebSocket 实验性复用连接与上下文传输；开始输出前连接失败可回退 SSE。开启云端压缩时实际使用 SSE。下次请求生效，不扩大上下文容量。",
			streamIdleTimeoutTitle: "流无响应超时",
			streamIdleTimeoutHint: "连续多久没有收到任何流式数据时中断本次请求，不是整体回答时限。调低可能中断较慢但仍在推理的回答，并交由 DSH 重试处理。默认 10 分钟。",
			streamIdleTimeout_2: "2 分钟",
			streamIdleTimeout_5: "5 分钟",
			streamIdleTimeout_10: "10 分钟",
			streamIdleTimeout_20: "20 分钟",
			streamIdleTimeout_30: "30 分钟",
			subagentBackendHint: "Codex 复用订阅登录和工作区权限；默认继承当前订阅模型。在“插件 → 子智能体”开启模型选择并勾选允许的模型后新建会话，可在聊天中指定允许的订阅模型与推理档位；非订阅会话需指定。共享上下文子任务仍用 DSH。",
			subagentBackendUnavailable: "当前宿主缺少子代理服务，请更新 DSH。",
			subagentRuntimeMissing: "尚未准备 Codex 子任务运行时，仅影响此选项。普通订阅对话无需安装。",
			subagentRuntimePrepare: "准备方法（含离线说明）",
			subagentRuntimeInstalled: "已检测到 Codex 子任务组件；启动时会检查可执行文件。",
			subagentRuntimeManage: "安装、卸载与存储",
			subagentRuntimeCacheHint: "卸载后安装缓存可能仍保留，由 DSH 或 Portable 统一管理。此处不会删除登录、草稿或生成图片。",
			sketchRecovered: "已恢复未保存草稿",
			sketchRecoveryFailed: "恢复检查点保存失败，请手动保存或导出草稿。",
			sketchStorageBlocked: "草稿正被其他窗口占用，请关闭其他草图窗口后重试。",
			sketchDraftLimit: "已达 20 份草稿上限。请先导出，或删除不需要的草稿后保存。",
			sketchStorageLimit: "草稿存储空间已满。请先导出，或删除不需要的草稿后保存。",
			sketchSizeShort: "粗细",
			sketchObjectDuplicate: "复制对象",
			sketchObjectDelete: "删除对象",
			sketchBrushHint_pen: "实色圆头墨线",
			sketchBrushHint_pencil: "细腻颗粒，叠画加深",
			sketchBrushHint_marker: "半透明平头，适合高亮",
			sketchDismissStatus: "收起提示",
			sketchRunResumeHint: "允许 Agent 接收后续绘图请求，不会自动重发消息",
			sketchTool_select: "选择",
			sketchTool_text: "文字",
			sketchTool_arrow: "箭头",
			sketchShapes: "图形",
			sketchText: "编辑文字",
			sketchTextDone: "完成",
			sketchTextSize: "字号",
			sketchBrush: "笔型",
			sketchFill: "填色",
			sketchDownload: "下载",
			sketchExportFormat: "导出格式",
			sketchEditableFile: "可编辑草稿",
			sketchFormatHint: "PNG 为合并图片；可编辑草稿保留原生笔画，可重新导入（32 MB 内）。",
			imageToSketch: "进入草图",
			imageRemoveBackground: "移除背景",
			imageRemoveBackgroundPrompt: "移除此图像的背景。保持所有前景主体不变且完整，边缘干净平滑。将背景设为透明。",
			imageErase: "擦除",
			imageEraseHint: "在要移除的内容上涂抹",
			imageErasePrompt: "从第一张图像中移除第二张图像中标记的区域",
			imageBrushSize: "画笔大小",
			imageUndo: "撤销",
			imageSend: "发送",
			imageResize: "调整大小",
			imageResizePrompt: "将宽高比设为 {aspectRatio}",
			imageRatio_square: "正方形",
			imageRatio_portrait: "竖向",
			imageRatio_story: "故事版式",
			imageRatio_landscape: "横向",
			imageRatio_widescreen: "宽屏",
			sketchPictures: "图片",
			sketchPictureAdd: "添加",
			sketchPictureSelect: "选择图片",
			sketchPicturesEmpty: "导入或粘贴图片，作为当前草图的图层。",
			sketchFlow: "浓度",
			sketchZoomOut: "缩小画布",
			sketchZoomIn: "放大画布",
			sketchFit: "重置视图",
			sketchKeys: "快捷键",
			sketchKeysEnabled: "启用快捷键",
			sketchNavigationHint: "空格拖动画布 · Alt 滚轮缩放 · 中键拖动",
			sketchKeyHint: "点击右侧输入框后按键修改，重复按键不接受。Ctrl Z / Shift Z 撤销重做，Ctrl S 保存；[ ] 调笔宽。",
			sketchKey_pen: "画笔",
			sketchKey_eraser: "橡皮",
			sketchKey_line: "直线",
			sketchKey_rectangle: "矩形",
			sketchKey_circle: "椭圆",
			sketchKey_pan: "拖动画布",
			sketchKey_zoomIn: "放大",
			sketchKey_zoomOut: "缩小",
			sketchKey_fit: "重置视图",
			sketchReplay: "回放",
			sketchReplayTitle: "绘制过程",
			sketchReplayClose: "返回",
			sketchReplayPlay: "播放",
			sketchReplayPause: "暂停",
			sketchReplaySpeed: "回放时长",
			sketchReplayFast: "12 秒",
			sketchReplayNormal: "30 秒",
			sketchReplaySlow: "60 秒",
			sketchReplayRecord: "录制过程视频",
			sketchReplaySave: "保存视频",
			sketchReplayAgain: "回到回放",
			sketchReplaySaveHint: "点「保存视频」时，系统会让你选择保存位置。",
			sketchReplayStopRecording: "停止录制",
			sketchReplayEmpty: "还没有可回放的绘制。",
			sketchReplayUnsupported: "当前环境不支持录制视频。",
			sketchReplayFileSuffix: "过程",
			sketchReplayHint: "按落笔顺序重放整幅画；录制会把回放生成 WebM 视频（按所选时长实时录制），录完先在这里预览，再决定是否保存。",
			sketchFiles: "草稿",
			sketchNew: "新建草图",
			sketchImport: "导入文件",
			sketchDraftName: "草稿名称",
			sketchSave: "保存草稿",
			sketchDeleteDraft: "删除",
			sketchDeleteConfirm: "确认删除",
			sketchFileClose: "收起",
			sketchLocalDrafts: "本浏览器保存，最多 20 份。关闭时自动保存；图片可粘贴或拖入（PNG / JPEG / WebP，20 MB 内）。",
			sketchStorageFailed: "未能完成操作。请检查本地存储空间、草稿和图层数量，或图片格式与大小；当前画布仍保留。",
			sketchAttachShort: "附加",
			sketchTool_line: "直线",
			sketchStability: "抬笔平滑",
			sketchStability0: "关闭",
			sketchStability25: "弱",
			sketchStability50: "中",
			sketchStability75: "强",
			sketchShortcuts: "B 画笔 · E 橡皮 · L 直线 · R 矩形 · O 椭圆 · [ ] 粗细 · Ctrl Z 撤销 · Ctrl Shift Z 重做 · Ctrl S 保存 · Shift 直线吸附",
			sketchRatio: "画布比例",
			sketchRatioHint: "画布比例；切换时等比保留笔画，可撤销",
			forecastCompactPending: "待估",
			forecastCompactChanging: "重估",
			forecastCompactStale: "待更新",
			imageEditShort: "继续编辑",
			forecastResolution: "暂时估不准：读数变化不足以确定速度",
			forecastChanging: "使用强度变化，正在重新估计",
			forecastStale: "额度数据已过期，等待更新",
			imageDropHere: "松开以添加参考图片",
			imageDropUnavailable: "当前无法添加图片",
			imageRemoveDraft: "移除图片",
			recoveryClear: "清除登录信息",
			recoveryClearConfirm: "确认清除并重新登录",
			recoveryClearHint: "将移除本插件保存的所有订阅账号登录信息，保留会话和设置。完成后可重新登录。",
			recoveryHint: "请先检查 DSH 连接和插件是否正常启动；模型提供方重复配置也可能导致此错误。清除登录信息会移除所有已保存账号，请仅在确认需要时操作。",
			recoveryFailed: "清除未确认成功，请先恢复 DSH 服务，再重试。",
			quotaThresholdReached: "已达到额度提醒阈值",
			imageCapability: "图片生成与编辑",
			imageCapabilityHint: "允许模型按你的要求制作或修改图片。",
			imageCapability_on: "启用",
			imageCapability_off: "关闭",
			imageEntryPoints: "创作入口",
			imageEntryPointsHint: "@生图入口；隐藏后仍可用自然语言生图。",
			imageEntryPoints_on: "显示",
			imageEntryPoints_off: "隐藏",
			imageBrowsing: "图片浏览",
			imageBrowsingHint: "预览粘贴图片与会话图片，可标注、移除背景、擦除、调整大小。",
			imageBrowsing_on: "增强",
			imageBrowsing_off: "DSH 默认",
			imageGroupMixed: "保留原设置",
			imageQuality_auto: "自动",
			imageQuality_low: "低",
			imageQuality_medium: "中",
			imageQuality_high: "高",
			imageQuality_xhigh: "超高",
			imageQuality_max: "最高",
			imageWorkspaceMenu: "图片工具",
			imageCreateAction: "生成或编辑图片",
			imageCreateGroup: "创作",
			imageShortcut: "@生图快捷入口",
			imageCreateTitle: "描述你想要的图片",
			imageDraftHint: "填入草稿后由你发送。参考图可先附在输入框，不会自动生成或改写已有说明。",
			imageDraftFailed: "无法填入草稿。请保留说明，检查输入框是否正在发送或含有引用。",
			imageCreatePrompt: "请使用订阅图片工具按以下要求制作图片；如附有参考图，请基于所附图片编辑：",
			imageDetails: "图片信息",
			imageRequestedModel: "请求模型",
			imageReportedModel: "服务端报告模型",
			imageModelUnreported: "未报告",
			imageRequestedSize: "请求尺寸",
			imageActualSize: "实际尺寸",
			imageModel: "请求型号",
			imageQuality: "请求质量",
			imageExperimental: "实验",
			imageModelHint: "2.5 为实验选项：请求已成功出图，但尚无法确认指定型号或质量是否生效。",
			sketchTool_pen: "画笔",
			sketchTool_rectangle: "矩形",
			sketchTool_circle: "椭圆",
			sketchTool_eraser: "橡皮",
			sketchCanvas: "草图画板 · Beta",
			sketchCanvasHint: "默认关闭；开启后显示手动画板入口。",
			sketchCanvas_on: "开启",
			sketchCanvas_off: "关闭",
			sketchAgent: "Agent 绘图 · Beta",
			sketchAgentHint: "默认关闭；开启后可用 @sketch 请求 Agent 绘图，需要同时开启草图画板。",
			sketchRun_drawing: "Agent 正在绘制…",
			sketchRun_finished: "绘制完成",
			sketchRun_stopped: "绘制已停止",
			sketchRun_failed: "绘制失败",
			sketchRunStop: "停止绘制",
			sketchRunResume: "允许继续绘制",
			sketchAgent_on: "开启",
			sketchAgent_off: "关闭",
			imageSettings: "图片",
			imageGeneration: "生成新图片",
			imageEditing: "参考图编辑",
			imageViewer: "增强图片查看器",
			imageAnnotations: "图片标注",
			imageSketch: "草图画板 · Beta",
			imageSettingsHint: "关闭功能保留历史图片。草图作为参考图发送，需要开启参考图编辑；标注需要增强查看器。",
			sketch: "草图 · Beta",
			sketchTitle: "画出你的想法",
			sketchAttach: "附加草图",
			sketchCancel: "取消",
			sketchUndo: "撤销",
			sketchRedo: "重做",
			sketchClear: "清空",
			sketchEraser: "橡皮",
			sketchPen: "画笔",
			sketchColor: "颜色",
			sketchWidth: "笔刷粗细",
			sketchFailed: "无法附加草图，请保留画板后重试。",
			sketchHint: "确认只会附加图片，不会自动生成。发送时说明你想要的风格与细节。",
			searchOptions: "搜索选项",
			searchDomainCount: "个域名",
			catalogRefresh: "刷新模型",
			catalogOnline: "已加载账户在线模型目录",
			catalogCached: "正在使用本地保存的账户模型目录",
			catalogCachedFailed: "正在使用本地模型目录，在线更新失败。",
			catalogSignedOut: "登录后显示账户可用的模型。",
			catalogLoading: "正在读取账户模型目录…",
			catalogFailed: "无法读取账户模型目录，请检查网络后重试。",
			pickerModelsTitle: "输入框模型列表",
			pickerModelsHint: "只控制输入框中的模型列表；不会影响已选模型或模型请求。新模型默认显示。",
			searchMode: "订阅搜索模式",
			searchMode_live: "实时",
			searchMode_cached: "缓存（实验）",
			searchMode_disabled: "停用",
			searchModeHint: "仅影响 Codex 订阅搜索。缓存模式请求已有索引，需实机确认账户支持；失败时不会自动切换来源。",
			searchDomains: "结果域名筛选",
			searchDomainsHint: "留空显示全部结果；最多 20 个域名，逗号分隔，包含其子域名。只筛选返回结果，不限制搜索服务访问范围。",
			searchDomainsInvalid: "请输入域名，不含网址协议、路径或通配符。最多 20 个。",
			sketchBrushType: "笔刷",
			sketchBrush_pen: "钢笔",
			sketchBrush_pencil: "铅笔",
			sketchBrush_marker: "荧光笔",
			sketchEraserMode: "橡皮模式",
			sketchErase_pixel: "局部擦除",
			sketchErase_stroke: "整笔擦除",
			sketchLayers: "图层",
			sketchLayer: "图层",
			sketchLayerAdd: "新建图层",
			sketchLayerVisible: "显示图层",
			sketchLayerName: "图层名称",
			sketchLayer_duplicate: "复制图层",
			sketchLayer_up: "上移图层",
			sketchLayer_down: "下移图层",
			sketchLayer_delete: "删除图层",
			sketchClearLayer: "清空当前图层",
			sketchHiddenLayer: "当前图层已隐藏，请先显示或选择其他图层。",
			sketchLimit: "已达到笔画上限，请清理不需要的笔画后继续。",
			sketchLayerHint: "只编辑当前图层；导出可见图层。撤销支持笔画与图层操作。",
			imageInlinePrompt: "请生成或编辑图片：",
			quotaAlerts_custom: "自定义",
			quotaShortThreshold: "5h 剩余",
			quotaLongThreshold: "周／长周期剩余",
			quotaThresholdInvalid: "请输入 1–100 的整数",
			quotaAlerts: "额度提醒",
			quotaAlerts_off: "关闭",
			quotaAlerts_important: "剩余 20%",
			quotaAlerts_early: "提前提醒",
			quotaAlertsHint: "低于所选剩余阈值时提醒；自定义可分别设置短周期与长周期。仅使用新鲜数据，不弹窗打断。",
			quotaWarning: "{window}额度剩余 {value}%，请留意用量与重置时间。",
			speedFastAstraHint: "Astra 约 2 倍速度，消耗更多 Credits",
			speedUltrafast: "极速 Beta",
			speedUltrafastHint: "Ultrafast 档，仅账号目录提供时显示（目前为 Pro 500）；速度最快，额度和 Credits 消耗更快",
			imageEditLocation: "位置",
			imageEditReferenceGuide: "本次编辑的干净源图为「{sourceName}」，编号定位参考图为「{referenceName}」。坐标以图片左上角为原点，x 向右、y 向下，百分比相对于整张图片。请查看这两张图片，将它们同时作为编辑工具的参考图，并在工具提示词中完整保留下方编号、位置和修改要求。只修改源图中对应位置的内容；定位参考图上的编号、圆点和引线仅用于定位，不得绘入最终结果。若无法读取两张图片或确定位置，请说明问题，不要猜测或忽略标注。",
			nav: "Codex 订阅",
			title: "Codex 订阅",
			connected: "已登录",
			disconnected: "未登录",
			accountLoading: "正在读取账户状态…",
			browserLogin: "浏览器登录",
			deviceLogin: "设备代码登录",
			logout: "退出登录",
			addAccount: "添加账号",
			switchAccount: "切换",
			removeAccount: "移除",
			removeConfirm: "确认移除",
			removeCancel: "取消",
			signOutAll: "退出全部账号",
			signOutConfirm: "确认退出（需重新登录）",
			cancel: "取消",
			submit: "提交授权码",
			openLogin: "打开登录页",
			manualCode: "若浏览器回调没有自动完成，请粘贴授权码或完整重定向地址。",
			deviceHint: "在登录页输入此设备代码：",
			waiting: "正在等待登录完成…",
			failed: "登录失败，请重试。",
			failed_account_claim: "登录已授权，但这个账号的令牌里没有 ChatGPT 账号 ID（常见于只用手机号注册的账号）。请改用邮箱账号登录，或先在 ChatGPT 里为账号绑定邮箱后重试。",
			failed_network: "登录时网络连接失败。请检查网络或代理后重试。",
			failed_token_exchange: "授权已完成，但换取令牌失败。请重试；反复出现时请检查网络或代理。",
			failed_callback: "没有收到浏览器的授权回调。请重试，或改用设备码登录。",
			accountRetry: "重试",
			accountRetrying: "正在重试账户状态…",
			accountCredentialUnavailable: "登录凭据暂时不可用。请重试；不会删除已保存的登录信息。",
			accountCredentialMalformed: "登录凭据格式异常，无法读取账户状态。重试不会删除已保存的登录信息。",
			accountStatusTimeout: "读取账户状态超时，请重试。",
			accountStatusTransport: "无法连接账户服务，请检查连接后重试。",
			accountStatusUnknown: "无法读取账户状态，请重试。",
			diagnostics: "支持诊断",
			diagnosticsLoad: "生成诊断",
			diagnosticsLoading: "生成中…",
			diagnosticsCopy: "复制诊断（精简）",
			diagnosticsCopyFull: "复制完整诊断",
			diagnosticsCopied: "已复制",
			diagnosticsFailed: "服务端诊断不可用，已生成可复制的本地脱敏诊断。请检查 DSH 服务连接与插件版本。",
			feedbackOpen: "反馈问题",
			showEmail: "显示完整邮箱",
			hideEmail: "隐藏邮箱",
			emailUnavailable: "邮箱不可用",
			searchTitle: "搜索来源",
			searchScope: "自动按当前会话模型分流；手动选择固定来源。关闭“其他模型”后，非 Codex 会话只用 DSH 原生搜索。",
			searchAuto: "自动",
			searchAutoHint: "Codex 模型优先订阅搜索，其他模型优先 DSH；仅缺少登录、Key 或服务不可用时尝试另一方。关闭“其他模型”后，非 Codex 会话只用 DSH 原生搜索。",
			searchDsh: "DSH 默认",
			searchDshHint: "只使用 DSH 当前配置的搜索服务，失败直接报错；插件不再额外使用 DeepSeek 账号回退。费用由 DSH 所选服务决定。",
			searchCodex: "Codex 订阅",
			searchCodexHint: "固定使用 ChatGPT 订阅搜索，失败直接报错。关闭“其他模型”后，非 Codex 会话只用 DSH 原生搜索。",
			preferenceFailed: "设置未保存。",
			preferenceRetry: "重试",
			usage: "订阅额度",
			refresh: "刷新",
			refreshing: "刷新中…",
			noUsage: "登录后可读取 ChatGPT 返回的额度窗口。",
			overviewTitle: "使用概览",
			overviewLoading: "正在读取使用统计…",
			overviewUnavailable: "当前账户没有提供使用统计。",
			overviewHeatmap: "最近半年每天的 token 用量",
			overviewNoUse: "没有使用",
			overviewTokens: "{value} token",
			overviewDays: "{value} 天",
			overviewHours: "{value} 小时",
			overviewMinutes: "{value} 分钟",
			overviewLifetime: "累计 token",
			overviewPeak: "单日最高",
			overviewStreak: "连续使用",
			overviewLongestStreak: "最长连续",
			overviewThreads: "会话总数",
			overviewEffort: "最常用推理档",
			overviewFast: "快速模式占比",
			overviewLongestTurn: "最长单轮",
			settingsRestartRequired: "设置已保存，重启 DSH 后生效。",
			historyTitle: "额度去向",
			historyLoading: "正在读取用量历史…",
			historyPeriods: "额度周期",
			historyUsed: "这个周期已用 {value}% 的额度",
			historyPartial: "（统计尚未完成）",
			historyApproximate: "数据来自官方用量报告，可能不完整或延迟更新。",
			historyBy_model: "按模型",
			historyBy_surface: "按入口",
			historyBy_thread_source: "按来源",
			historyBy_turn_trigger: "按触发方式",
			historyDesktopApp: "桌面应用",
			historyCli: "命令行",
			historyIde: "IDE 扩展",
			historyWeb: "网页",
			historyMobile: "手机",
			historyUser: "你的对话",
			historySubagent: "子任务",
			historyMemory: "记忆整理",
			historyReview: "审查",
			historyComposer: "输入框发送",
			historyAutomation: "自动任务",
			usageLoading: "正在读取额度…",
			usageEmpty: "当前账户没有返回可显示的额度窗口。请稍后刷新；这不代表额度为零。",
			usageUpdated: "更新于 {value}",
			remaining: "剩余 {value}%",
			windowFiveHours: "5 小时额度",
			windowDaily: "每日额度",
			windowWeekly: "每周额度",
			windowMonthly: "每月额度",
			windowAnnual: "年度额度",
			windowHours: "{value} 小时额度",
			windowDays: "{value} 天额度",
			resets: "重置于 {value}",
			resetUnknown: "重置时间未提供",
			creditsBalance: "额外 Credits 余额",
			creditsUnit: "credits",
			unlimited: "不限额",
			monthlyCreditLimit: "Credits 月度消费上限",
			resetCredits: "额度重置",
			resetCreditsHint: "使用重置可恢复短周期额度、每周额度，或两者同时恢复。",
			resetAvailableTab: "可用",
			resetFull: "完全重置",
			resetCreditsAvailable: "额度重置（可用 {count} 次）",
			resetCreditDefaultName: "额度重置",
			resetUse: "使用重置",
			resetPreparing: "准备中…",
			resetConfirmTitle: "确认使用额度重置",
			resetWarning: "执行后会消耗 1 次，且无法撤销。",
			resetEarlyWarning: "当前额度未用尽，服务可能不执行重置。",
			resetAcknowledge: "我知道这次操作可能立即消耗 1 次重置",
			resetCreditExpires: "有效期至：{value}",
			resetCreditExpiryUnknown: "到期时间未提供",
			resetCreditExpiryLoading: "正在读取到期时间…",
			resetCreditExpiryFailed: "无法读取到期时间",
			resetWait: "请等待 {count} 秒",
			resetFinal: "确认使用",
			resetUsing: "使用中…",
			resetSuccess: "额度重置已完成。",
			resetNothing: "当前没有可重置的额度，未消耗新的重置次数。",
			resetNoCredit: "没有可用的额度重置。",
			resetAlready: "这次重置请求已处理。",
			resetFailed: "无法使用额度重置。",
			accountQuotaLeft: "{label}剩余 {value}%",
			accountQuotaResets: "{value} 重置",
			accountQuotaLoading: "正在读取额度…",
			accountQuotaError: "暂时读不到这个账号的额度",
			accountQuotaNone: "没有额度窗口信息",
			resetRenewLogin: "登录状态已失效，请重新登录。",
			resetBlocked: "ChatGPT 的网络防护拦截了这次请求（HTTP 403），登录状态没有问题。请稍后再试，或检查网络、代理或 VPN。",
			resetExpired: "本次确认已失效，请重新开始。",
			resetInProgress: "额度重置正在处理中。",
			resetTooEarly: "请等待冷静期结束后再确认。",
			resetAcknowledgeRequired: "请先确认已了解这次操作可能消耗重置次数。",
			resetAccountChanged: "登录账号已变更，请重新开始。",
			resetUncertain: "服务端返回结果不确定。请再次确认，插件会复用同一个请求，不会另外发起一次重置。",
			creditsNote: "下方的额外 Credits 和额度重置与套餐额度分开计算。",
			creditsExpires: "预计 {date} 到期，还剩 {days} 天",
			creditsExpiredToday: "今天 {date} 到期",
			creditsExpiryEstimate: "（估计：官方公布的 Pro 200 补偿 Credits 到期日，接口未返回，以 ChatGPT 使用情况页为准）",
			creditsAfterAllowance: "Credits 要等套餐额度用完后才会开始消耗，官方没有“先用 Credits”的开关。",
			creditsMessages: "约可发 {local} 条本地消息 / {cloud} 条云端消息",
			chatPass: "ChatPass 每周额度",
			creditsUsed: "已用 {used} / {limit} credits",
			spendReached: "Credits 月度消费上限已用尽。",
			unavailable: "暂无数据",
			quickQuotaSetting: "输入框额度",
			quickQuotaOff: "关闭",
			quickQuotaPercent: "百分比",
			quickQuotaBar: "进度条",
			quickQuotaForecast: "续航预测",
			quickQuotaBeta: "Beta",
			autoQuotaRetry: "额度重置后自动重试",
			autoQuotaRetryHint: "开启后，等待已确认的短时额度重置；对话会显示等待原因且可停止，等待期间切换账号会立即重试。",
			quickQuotaForecastHint: "输入框仅显示剩余额度，悬浮或点击查看预测。按最近两小时用量估算何时用完；未来用量变化会影响结果，仅供参考。历史保存在本机。",
			contextTitle: "上下文窗口",
			contextStandard: "标准",
			contextStandardHint: "使用当前账号模型目录的默认窗口。实际对话预算会按官方系数预留安全空间（未提供时为 5%），再由 DSH 管理输出预留和压缩。",
			contextExtended: "扩展",
			contextExtendedHint: "使用当前账号模型目录允许的最大窗口，实际可用性由服务端决定。设置值为原始容量；对话预算会预留与标准档相同的安全空间。",
			contextCustom: "自定义",
			contextCustomHint: "输入完整 Token 数值，不超过当前模型上限；安全空间会自动预留，无需手动扣除。较低数值会更早触发压缩。",
			contextTokens: "Token 上限",
			contextFixed: "固定 {value}",
			contextMaximum: "范围 {minimum}–{value}",
			settingsTab_start: "开始",
			settingsTab_models: "模型",
			settingsTab_tools: "联网与工具",
			settingsTab_create: "创作",
			settingsTab_more: "手机与更多",
			subtasksTitle: "子任务",
			subagentBackendNeedsRuntime: "先点下面的「安装组件」，才能让官方 Codex 执行子任务。",
			imageShortcutNeedsImages: "先开启图片生成或编辑。",
			sketchSectionTitle: "草图画板",
			settingsReadonly: "当前无法修改设置（DSH 没有开放写入）。",
			needSignIn: "还没有登录，大部分功能要先登录 ChatGPT。",
			needSignInGo: "去登录",
			creditsFoldTitle: "额外 Credits 与额度重置",
			paceWarning: "按现在的速度，{runOut}就会用完，早于{reset}。",
			paceWhen: "{day}{part}",
			paceResetOf: "{day}的重置",
			paceDay_today: "今天",
			paceDay_tomorrow: "明天",
			pacePart_morning: "早上",
			pacePart_afternoon: "下午",
			pacePart_evening: "晚上",
			pacePart_night: "夜里",
			state_predictions_on: "已开启，建议可用时按 Tab 填入草稿。",
			state_predictions_off: "已关闭，不会发起输入预测请求。",
			state_autoQuotaRetry_on: "额度耗尽后可自动等待短时额度恢复并重试。",
			state_autoQuotaRetry_off: "额度耗尽后不自动等待恢复并重试。",
			state_compaction_on: "已开启，长上下文由 Codex 自动压缩。",
			state_compaction_off: "已关闭云端压缩，继续使用 DSH 压缩。",
			state_reasoningCache_on: "已开启，支持的模型尽量复用推理缓存。",
			state_reasoningCache_off: "已关闭此优化，普通缓存仍可使用。",
			searchState_auto: "按当前模型自动选择搜索来源。",
			searchState_dsh: "当前选择 DSH；失败时不切换 Codex。",
			searchState_codex: "当前选择 Codex；失败时不切换 DSH。",
			fetchState_dsh: "使用 DSH 读取网页正文。",
			fetchState_codex: "使用 Codex 读取网页正文。",
			contextState_standard: "跟随各模型的默认上下文预算。",
			contextState_extended: "使用各模型支持的扩展上下文预算。",
			contextState_custom: "使用下方为各模型设置的自定义预算。",
			defaultModelCurrent: "当前默认模型：{value}",
			state_otherModels_on: "已允许 DeepSeek 等模型使用订阅工具。",
			state_otherModels_off: "订阅工具仅供 GPT / Codex 模型使用。",
			state_imageGeneration_on: "已开启，可在对话中生成新图片。",
			state_imageGeneration_off: "已关闭，不提供新图片生成。",
			state_imageEditing_on: "已开启，可按参考图或标注区域编辑图片。",
			state_imageEditing_off: "已关闭，不提供参考图编辑。",
			state_imageShortcut_on: "已开启，@ 菜单显示“生成图片”入口。",
			state_imageShortcut_off: "已关闭，@ 菜单不显示生图入口。",
			state_imageViewer_on: "已开启增强图片查看与标注。",
			state_imageViewer_off: "增强图片查看与标注未同时开启。",
			state_sketchBoard_on: "已开启，输入框旁显示画笔入口。",
			state_sketchBoard_off: "已关闭，输入框旁不显示画笔入口。",
			state_sketchAgent_on: "已开启，可用 @sketch 发起绘制。",
			state_sketchAgent_off: "已关闭，@sketch 绘图不可用。",
			state_voice_on: "语音入口已开启，空草稿时可发起通话。",
			state_voice_off: "语音入口已关闭，使用普通发送键。",
			state_remote_on: "已开启，手机可连接这台 DSH。",
			state_remote_off: "已关闭，手机无法连接这台 DSH。",
			diagnosticsAttention: "有 {count} 项需要注意",
			diagnosticsNotes: "{count} 条提示信息",
			diagnosticsAdvanced: "完整诊断（高级）",
			historyAsOf: "数据截至 {date}",
			triggerSketchName: "草图 · Beta",
			triggerSketchHint: "让 Agent 画图或改图",
			triggerImageName: "生图",
			triggerImageHint: "描述一张要生成或编辑的图",
			featureOverviewTitle: "功能一览",
			featureSettings: "设置",
			featureDetails: "详细设置",
			featurePair: "配对手机",
			featureSearchTitle: "联网搜索",
			featureSearchSummary: "模型回答时可以上网查资料。",
			searchSource_auto: "自动",
			searchSource_dsh: "DSH",
			searchSource_codex: "Codex",
			featureImageTitle: "图片生成与编辑",
			featureImageSummary: "让模型用你的订阅画图、改图。",
			featureConnectorsTitle: "ChatGPT 连接器",
			featureConnectorsSummary: "让模型用你在 ChatGPT 里连接的 GitHub、Gmail 等应用。",
			featureSketchTitle: "草图画板",
			featureSketchSummary: "自己画图，或让 Agent 画。",
			featureSketchNeedsImages: "先开启图片生成或编辑，输入框里才会出现画笔按钮。",
			sketchAgentRow: "Agent 绘图",
			sketchAgentRowHint: "在对话里发「@sketch」加要求，Agent 会在画板上一笔一笔画出来，你能看着它画。关闭后「@sketch」不可用。",
			sketchAgentNeedsBoard: "需要先开启草图画板。",
			sketchBoardRowHint: "输入框旁多一个画笔按钮，点开是画板，可以自己画，也可以画给模型当参考。关闭后没有画笔按钮。",
			featureVoiceTitle: "语音对话",
			featureVoiceSummary: "在输入框里直接说话聊天。你的声音会发送给 OpenAI 处理。",
			featureRemoteTitle: "手机远程控制",
			featureRemoteSummary: "用手机上的 ChatGPT App 指挥这台电脑上的 DSH。",
			imageGenerationRow: "生成新图片",
			imageGenerationRowHint: "模型可以用你的订阅画新图。关闭后，对话里不能让模型画图。",
			imageEditingRow: "编辑图片",
			imageEditingRowHint: "模型可以按参考图修改图片，也能在图上圈出区域接着改。关闭后只能画新图，不能改图。",
			imageShortcutRow: "输入框 @生图",
			imageShortcutRowHint: "在输入框打「@」，列表里会出现「生成图片」，选中即可，不用写提示词。关闭后没有这个入口。",
			imageViewerRow: "图片查看器",
			imageViewerRowHint: "点对话里的图片可以放大、拖动、标注、下载。关闭后用 DSH 自带的图片查看。",
			imageAdvancedTitle: "高级：图片型号与质量",
			quotaSettingsTitle: "额度显示与提醒",
			quotaAlertsNeedDisplay: "先选一种显示方式，才能在输入框里看到提醒。",
			answerStyleTitle: "回答风格",
			verbosityPageHint: "选「简洁」回答更短，选「详细」会多解释。",
			advancedTitle: "高级",
			advancedSummary: "一般不用改，默认值适合大多数人",
			connection_sse: "SSE",
			connection_websocket: "WebSocket",
			toolsScopeOn: "现在：DeepSeek 等模型的对话也能用这些功能。",
			toolsScopeOff: "现在：只有 GPT / Codex 模型的对话会用这些功能。",
			toolsScopeChange: "更改",
			creativeSketch: "草图画板 · Beta",
			diagnosticsHint: "遇到问题时生成报告，可复制后用于反馈。不含登录凭据和账号标识。",
			sketchCanvasSetting: "画板入口",
			sketchAgentSetting: "Agent 绘图",
			quotaShowIndicator: "显示额度",
			quotaIndicatorHint: "输入框只显示图标，点击查看详情。关闭时暂停续航采样。",
			quotaForecastOptional: "续航预测 · 实验",
			quickQuotaCompact: "额度",
			quotaShortWeek: "周",
			quotaShortDay: "日",
			quotaDetails: "剩余额度",
			quotaSeparateWindows: "各周期分别计算，任一周期用尽都会影响使用。",
			quickQuotaStatus: "Codex 剩余额度 {value}%",
			quickQuotaForecastStatus: "Codex 剩余额度 {value}%，按当前速度预计可用 {duration}",
			quickQuotaForecastCalibrating: "校准中",
			quickQuotaForecastCalibratingStatus: "Codex 剩余额度 {value}%，续航预测正在校准",
			quickQuotaForecastIdle: "用量稳定",
			quickQuotaForecastIdleStatus: "Codex 剩余额度 {value}%，当前没有可测量的消耗速度",
			quickQuotaForecastUntilReset: "够用到重置",
			quickQuotaForecastUntilResetStatus: "Codex 剩余额度 {value}%，按最近用量，预计可用到重置",
			quotaForecast: "按当前速度 {symbol}{duration}",
			quotaForecastAt: "按最近用量，预计{when}用完",
			quotaForecastRoughAt: "按最近用量，粗估{when}左右用完",
			quotaExhausted: "额度已用尽",
			pacePart_early: "凌晨",
			quotaWhenToday: "{day}{part}",
			quotaWhenTonight: "{day}{part}",
			quotaWhenEarlyToday: "{day}{part}",
			quotaWhenEarly: "{day}{part}",
			quotaWhenRangeEnd: "{part}",
			quotaWhenRange: "{from}至{to}",
			quotaWhenEarlyMorningRange: "{from}至{to}",
			historyRefresh: "刷新",
			historyTotalUnavailable: "官方未提供此周期的总用量",
			historyNoBreakdown: "官方尚未提供此周期的明细",
			fetchTitle: "网页读取来源",
			fetchDshHint: "使用 DSH 当前配置的网页读取服务；与上面的搜索来源分别设置。",
			fetchCodexHint: "通过 Codex 订阅读取可访问的网页文本。失败会直接提示，不会转到 DeepSeek API。",
			fetchUnavailableHint: "当前 DSH 不支持切换到 Codex 网页读取，请先升级宿主。",
			quotaForecastCalibrating: "续航正在校准",
			quotaForecastIdle: "当前用量稳定",
			quotaForecastUntilReset: "按最近用量，预计可用到重置",
			runwayDaysHours: "{days} 天 {hours}h",
			runwayDays: "{days} 天",
			runwayHours: "{hours}h",
			runwayMinutes: "{minutes} 分钟",
			speedTitle: "速度",
			speedStandard: "标准",
			speedStandardHint: "标准速度",
			speedFast: "高速",
			speedFastHint: "优先处理，速度取决于模型，消耗更多 Credits",
			verbosityTitle: "输出详略",
			verbosityDefault: "模型默认",
			verbosityDefaultHint: "使用官方模型目录推荐值",
			verbosityLow: "简洁",
			verbosityLowHint: "更短、更直接",
			verbosityMedium: "均衡",
			verbosityMediumHint: "兼顾完整性与长度",
			verbosityHigh: "详细",
			verbosityHighHint: "更充分的说明与结构",
			modelMenuAria: "模型、推理等级、速度与输出详略",
			modelLabel: "模型",
			effortLabel: "推理等级",
			providerDefault: "默认",
			selectModel: "选择模型",
			modelSearch: "搜索模型",
			modelNoMatch: "没有匹配的模型。",
			modelsLoading: "正在读取模型…",
			modelsEmpty: "没有可用模型；请先登录，并确认网络可用。",
			modelsHidden: "所有模型都已从列表中隐藏；可在设置中重新显示。",
			effortsEmpty: "当前模型未提供推理等级。",
			modelRetry: "重试",
			modelDirectoryFailed: "模型目录加载失败，请重试。",
			modelFailed: "模型目录加载失败：{value}",
			groupFailed: "{name}：{value}",
			imageGenerate: "生成图片",
			imageGenerating: "正在生成…",
			imageGenerated: "已生成",
			imageFailed: "生成失败",
			imageLabel: "生成的图片",
			imageOpen: "查看图片",
			imageOpenNamed: "查看 {value}",
			imageLoading: "正在加载图片…",
			imageLoadFailed: "图片加载失败，点击重试",
			imagePreview: "图片预览",
			imageClosePreview: "关闭预览",
			imageDownload: "下载",
			imageDownloadPreparing: "正在准备原图…",
			imageDownloadFailed: "下载失败，重试",
			imageFit: "适合窗口",
			imageAnnotate: "标注部位",
			imageAnnotateCancel: "取消标注",
			imageAnnotateHint: "点击图片添加编号标注",
			imageAnnotation: "标注 {value}",
			imageAnnotationPlaceholder: "描述这个部位要修改什么",
			imageRegions: "区域备注",
			imageCopyNotes: "复制备注",
			imageCopied: "已复制",
			imagePrevious: "上一张图片",
			imageNext: "下一张图片",
			imageZoomHint: "滚轮缩放 · 拖动查看 · 双击切换原始大小",
			imageActual: "原始大小",
			imageEditDefault: "编辑这张图片。",
			imageRegionNotes: "部位修改：",
			imageEdit: "在输入框中继续编辑",
			imageEditPreparing: "正在添加到输入框…",
			imageEditFailed: "回填失败：请填写每个标记的备注，并确认输入框可接收图片后重试。",
			imageRemoveAnnotation: "删除标注"
		};
		const en = {
			voiceNativeCaptureConfirm: "Use this computer’s microphone and speakers for this call? Capture stops when you hang up or leave the conversation.",
			voiceMediaHint: "If this window does not support WebRTC, continue the same conversation in a browser. Voice samples remain available. Your existing subscription is used; no API key is needed.",
			voiceBrowserContinue: "Continue this conversation in a browser",
			voiceBrowserCall: "Continue voice in a browser",
			voiceBrowserCopy: "Copy conversation link",
			voiceBrowserCopied: "Copied",
			voiceBrowserCopyFailed: "Copy failed; copy the link manually",
			voicePreviewSignIn: "Sign in to ChatGPT again to load voice samples.",
			voiceCatalogFailed: "The voice catalog could not load. Check the connection and retry; this does not mean the voice has no sample.",
			voiceDownloadFailed: "The voice sample could not download. Please retry.",
			voicePlaybackFailed: "The audio loaded but could not play. Check browser sound permissions and retry.",
			voicePreviewFailed: "The voice sample could not load. Check the connection and retry.",
			voiceWebRTCUnavailable: "This window does not support WebRTC voice calls. Open the same DSH conversation in a WebRTC-capable browser. Voice samples remain available.",
			voiceInsecure: "Voice requires a secure connection. Open DSH over HTTPS or local localhost.",
			voiceMicUnavailable: "Microphone access is unavailable in this window. Open DSH in a browser with microphone support.",
			voiceMicMissing: "No microphone was found. Check the device connection.",
			"diagnosticsSnapshotTime": "Report captured at:",
			"diagnosticsUnresolved": "Other failures remain without a later success; see the summary.",
			"diagnosticSeverity_warning": "Attention",
			"diagnosticSeverity_info": "Information",
			"diagnosticNext_restart": "Restart and regenerate. If versions still differ, check that the plugin update took effect.",
			"diagnosticNext_regenerate": "Regenerate immediately after reproducing. If collection remains incomplete, include the steps with your report.",
			"diagnosticNext_supported-options": "Keep using supported choices. New capabilities need adapter validation; do not insert unknown parameters manually.",
			"diagnosticNext_reproduce": "Match the operations and timestamps below to your problem. If failures persist, provide reproduction steps and this report.",
			"diagnosticFinding_evidence-truncated": "Older records or additional host scopes are omitted. This snapshot does not cover the entire history.",
			"diagnosticsNoRecordedFailure": "No failure in the current records; unused features remain unverified.",
			"diagnosticFinding_version-mismatch": "Client and server versions differ. Restart DSH and regenerate the report.",
			"diagnosticFinding_collection-incomplete": "Some checks could not finish. Inspect failed or timed-out collectors in the details.",
			"diagnosticFinding_catalog-gap": "The online catalog contains capabilities not supported by this adapter. This does not mean the model is unavailable.",
			"diagnosticFinding_recent-failure": "An operation or request failed within 15 minutes without a later success for the same operation. Inspect its timestamp and details.",
			"diagnosticReason_no-readiness-check": "No independent prerequisite check",
			"diagnosticReason_inspection-failed": "Check incomplete",
			"diagnosticReason_inspection-timeout": "Check timed out",
			"diagnosticSource_network": "Network request (not full reply)",
			"diagnosticReason_catalog-online": "Online catalog loaded",
			"diagnosticReason_catalog-unavailable": "Account catalog not loaded",
			"diagnosticReason_storage-readable": "Forecast cache readable",
			"diagnosticReason_tool-registered": "Global tool registered",
			"diagnosticReason_tool-missing": "Global tool not found",
			"diagnosticsCoverageHint": "Shows prerequisites and process-wide evidence from the last 15 minutes, not limited to this account or session. RPC, network and tool outcomes are not end-to-end validation.",
			"diagnosticsVersionMismatch": "Client and server versions differ. Reload and retry.",
			"diagnosticsPartial": "Some inspections failed or timed out. Other results are preserved; see details.",
			"diagnosticsCapability": "Capability",
			"diagnosticsReadiness": "Prerequisites",
			"diagnosticsEvidence": "Recent evidence",
			"diagnosticsUnverified": "Unverified",
			"diagnosticsHostCollected": "Host registrations and selection are included. Registrant labels may be minified; they do not identify packages or prove interference.",
			"diagnosticsHostUnknown": "Host inspection unavailable or unmounted; interference cannot be determined.",
			"diagnosticsDetails": "Redacted details",
			"diagnosticsCopyFailed": "Copy failed. Expand the details to copy manually.",
			"diagnosticSource_rpc": "RPC response",
			"diagnosticSource_tool": "Tool",
			"diagnosticOutcome_completed": "Completed",
			"diagnosticOutcome_failed": "Failed",
			"diagnosticOutcome_cancelled": "Cancelled",
			"diagnosticCapability_account": "Sign-in",
			"diagnosticCapability_accounts": "Accounts",
			"diagnosticCapability_settings": "Settings",
			"diagnosticCapability_models": "Models",
			"diagnosticCapability_quota": "Quota",
			"diagnosticCapability_search": "Search",
			"diagnosticCapability_images": "Images",
			"diagnosticCapability_sketch": "Sketch",
			"diagnosticCapability_subagents": "Subtasks",
			"diagnosticCapability_compaction": "Compaction",
			"diagnosticCapability_transport": "Connection",
			"diagnosticCapability_storage": "Storage",
			"diagnosticCapability_host-ui": "Host UI",
			"diagnosticReason_not-instrumented": "Insufficient evidence",
			"diagnosticReason_disabled-or-host-owned": "Disabled or host-managed",
			"diagnosticReason_sign-in-required": "Sign-in required",
			"diagnosticReason_local-sign-in-present": "Local sign-in present",
			"diagnosticReason_sign-in-unverified": "Sign-in unverified",
			"diagnosticReason_settings-writable": "Writable",
			"diagnosticReason_settings-readonly": "Read-only",
			"diagnosticReason_restart-required": "Restart required",
			"diagnosticReason_runtime-present": "Runtime installed",
			"diagnosticReason_runtime-missing": "Runtime missing",
			storageLoading: "Reading cache size…",
			storageTitle: "Storage and cache",
			storageForecast: "Quota forecast cache",
			storageClear: "Clear forecast history",
			storageHint: "Clears local forecast history only. Subscription quota is unchanged.",
			storageConfirm: "Clear local forecast history for all signed-in accounts? Forecasts will need new samples. Subscription quota, images, drafts and sign-in data are unaffected.",
			storageFailed: "Could not read or clear the forecast cache. Try again.",
			runtimeIncompatible: "An incompatible Codex subtask component was found. Uninstall it, restart DSH, then install the supported version.",
			runtimeManagedElsewhere: "This component is managed by the host or another dependency. Check DSH plugin management; it cannot be removed here.",
			runtimeLoading: "Checking component…",
			runtimeRestart: "Component changed. Restart DSH before using it.",
			runtime_installing: "Installing through DSH…",
			runtime_removing: "Uninstalling through DSH…",
			runtime_applying: "Applying installation…",
			runtimeInstall: "Install component",
			runtimeRemove: "Uninstall component",
			runtimeCancel: "Cancel installation",
			runtimeKeep: "Keep",
			runtimeConfirmRemove: "Confirm uninstall",
			runtimeRefresh: "Refresh status",
			runtimeActive: "Codex subtasks are running. Wait for them to finish before installing or uninstalling.",
			runtimeConfirm: "Uninstalling switches subtasks back to DSH. Subscription chat, images, sign-in and sketches stay available. Uninstall this optional component?",
			runtimeFailed: "The operation did not complete. Refresh and retry; see DSH plugin management for details.",
			runtimeBuildBlocked: "DSH blocked dependency build scripts. Review them in the official plugin manager before installing.",
			runtimeCancelled: "Installation cancelled. You can try again.",
			runtimeUnavailable: "This host has no component management interface. Update DSH or use the manual instructions.",
			runtimeHostUnsupported: "No Codex subtask component has been verified for this DSH version.",
			runtimeInstallHint: "DSH installs and removes the official Codex subtask component here. Installation does not enable subtasks automatically. Switching to DSH alone does not uninstall it.",
			compactionTitle: "Cloud compaction",
			compaction_dsh: "Off",
			compaction_cloud: "On",
			compactionHint: "Codex compacts long requests while DSH history and native compaction remain available. These requests use SSE; changed history invalidates previous checkpoints.",
			otherModelsTitle: "Use subscription features in conversations on other models (DeepSeek, …)",
			otherModels_on: "On",
			otherModels_off: "Off",
			otherModelsHint: "When off, conversations on DeepSeek and other non-Codex models no longer use subscription web search (DSH search is used instead), image generation or ChatGPT connectors; Codex subscription models are not affected. Phone remote control and voice calls are started by you and are not affected by this switch; set them separately under Phone & more.",
			advancedModelSearch: "Models and search",
			modelsSectionTitle: "Models",
			searchSectionTitle: "Search",
			defaultModelTitle: "Default model",
			defaultModelHint: "The model a new conversation opens with. This writes the same DSH default model setting as switching the model inside a chat.",
			defaultModelReset: "Restore DSH default",
			defaultModelResetHint: "Choose “Restore DSH default” to clear the saved selection and use the inherited DSH configuration. Existing conversations are unchanged.",
			defaultModelFollow: "Follow DSH default",
			defaultModelFollowHint: "Following the DSH default: {value}. Pick a Codex model to make every new conversation start with it.",
			defaultModelUnknown: "unknown",
			defaultModelUnavailable: "This DSH version provides no default-model service, so it cannot be set here.",
			defaultModelNoCatalog: "Sign in and load models to choose a default model.",
			defaultModelFailed: "Reading or saving the default model failed. Retry, or switch the model inside a chat.",
			inputImageDetail: "Input image detail",
			inputImageDetailHint: "Controls the detail level of images sent to the model. Higher detail uses more input tokens.",
			inputImageDetail_auto: "Auto",
			inputImageDetail_low: "Low",
			inputImageDetail_high: "High",
			inputImageDetail_original: "Original",
			connectors: "ChatGPT connectors",
			connectorsHint: "Lets any model in DSH use the apps you have connected in ChatGPT (GitHub, Gmail, Drive, Calendar and more). Connect the apps in ChatGPT first; what apps return is third-party content and models do not follow instructions inside it.",
			connectorsMode_off: "Connectors are off; models cannot see these apps.",
			connectorsMode_read: "Models can only read (search mail, read files, look up pull requests) and never change data.",
			connectorsMode_ask: "Anything that changes data, such as sending mail or editing files, asks for your approval every time.",
			connectorsMode_write: "Changing actions run immediately without a prompt and cannot be undone, so use this carefully.",
			connectors_off: "Off",
			connectors_read: "Read-only",
			connectors_ask: "Write after asking",
			connectors_write: "Write directly",
			defaultReasoningEffort: "Default reasoning effort",
			defaultReasoningEffortHint: "Used when no effort is selected manually. Unsupported levels fall back to the model default.",
			composerPredictions: "Input predictions",
			composerPredictionAccept: "Accept suggestion",
			composerPredictionsShortHint: "Tab fills draft",
			composerPredictionsHint: "Supported Codex models suggest your next message from the current conversation after a completed turn, when the draft is empty. Tab fills the draft without sending. Makes additional prediction requests. Official Codex predictions do not count toward usage limits or credits; the same exemption for this third-party integration is unconfirmed. Sending an accepted draft still counts normally.",
			featureLoading: "Loading…",
			featureLoadFailed: "Could not load. Click to retry",
			featureRetry: "Retry",
			defaultUltraHint: "Ultra is a DSH proactive delegation preset using the catalog-resolved model effort. It grants no additional permissions and appears only for supported models.",
			defaultReasoningEffort_ultra: "Ultra (proactive delegation)",
			defaultReasoningEffort_auto: "Model default",
			defaultReasoningEffort_off: "Off",
			defaultReasoningEffort_minimal: "Minimal",
			defaultReasoningEffort_low: "Low",
			defaultReasoningEffort_medium: "Medium",
			defaultReasoningEffort_high: "High",
			defaultReasoningEffort_xhigh: "Extra high",
			defaultReasoningEffort_max: "Maximum",
			reasoningSummary: "Reasoning summary",
			reasoningSummaryHint: "Shows a summary of the reasoning in the Thinking section of the conversation. Auto lets the model decide; concise is shorter; detailed is fuller; off asks for none.",
			reasoningCache: "Reuse cache when changing effort",
			reasoningCache_off: "Off",
			reasoningCache_on: "On",
			reasoningCacheHint: "On by default for supported models. Tries to reuse earlier cache when you change reasoning effort. Ordinary caching still works when off; cache hits and faster replies are not guaranteed.",
			reasoningCacheCloud: "Paused while cloud auto-compaction is selected. With DSH compaction, this switch applies again. Your compaction setting is never changed automatically.",
			reasoningCacheRetry: "Paused while Unlimited retries is selected. With a normal retry policy, this switch applies again. Your retry setting is never changed automatically.",
			retryPolicy: "Request retries",
			retryPolicyHint: "How many times a request is retried after a network or server error. Default keeps the standard DSH retries; Unlimited keeps retrying until it succeeds or you stop it.",
			retryPolicy_default: "Default",
			retryPolicy_off: "No retries",
			retryPolicy_10: "10",
			retryPolicy_20: "20",
			retryPolicy_unlimited: "Unlimited",
			reasoningSummary_auto: "Auto",
			reasoningSummary_concise: "Concise",
			reasoningSummary_detailed: "Detailed",
			reasoningSummary_none: "Off",
			subagentBackendTitle: "Independent subtasks",
			subagentBackend_dsh: "DSH",
			subagentBackend_codex: "Codex",
			connectionTitle: "Connection",
			diagnosticsLog: "Log",
			diagnosticsLogHint: "What happened while running, in order. Filter to warnings and errors above. Tokens, emails and paths are removed.",
			logLevel_all: "All",
			logLevel_warn: "Warnings and errors",
			logLevel_error: "Errors only",
			logEmpty: "Nothing recorded at this level yet.",
			logCopy: "Copy log",
			logCopied: "Log copied",
			logEarlier: "previous run",
			remoteTitle: "Phone remote control",
			remote_off: "Off",
			remote_on: "On",
			voiceStart: "Voice conversation",
			voiceEnd: "End voice",
			voiceConnecting: "Connecting voice…",
			voiceListening: "Listening",
			voiceSpeaking: "Speaking",
			voiceWorking: "DSH is working on it…",
			voiceMute: "Turn the microphone off",
			voiceUnmute: "Turn the microphone on",
			voiceMuteSpeaker: "Turn the sound off",
			voiceUnmuteSpeaker: "Turn the sound on",
			voiceMicBlocked: "No microphone permission: allow it in the browser or system and try again.",
			voiceFailed: "The voice call did not connect. Try again in a moment.",
			voiceTitle: "Voice conversation",
			voiceHint: "When the message box is empty, the send button becomes a voice button: tap it to talk to DSH, ask it to do things, and hear the answer. Calls use your ChatGPT subscription and go through OpenAI.",
			voiceVoice: "Voice",
			voiceLanguage: "Answer language",
			voiceAuto: "Same as you speak",
			voicePlay: "Listen",
			voiceLoading: "Loading…",
			voiceNoSample: "No sample is available for this voice.",
			voiceUnavailable: "no sample yet",
			voiceMore: "More voices (no sample yet)",
			voiceLang_zh: "中文",
			voiceLang_en: "English",
			voiceLang_ja: "日本語",
			voiceLang_ko: "한국어",
			voiceLang_es: "Español",
			voiceLang_fr: "Français",
			voiceLang_de: "Deutsch",
			voiceLang_pt: "Português",
			voiceLang_ru: "Русский",
			voicePreviewHint: "Changing the answer language plays a sample in that language. Auto uses an English sample.",
			remoteHint: "When on, this computer's DSH appears as a host in the ChatGPT mobile app's Codex list, so you can follow conversations, send messages, switch models and approve actions from your phone. Needs a signed-in subscription account; the computer must stay on and online.",
			remoteConnected: "This computer is online with ChatGPT; no phone connected yet",
			remoteConnecting: "Connecting",
			remoteWaiting: "Waiting for the previous connection to be released; usually reconnects within a few minutes",
			remoteUnauthorizedHelp: "The server refused Remote Control (401/403). Check that your ChatGPT sign-in has not expired; if it is fine, the account may need two-step verification turned on (a guess) in ChatGPT security settings.",
			remoteConflictLong: "Still not connecting? Usually another computer, another DSH copy or another window is using phone remote control with the same ChatGPT account and they keep taking the connection from each other. Turn phone remote control off elsewhere, then switch it Off and On again here.",
			remoteError: "Connection failed, retrying",
			remoteStopped: "Stopped",
			remotePaired: "Paired phones",
			remoteNoPhones: "No phone is paired yet.",
			remoteRevoke: "Remove",
			remoteLastSeen: "last seen {date}",
			remotePhoneUnknown: "Unnamed phone",
			remotePhones: "{count} phone(s) connected",
			remotePair: "Show pairing code",
			remotePairAgain: "New pairing code",
			remotePairFailed: "Could not create a pairing code. Check that the subscription account is signed in.",
			remotePairSteps: "Scan this in the ChatGPT app's Codex section, or type the manual code.",
			remoteManualCode: "Manual pairing code",
			remoteQrLabel: "Pairing QR code",
			remoteExpires: "Expires in about {minutes} min",
			remoteExpired: "The pairing code expired. Create a new one.",
			remoteLimits: "From the phone you can follow and continue DSH conversations, start new ones, send photos, switch models, choose permissions, approve actions and view changes. The phone cannot run other commands on the computer.",
			reviewModelTitle: "Auto review model",
			reviewModel_session: "Current model",
			reviewModel_official: "Codex reviewer",
			reviewModelHint: "Uses the current model by default. With Codex reviewer, DSH Auto review judges tool calls with Codex's own review model when your account catalog offers it. DSH keeps its review policy and allow/deny flow; otherwise the current model is used.",
			connectionHint: "SSE by default. Experimental WebSocket reuses connections and context transfers; connection failure before output can fall back to SSE. Cloud compaction uses SSE even when WebSocket is selected. Applies to the next request; context limits stay the same.",
			state_connection_cloud: "Cloud compaction is on; this request uses SSE.",
			streamIdleTimeoutTitle: "Stream inactivity timeout",
			streamIdleTimeoutHint: "How long a request may receive no streamed data before it is aborted. This is not an overall response deadline. Lower values can abort slow but valid reasoning and hand the request to DSH retry handling. Default: 10 minutes.",
			streamIdleTimeout_2: "2 min",
			streamIdleTimeout_5: "5 min",
			streamIdleTimeout_10: "10 min",
			streamIdleTimeout_20: "20 min",
			streamIdleTimeout_30: "30 min",
			subagentBackendHint: "Codex reuses subscription login and workspace permissions, inheriting the current subscription model by default. Turn on model selection under Plugins → Subagent, tick the allowed models and start a new session to request an allowed subscription model and reasoning effort in chat; other model sessions require an explicit selection. Shared-context subtasks stay in DSH.",
			subagentBackendUnavailable: "Subagent services are unavailable. Update DSH to use this option.",
			subagentRuntimeMissing: "Codex subtask runtime is not prepared. Subscription chat does not require it.",
			subagentRuntimePrepare: "Setup and offline instructions",
			subagentRuntimeInstalled: "Codex subtask component detected; its executable is checked on startup.",
			subagentRuntimeManage: "Install, uninstall and storage",
			subagentRuntimeCacheHint: "Package caches may remain after uninstalling. DSH or Portable manages them centrally. Sign-in, sketches and generated images are not deleted here.",
			sketchRecovered: "Unsaved sketch recovered",
			sketchRecoveryFailed: "Recovery checkpoint failed. Save or export your draft.",
			sketchStorageBlocked: "Draft storage is in use. Close other sketch windows and retry.",
			sketchDraftLimit: "The 20-draft limit is reached. Export first, or remove an unwanted draft before saving.",
			sketchStorageLimit: "Draft storage is full. Export first, or remove an unwanted draft before saving.",
			sketchSizeShort: "Size",
			sketchObjectDuplicate: "Duplicate object",
			sketchObjectDelete: "Delete object",
			sketchBrushHint_pen: "Solid round ink",
			sketchBrushHint_pencil: "Grain builds with repeated strokes",
			sketchBrushHint_marker: "Translucent flat tip for highlights",
			sketchDismissStatus: "Dismiss status",
			sketchRunResumeHint: "Allow subsequent drawing requests; does not resend a message",
			sketchTool_select: "Select",
			sketchTool_text: "Text",
			sketchTool_arrow: "Arrow",
			sketchShapes: "Shapes",
			sketchText: "Edit text",
			sketchTextDone: "Done",
			sketchTextSize: "Text size",
			sketchBrush: "Brush",
			sketchFill: "Fill",
			sketchDownload: "Download",
			sketchExportFormat: "Export format",
			sketchEditableFile: "Editable draft",
			sketchFormatHint: "PNG is flattened; editable drafts retain native strokes and can be imported again (up to 32 MB).",
			imageToSketch: "Open in sketch",
			imageRemoveBackground: "Remove background",
			imageRemoveBackgroundPrompt: "Remove the background from this image. Keep all foreground subjects unchanged and fully intact, with clean, smooth edges. Make the background transparent.",
			imageErase: "Erase",
			imageEraseHint: "Brush over what you want to remove",
			imageErasePrompt: "Remove the area marked in the second image from the first image",
			imageBrushSize: "Brush size",
			imageUndo: "Undo",
			imageSend: "Send",
			imageResize: "Resize",
			imageResizePrompt: "Make the aspect ratio {aspectRatio}",
			imageRatio_square: "Square",
			imageRatio_portrait: "Portrait",
			imageRatio_story: "Story",
			imageRatio_landscape: "Landscape",
			imageRatio_widescreen: "Widescreen",
			sketchPictures: "Images",
			sketchPictureAdd: "Add",
			sketchPictureSelect: "Select image",
			sketchPicturesEmpty: "Import or paste images as layers in this sketch.",
			sketchFlow: "Opacity",
			sketchZoomOut: "Zoom out",
			sketchZoomIn: "Zoom in",
			sketchFit: "Reset view",
			sketchKeys: "Keys",
			sketchKeysEnabled: "Enable shortcuts",
			sketchNavigationHint: "Space drag to pan · Alt wheel to zoom · Middle button to pan",
			sketchKeyHint: "Focus a field and press a key. Duplicate keys are rejected. Ctrl Z / Shift Z undo / redo, Ctrl S save, [ ] brush size.",
			sketchKey_pen: "Brush",
			sketchKey_eraser: "Eraser",
			sketchKey_line: "Line",
			sketchKey_rectangle: "Rectangle",
			sketchKey_circle: "Ellipse",
			sketchKey_pan: "Pan",
			sketchKey_zoomIn: "Zoom in",
			sketchKey_zoomOut: "Zoom out",
			sketchKey_fit: "Reset view",
			sketchReplay: "Replay",
			sketchReplayTitle: "How it was drawn",
			sketchReplayClose: "Back",
			sketchReplayPlay: "Play",
			sketchReplayPause: "Pause",
			sketchReplaySpeed: "Replay length",
			sketchReplayFast: "12 s",
			sketchReplayNormal: "30 s",
			sketchReplaySlow: "60 s",
			sketchReplayRecord: "Record process video",
			sketchReplaySave: "Save video",
			sketchReplayAgain: "Back to replay",
			sketchReplaySaveHint: "Choosing Save video asks where to put the file.",
			sketchReplayStopRecording: "Stop recording",
			sketchReplayEmpty: "Nothing to replay yet.",
			sketchReplayUnsupported: "Video recording is not available here.",
			sketchReplayFileSuffix: "process",
			sketchReplayHint: "Replays the drawing stroke by stroke; recording turns the replay into a WebM video (in real time, at the chosen length) that you can preview here before saving it.",
			sketchFiles: "Drafts",
			sketchNew: "New sketch",
			sketchImport: "Import file",
			sketchDraftName: "Draft name",
			sketchSave: "Save draft",
			sketchDeleteDraft: "Delete",
			sketchDeleteConfirm: "Confirm",
			sketchFileClose: "Close",
			sketchLocalDrafts: "Saved in this browser, up to 20 drafts. Autosaved on close. Paste or drop PNG / JPEG / WebP images under 20 MB.",
			sketchStorageFailed: "Could not complete the action. Check local storage, draft and layer limits, or image type and size. The canvas is preserved.",
			sketchAttachShort: "Attach",
			sketchTool_line: "Line",
			sketchStability: "Smooth on release",
			sketchStability0: "Off",
			sketchStability25: "Low",
			sketchStability50: "Medium",
			sketchStability75: "High",
			sketchShortcuts: "B brush · E eraser · L line · R rectangle · O ellipse · [ ] size · Ctrl Z undo · Ctrl Shift Z redo · Ctrl S save · Shift snap line",
			sketchRatio: "Canvas ratio",
			sketchRatioHint: "Canvas ratio; artwork fits without distortion, undo available",
			forecastCompactPending: "Estimating",
			forecastCompactChanging: "Re-estimating",
			forecastCompactStale: "Stale",
			imageEditShort: "Edit",
			forecastResolution: "Not enough change to estimate the rate yet",
			forecastChanging: "Usage intensity changed; estimating again",
			forecastStale: "Quota data is stale; waiting for an update",
			imageDropHere: "Drop reference images here",
			imageDropUnavailable: "Images cannot be added right now",
			imageRemoveDraft: "Remove image",
			recoveryClear: "Clear sign-in data",
			recoveryClearConfirm: "Confirm clear and sign in again",
			recoveryClearHint: "Removes all subscription sign-ins saved by this plugin. Conversations and settings remain. You can then sign in again.",
			recoveryHint: "First check the DSH connection and whether the plugin started; a duplicate model provider can also cause this error. Clearing sign-in data removes all saved accounts; only do this when needed.",
			recoveryFailed: "Clearing was not confirmed. Restore the DSH service before retrying.",
			quotaThresholdReached: "Quota alert threshold reached",
			imageCapability: "Image generation and editing",
			imageCapabilityHint: "Let the model create or edit images when you ask.",
			imageCapability_on: "Enabled",
			imageCapability_off: "Off",
			imageEntryPoints: "Creative shortcuts",
			imageEntryPointsHint: "@Image shortcut. Natural-language image requests still work when hidden.",
			imageEntryPoints_on: "Show",
			imageEntryPoints_off: "Hide",
			imageBrowsing: "Image browsing",
			imageBrowsingHint: "Preview pasted and conversation images; annotate, remove the background, erase or resize.",
			imageBrowsing_on: "Enhanced",
			imageBrowsing_off: "DSH default",
			imageGroupMixed: "Keep existing",
			imageQuality_auto: "Auto",
			imageQuality_low: "Low",
			imageQuality_medium: "Medium",
			imageQuality_high: "High",
			imageQuality_xhigh: "Extra high",
			imageQuality_max: "Maximum",
			imageWorkspaceMenu: "Image tools",
			imageCreateAction: "Generate or edit an image",
			imageCreateGroup: "Create",
			imageShortcut: "@Image shortcut",
			imageCreateTitle: "Describe your image",
			imageDraftHint: "Add to your draft, then send when ready. Attach references in the composer. Nothing is generated or existing text replaced automatically.",
			imageDraftFailed: "Could not update the draft. Keep your brief and check whether the composer is busy or contains references.",
			imageCreatePrompt: "Use the subscription image tool for the following request. If reference images are attached, edit those images:",
			imageDetails: "Image details",
			imageRequestedModel: "Requested model",
			imageReportedModel: "Server-reported model",
			imageModelUnreported: "Not reported",
			imageRequestedSize: "Requested size",
			imageActualSize: "Actual size",
			imageModel: "Requested model",
			imageQuality: "Requested quality",
			imageExperimental: "Experimental",
			imageModelHint: "Image 2.5 options are experimental: requests generated images successfully, but the requested model and quality are not confirmed.",
			sketchTool_pen: "Pen",
			sketchTool_rectangle: "Rectangle",
			sketchTool_circle: "Ellipse",
			sketchTool_eraser: "Eraser",
			sketchCanvas: "Sketch canvas · Beta",
			sketchCanvasHint: "Off by default. Enables the manual sketch board.",
			sketchCanvas_on: "On",
			sketchCanvas_off: "Off",
			sketchAgent: "Agent drawing · Beta",
			sketchAgentHint: "Off by default. Use @sketch to ask the Agent to draw; requires the sketch canvas.",
			sketchRun_drawing: "Agent is drawing…",
			sketchRun_finished: "Drawing complete",
			sketchRun_stopped: "Drawing stopped",
			sketchRun_failed: "Drawing failed",
			sketchRunStop: "Stop drawing",
			sketchRunResume: "Allow drawing again",
			sketchAgent_on: "On",
			sketchAgent_off: "Off",
			imageSettings: "Images",
			imageGeneration: "Generate new images",
			imageEditing: "Reference image editing",
			imageViewer: "Enhanced image viewer",
			imageAnnotations: "Image annotations",
			imageSketch: "Sketch canvas · Beta",
			imageSettingsHint: "Disabling features preserves existing images. Sketches need reference editing; annotations need the enhanced viewer.",
			sketch: "Sketch · Beta",
			sketchTitle: "Draw your idea",
			sketchAttach: "Attach sketch",
			sketchCancel: "Cancel",
			sketchUndo: "Undo",
			sketchRedo: "Redo",
			sketchClear: "Clear",
			sketchEraser: "Eraser",
			sketchPen: "Pen",
			sketchColor: "Color",
			sketchWidth: "Brush width",
			sketchFailed: "Could not attach the sketch. Keep the canvas and try again.",
			sketchHint: "Confirming only attaches an image. Describe the style and details before sending.",
			searchOptions: "Search options",
			searchDomainCount: "domains",
			catalogRefresh: "Refresh models",
			catalogOnline: "Account model catalog loaded",
			catalogCached: "Using the locally saved account model catalog",
			catalogCachedFailed: "Using the local model catalog; the online update failed.",
			catalogSignedOut: "Sign in to show the models your account can use.",
			catalogLoading: "Reading the account model catalog…",
			catalogFailed: "Could not read the account model catalog. Check the network and try again.",
			pickerModelsTitle: "Models in picker",
			pickerModelsHint: "Only controls the composer model list. Selected models and requests still work. New models appear by default.",
			searchMode: "Subscription search mode",
			searchMode_live: "Live",
			searchMode_cached: "Cached (experimental)",
			searchMode_disabled: "Disabled",
			searchModeHint: "Applies only to Codex subscription search. Cached mode requests indexed results; account support needs live acceptance. Failures do not switch providers.",
			searchDomains: "Filter result domains",
			searchDomainsHint: "Empty allows all results. Up to 20 comma-separated domains, including subdomains. Filters returned results, not the search service network access.",
			searchDomainsInvalid: "Enter up to 20 domains without URL schemes, paths, or wildcards.",
			sketchBrushType: "Brush",
			sketchBrush_pen: "Pen",
			sketchBrush_pencil: "Pencil",
			sketchBrush_marker: "Highlighter",
			sketchEraserMode: "Eraser mode",
			sketchErase_pixel: "Pixel eraser",
			sketchErase_stroke: "Stroke eraser",
			sketchLayers: "Layers",
			sketchLayer: "Layer",
			sketchLayerAdd: "New layer",
			sketchLayerVisible: "Show layer",
			sketchLayerName: "Layer name",
			sketchLayer_duplicate: "Duplicate layer",
			sketchLayer_up: "Move layer up",
			sketchLayer_down: "Move layer down",
			sketchLayer_delete: "Delete layer",
			sketchClearLayer: "Clear current layer",
			sketchHiddenLayer: "This layer is hidden. Show it or select another layer.",
			sketchLimit: "Stroke limit reached. Remove unused strokes to continue.",
			sketchLayerHint: "Edit the current layer; export visible layers. Undo includes strokes and layer operations.",
			imageInlinePrompt: "Generate or edit an image: ",
			quotaAlerts_custom: "Custom",
			quotaShortThreshold: "5h remaining",
			quotaLongThreshold: "Weekly / longer remaining",
			quotaThresholdInvalid: "Enter an integer from 1 to 100",
			quotaAlerts: "Usage alerts",
			quotaAlerts_off: "Off",
			quotaAlerts_important: "20% remaining",
			quotaAlerts_early: "Early warning",
			quotaAlertsHint: "Warn at the selected remaining threshold. Custom sets short and long windows separately. Fresh data only; no interrupting popups.",
			quotaWarning: "{window}: {value}% remaining. Check usage and reset time.",
			speedFastAstraHint: "About 2x speed on Astra; higher Credits use",
			speedUltrafast: "Ultrafast Beta",
			speedUltrafastHint: "Ultrafast tier, shown only when your account catalog offers it (Pro 500 today); fastest, uses allowance and Credits faster",
			imageEditLocation: "Location",
			imageEditReferenceGuide: "The clean source for this edit is \"{sourceName}\"; \"{referenceName}\" is the numbered location reference. Coordinates start at the top-left, x increases rightward and y downward; percentages refer to the whole image. Inspect both images and pass both as references to the image-editing tool. Preserve every number, position and requested change below in the tool prompt. Edit the corresponding content in the clean source; numbers, dots and leader lines on the location reference are guidance only and must not appear in the final result. If either image cannot be read or a location is unclear, explain the problem instead of guessing or ignoring annotations.",
			nav: "Codex",
			title: "Codex subscription",
			connected: "Signed in",
			disconnected: "Not signed in",
			accountLoading: "Reading account status…",
			browserLogin: "Browser sign-in",
			deviceLogin: "Device-code sign-in",
			logout: "Sign out",
			addAccount: "Add account",
			switchAccount: "Switch",
			removeAccount: "Remove",
			removeConfirm: "Confirm remove",
			removeCancel: "Cancel",
			signOutAll: "Sign out all",
			signOutConfirm: "Confirm (you will need to sign in again)",
			cancel: "Cancel",
			submit: "Submit authorization code",
			openLogin: "Open sign-in page",
			manualCode: "If the browser callback did not finish automatically, paste the code or full redirect URL.",
			deviceHint: "Enter this device code on the sign-in page:",
			waiting: "Waiting for sign-in to finish…",
			failed: "Sign-in failed. Try again.",
			failed_account_claim: "Sign-in was authorized, but the token of this account has no ChatGPT account ID (common for accounts created with only a phone number). Sign in with an email account, or add an email to the account in ChatGPT first, then try again.",
			failed_network: "The network connection failed during sign-in. Check the network or proxy and try again.",
			failed_token_exchange: "Authorization finished, but exchanging it for a token failed. Try again; if it keeps happening, check the network or proxy.",
			failed_callback: "The browser did not send the authorization back. Try again, or use device code sign-in.",
			accountRetry: "Retry",
			accountRetrying: "Retrying account status…",
			accountCredentialUnavailable: "The saved sign-in credentials are temporarily unavailable. Retry; saved sign-in information will not be deleted.",
			accountCredentialMalformed: "The saved sign-in credentials are malformed, so account status cannot be read. Retrying will not delete saved sign-in information.",
			accountStatusTimeout: "Reading account status timed out. Retry.",
			accountStatusTransport: "The account service is unavailable. Check the connection and retry.",
			accountStatusUnknown: "Could not read account status. Retry.",
			diagnostics: "Support diagnostics",
			diagnosticsLoad: "Create report",
			diagnosticsLoading: "Creating…",
			diagnosticsCopy: "Copy report (short)",
			diagnosticsCopyFull: "Copy full report",
			diagnosticsCopied: "Copied",
			diagnosticsFailed: "Server diagnostics unavailable. A local, redacted report is available to copy. Check the DSH service and plugin version.",
			feedbackOpen: "Report a problem",
			showEmail: "Show full email",
			hideEmail: "Hide email",
			emailUnavailable: "Email unavailable",
			searchTitle: "Search source",
			searchScope: "Auto follows the current session model; explicit choices fix the source. With Other models off, non-Codex chats use native DSH search only.",
			searchAuto: "Auto",
			searchAutoHint: "Codex models prefer subscription search; other models prefer DSH. Only missing sign-in, keys or an unavailable service trigger the other source. With Other models off, non-Codex chats use native DSH search only.",
			searchDsh: "DSH default",
			searchDshHint: "Use only DSH's configured search service and report failures directly. The plugin adds no DeepSeek account fallback. Charges depend on the service selected in DSH.",
			searchCodex: "Codex subscription",
			searchCodexHint: "Use ChatGPT subscription search and report failures directly. With Other models off, non-Codex chats use native DSH search only.",
			preferenceFailed: "The setting was not saved.",
			preferenceRetry: "Retry",
			usage: "Subscription quota",
			refresh: "Refresh",
			refreshing: "Refreshing…",
			noUsage: "Sign in to read quota windows reported by ChatGPT.",
			overviewTitle: "Usage overview",
			overviewLoading: "Reading usage statistics…",
			overviewUnavailable: "This account does not provide usage statistics.",
			overviewHeatmap: "Daily token use over the last half year",
			overviewNoUse: "no use",
			overviewTokens: "{value} tokens",
			overviewDays: "{value} days",
			overviewHours: "{value} h",
			overviewMinutes: "{value} min",
			overviewLifetime: "Lifetime tokens",
			overviewPeak: "Busiest day",
			overviewStreak: "Current streak",
			overviewLongestStreak: "Longest streak",
			overviewThreads: "Conversations",
			overviewEffort: "Most used reasoning",
			overviewFast: "Fast mode share",
			overviewLongestTurn: "Longest turn",
			settingsRestartRequired: "Saved. Restart DSH to apply it.",
			historyTitle: "Where the allowance went",
			historyLoading: "Reading usage history…",
			historyPeriods: "Allowance periods",
			historyUsed: "{value}% of this period's allowance used",
			historyPartial: "(still being counted)",
			historyApproximate: "From the official usage report; data may be incomplete or delayed.",
			historyBy_model: "By model",
			historyBy_surface: "By surface",
			historyBy_thread_source: "By source",
			historyBy_turn_trigger: "By trigger",
			historyDesktopApp: "Desktop app",
			historyCli: "CLI",
			historyIde: "IDE extension",
			historyWeb: "Web",
			historyMobile: "Mobile",
			historyUser: "Your chats",
			historySubagent: "Subtasks",
			historyMemory: "Memory upkeep",
			historyReview: "Review",
			historyComposer: "Composer",
			historyAutomation: "Automations",
			usageLoading: "Reading quota…",
			usageEmpty: "This account returned no displayable quota windows. Refresh later; this does not mean zero quota.",
			usageUpdated: "Updated {value}",
			remaining: "{value}% remaining",
			windowFiveHours: "5-hour quota",
			windowDaily: "Daily quota",
			windowWeekly: "Weekly quota",
			windowMonthly: "Monthly quota",
			windowAnnual: "Annual quota",
			windowHours: "{value}-hour quota",
			windowDays: "{value}-day quota",
			resets: "Resets {value}",
			resetUnknown: "Reset time not provided",
			creditsBalance: "Extra Credits balance",
			creditsUnit: "credits",
			unlimited: "Unlimited",
			monthlyCreditLimit: "Monthly Credits spending cap",
			resetCredits: "Quota resets",
			resetCreditsHint: "A reset restores your short-window limit, weekly limit, or both.",
			resetAvailableTab: "Available",
			resetFull: "Full reset",
			resetCreditsAvailable: "Quota resets ({count} available)",
			resetCreditDefaultName: "Quota reset",
			resetUse: "Use reset",
			resetPreparing: "Preparing…",
			resetConfirmTitle: "Confirm quota reset",
			resetWarning: "This consumes one reset and cannot be undone.",
			resetEarlyWarning: "Quota remains. The service may decline the reset.",
			resetAcknowledge: "I understand this may consume one reset now",
			resetCreditExpires: "Valid until {value}",
			resetCreditExpiryUnknown: "Expiration time not provided",
			resetCreditExpiryLoading: "Reading expiration…",
			resetCreditExpiryFailed: "Could not read expiration",
			resetWait: "Wait {count} seconds",
			resetFinal: "Confirm use",
			resetUsing: "Using…",
			resetSuccess: "Quota reset completed.",
			resetNothing: "There is currently nothing to reset; no new reset was consumed.",
			resetNoCredit: "No quota reset is available.",
			resetAlready: "This reset request was already processed.",
			resetFailed: "Could not use the quota reset.",
			accountQuotaLeft: "{label} {value}% left",
			accountQuotaResets: "resets {value}",
			accountQuotaLoading: "Reading quota…",
			accountQuotaError: "The quota of this account could not be read right now",
			accountQuotaNone: "No quota window reported",
			resetRenewLogin: "Your sign-in expired. Sign in again.",
			resetBlocked: "ChatGPT network protection blocked this request (HTTP 403). Your sign-in is fine; try again later or check your network, proxy or VPN.",
			resetExpired: "This confirmation expired. Start again.",
			resetInProgress: "A quota reset is already in progress.",
			resetTooEarly: "Wait for the cooldown before confirming.",
			resetAcknowledgeRequired: "Confirm that you understand this may consume a reset.",
			resetAccountChanged: "The signed-in account changed. Start again.",
			resetUncertain: "The server result is uncertain. Confirm again to check the same request; the plugin will not start a separate reset.",
			creditsNote: "Extra Credits and quota resets below are counted separately from the plan quota.",
			creditsExpires: "Expires {date} ({days} days left)",
			creditsExpiredToday: "Expires today ({date})",
			creditsExpiryEstimate: "(Estimate: the published expiry of the Pro 200 compensation Credits; the API does not report it, so check ChatGPT usage settings)",
			creditsAfterAllowance: "Credits are only drawn once the plan allowance runs out; there is no official switch to spend them first.",
			creditsMessages: "Roughly {local} local / {cloud} cloud messages",
			chatPass: "ChatPass weekly",
			creditsUsed: "{used} / {limit} credits used",
			spendReached: "The monthly Credits spending cap has been reached.",
			unavailable: "No data yet",
			quickQuotaSetting: "Composer quota",
			quickQuotaOff: "Off",
			quickQuotaPercent: "Percent",
			quickQuotaBar: "Progress bar",
			quickQuotaForecast: "Runway",
			quickQuotaBeta: "Beta",
			autoQuotaRetry: "Retry after quota reset",
			autoQuotaRetryHint: "Wait for confirmed short quota resets. The turn shows why it is waiting and can be stopped; switching accounts retries immediately.",
			quickQuotaForecastHint: "Shows remaining quota in the composer; hover or click for the forecast. Estimates run-out time from recent two-hour usage. Future usage affects the result. History stays local.",
			contextTitle: "Context window",
			contextStandard: "Standard",
			contextStandardHint: "Use the current account catalog default. The conversation budget reserves headroom using the official percentage (5% when omitted); DSH then manages output reservations and compaction.",
			contextExtended: "Extended",
			contextExtendedHint: "Use the maximum window allowed by the current account catalog; availability depends on the service. Settings show raw capacity; conversations reserve the same headroom as Standard.",
			contextCustom: "Custom",
			contextCustomHint: "Enter the full token count within the model limit. Headroom is reserved automatically; do not subtract it manually. Lower values trigger compaction sooner.",
			contextTokens: "Token limit",
			contextFixed: "Fixed {value}",
			contextMaximum: "{minimum}–{value}",
			settingsTab_start: "Start",
			settingsTab_models: "Models",
			settingsTab_tools: "Web & tools",
			settingsTab_create: "Create",
			settingsTab_more: "Phone & more",
			subtasksTitle: "Subtasks",
			subagentBackendNeedsRuntime: "Press \"Install\" below first; then the official Codex can run subtasks.",
			imageShortcutNeedsImages: "Turn on image generation or editing first.",
			sketchSectionTitle: "Sketch board",
			settingsReadonly: "Settings cannot be changed right now (DSH does not allow writes).",
			needSignIn: "You are not signed in; most features need a ChatGPT sign-in first.",
			needSignInGo: "Sign in",
			creditsFoldTitle: "Extra credits and quota resets",
			paceWarning: "At this pace you will run out {runOut}, before {reset}.",
			paceWhen: "{day} {part}",
			paceResetOf: "{day}'s reset",
			paceDay_today: "today",
			paceDay_tomorrow: "tomorrow",
			pacePart_morning: "morning",
			pacePart_afternoon: "afternoon",
			pacePart_evening: "evening",
			pacePart_night: "night",
			state_predictions_on: "On: press Tab when a suggestion is available.",
			state_predictions_off: "Off: no input-prediction requests are made.",
			state_autoQuotaRetry_on: "Waits for confirmed short-window quota recovery and retries.",
			state_autoQuotaRetry_off: "Does not wait and retry automatically after quota exhaustion.",
			state_compaction_on: "On: Codex handles long-context compaction.",
			state_compaction_off: "Cloud compaction is off; DSH compaction is used.",
			state_reasoningCache_on: "On: supported models may reuse reasoning context.",
			state_reasoningCache_off: "This optimization is off; normal caching remains available.",
			searchState_auto: "Search routing follows the current model.",
			searchState_dsh: "Uses DSH search without falling back to Codex.",
			searchState_codex: "Uses Codex search without falling back to DSH.",
			fetchState_dsh: "Reads webpage content through DSH.",
			fetchState_codex: "Reads webpage content through Codex.",
			contextState_standard: "Uses each model’s default context budget.",
			contextState_extended: "Uses the extended context budget supported by each model.",
			contextState_custom: "Uses the per-model budgets configured below.",
			defaultModelCurrent: "Current default: {value}",
			state_otherModels_on: "Non-Codex models may use subscription tools.",
			state_otherModels_off: "Subscription tools are limited to GPT / Codex models.",
			state_imageGeneration_on: "On: new images can be generated in conversations.",
			state_imageGeneration_off: "Off: new-image generation is unavailable.",
			state_imageEditing_on: "On: edit pictures from references or annotated regions.",
			state_imageEditing_off: "Off: reference-image editing is unavailable.",
			state_imageShortcut_on: "On: “Generate image” appears in the @ menu.",
			state_imageShortcut_off: "Off: image generation is hidden from the @ menu.",
			state_imageViewer_on: "Enhanced image viewing and annotation are on.",
			state_imageViewer_off: "Enhanced viewing and annotation are not both enabled.",
			state_sketchBoard_on: "On: the pen button appears beside the composer.",
			state_sketchBoard_off: "Off: the pen button is hidden from the composer.",
			state_sketchAgent_on: "On: use @sketch to ask the agent to draw.",
			state_sketchAgent_off: "Off: @sketch drawing is unavailable.",
			state_voice_on: "Voice is on; start a call when the draft is empty.",
			state_voice_off: "Voice is off; the normal send button is used.",
			state_remote_on: "On: this DSH is available to your phone.",
			state_remote_off: "Off: this DSH is unavailable to your phone.",
			diagnosticsAttention: "{count} item(s) need attention",
			diagnosticsNotes: "{count} note(s)",
			diagnosticsAdvanced: "Full report (advanced)",
			historyAsOf: "Data as of {date}",
			triggerSketchName: "Sketch · Beta",
			triggerSketchHint: "Ask the Agent to draw or edit a sketch",
			triggerImageName: "Image",
			triggerImageHint: "Describe an image to generate or edit",
			featureOverviewTitle: "Features",
			featureSettings: "Settings",
			featureDetails: "Details",
			featurePair: "Pair phone",
			featureSearchTitle: "Web search",
			featureSearchSummary: "Lets the model look things up online.",
			searchSource_auto: "Auto",
			searchSource_dsh: "DSH",
			searchSource_codex: "Codex",
			featureImageTitle: "Image generation and editing",
			featureImageSummary: "Lets the model draw and edit pictures with your subscription.",
			featureConnectorsTitle: "ChatGPT connectors",
			featureConnectorsSummary: "Lets the model use the apps you connected in ChatGPT, such as GitHub and Gmail.",
			featureSketchTitle: "Sketch board",
			featureSketchSummary: "Draw yourself, or let the agent draw.",
			featureSketchNeedsImages: "Turn on image generation or editing first; the pen button then appears in the composer.",
			sketchAgentRow: "Agent drawing",
			sketchAgentRowHint: "Send \"@sketch\" with a request in the conversation and the agent draws on the board while you watch. When off, \"@sketch\" is unavailable.",
			sketchAgentNeedsBoard: "Turn on the sketch board first.",
			sketchBoardRowHint: "Adds a pen button next to the composer that opens a board: draw yourself, or draw for the model as a reference. When off, there is no pen button.",
			featureVoiceTitle: "Voice calls",
			featureVoiceSummary: "Talk to the model from the composer. Your voice is sent to OpenAI.",
			featureRemoteTitle: "Phone remote control",
			featureRemoteSummary: "Control the DSH on this computer from the ChatGPT app on your phone.",
			imageGenerationRow: "Generate new images",
			imageGenerationRowHint: "Lets the model draw new pictures with your subscription. When off, the model cannot draw in conversations.",
			imageEditingRow: "Edit images",
			imageEditingRowHint: "Lets the model change a picture from a reference, or circle a region and keep editing. When off, it can only draw new pictures.",
			imageShortcutRow: "@image in the composer",
			imageShortcutRowHint: "Type \"@\" in the composer and pick \"Generate image\" from the list; no prompt to write. When off, that entry is gone.",
			imageViewerRow: "Image viewer",
			imageViewerRowHint: "Click a picture in the conversation to zoom, pan, annotate and download. When off, the built-in DSH viewer is used.",
			imageAdvancedTitle: "Advanced: image model and quality",
			quotaSettingsTitle: "Quota display and alerts",
			quotaAlertsNeedDisplay: "Choose a way to show quota first; the alert is shown in the composer.",
			answerStyleTitle: "Answer style",
			verbosityPageHint: "Pick Concise for shorter answers, Detailed for more explanation.",
			advancedTitle: "Advanced",
			advancedSummary: "Rarely needed; the defaults suit most people",
			connection_sse: "SSE",
			connection_websocket: "WebSocket",
			toolsScopeOn: "Now: conversations on DeepSeek and other models can use these features too.",
			toolsScopeOff: "Now: only GPT / Codex conversations use these features.",
			toolsScopeChange: "Change",
			creativeSketch: "Sketch board · Beta",
			diagnosticsHint: "Generate a report to copy into a support request. Sign-in credentials and account identifiers are excluded.",
			sketchCanvasSetting: "Board entry",
			sketchAgentSetting: "Agent drawing",
			quotaShowIndicator: "Show quota",
			quotaIndicatorHint: "Show an icon in the composer; click for details. Hiding it pauses forecast sampling.",
			quotaForecastOptional: "Runway forecast · Experimental",
			quickQuotaCompact: "Quota",
			quotaShortWeek: "wk",
			quotaShortDay: "day",
			quotaDetails: "Remaining quota",
			quotaSeparateWindows: "Each window is independent. Exhausting either window can limit usage.",
			quickQuotaStatus: "Codex quota: {value}% remaining",
			quickQuotaForecastStatus: "Codex quota: {value}% remaining; about {duration} at the current pace",
			quickQuotaForecastCalibrating: "Calibrating",
			quickQuotaForecastCalibratingStatus: "Codex quota: {value}% remaining; runway is calibrating",
			quickQuotaForecastIdle: "Usage stable",
			quickQuotaForecastIdleStatus: "Codex quota: {value}% remaining; no measurable consumption pace",
			quickQuotaForecastUntilReset: "Enough until reset",
			quickQuotaForecastUntilResetStatus: "Codex quota: {value}% remaining; enough until reset at the current pace",
			quotaForecast: "At current pace {symbol}{duration}",
			quotaForecastAt: "At recent usage, estimated to run out {when}",
			quotaForecastRoughAt: "Rough estimate at recent usage: around {when}",
			quotaExhausted: "Quota exhausted",
			pacePart_early: "early morning",
			quotaWhenToday: "this {part}",
			quotaWhenTonight: "tonight",
			quotaWhenEarlyToday: "early this morning",
			quotaWhenEarly: "early {day} morning",
			quotaWhenRangeEnd: "{label}",
			quotaWhenRange: "{from}–{to}",
			quotaWhenEarlyMorningRange: "{latest}",
			historyRefresh: "Refresh",
			historyTotalUnavailable: "Official total usage is unavailable for this period",
			historyNoBreakdown: "Official breakdown not yet available for this period",
			fetchTitle: "Webpage reading source",
			fetchDshHint: "Use the webpage reader configured in DSH, independently of the search source above.",
			fetchCodexHint: "Read accessible webpage text with your Codex subscription. Failures are reported directly, without falling back to the DeepSeek API.",
			fetchUnavailableHint: "This DSH version cannot switch to the Codex webpage reader. Update DSH first.",
			quotaForecastCalibrating: "Runway calibrating",
			quotaForecastIdle: "Usage currently stable",
			quotaForecastUntilReset: "Estimated to last until reset at recent usage",
			runwayDaysHours: "{days}d {hours}h",
			runwayDays: "{days}d",
			runwayHours: "{hours}h",
			runwayMinutes: "{minutes}m",
			speedTitle: "Speed",
			speedStandard: "Standard",
			speedStandardHint: "Standard speed",
			speedFast: "Fast",
			speedFastHint: "Priority processing; speed varies by model; higher Credits use",
			verbosityTitle: "Output detail",
			verbosityDefault: "Model default",
			verbosityDefaultHint: "Use the official model catalog recommendation",
			verbosityLow: "Concise",
			verbosityLowHint: "Shorter and more direct",
			verbosityMedium: "Balanced",
			verbosityMediumHint: "Balance completeness and length",
			verbosityHigh: "Detailed",
			verbosityHighHint: "More explanation and structure",
			modelMenuAria: "Model, effort, speed, and output detail",
			modelLabel: "Model",
			effortLabel: "Effort",
			providerDefault: "Default",
			selectModel: "Select model",
			modelSearch: "Search models",
			modelNoMatch: "No matching models.",
			modelsLoading: "Loading models…",
			modelsEmpty: "No models available. Sign in and make sure the network is reachable.",
			modelsHidden: "All models are hidden from this list. Show one in settings.",
			effortsEmpty: "This model provides no reasoning effort levels.",
			modelRetry: "Retry",
			modelDirectoryFailed: "Could not load the model directory. Try again.",
			modelFailed: "Could not load models: {value}",
			groupFailed: "{name}: {value}",
			imageGenerate: "Generate image",
			imageGenerating: "Generating…",
			imageGenerated: "Generated",
			imageFailed: "Generation failed",
			imageLabel: "Generated image",
			imageOpen: "View image",
			imageOpenNamed: "View {value}",
			imageLoading: "Loading image…",
			imageLoadFailed: "Image failed to load. Click to retry",
			imagePreview: "Image preview",
			imageClosePreview: "Close preview",
			imageDownload: "Download",
			imageDownloadPreparing: "Preparing original…",
			imageDownloadFailed: "Download failed. Retry",
			imageFit: "Fit to window",
			imageAnnotate: "Annotate",
			imageAnnotateCancel: "Cancel marking",
			imageAnnotateHint: "Click the image to add a numbered note",
			imageAnnotation: "Note {value}",
			imageAnnotationPlaceholder: "Describe what should change in this area",
			imageRegions: "Region notes",
			imageCopyNotes: "Copy notes",
			imageCopied: "Copied",
			imagePrevious: "Previous image",
			imageNext: "Next image",
			imageZoomHint: "Wheel to zoom · drag to pan · double-click for 100%",
			imageActual: "100%",
			imageEditDefault: "Edit this image.",
			imageRegionNotes: "Region changes:",
			imageEdit: "Continue editing in composer",
			imageEditPreparing: "Adding to composer…",
			imageEditFailed: "Handoff failed. Add a note to every marker and ensure the composer accepts images, then retry.",
			imageRemoveAnnotation: "Remove note"
		};
		//#endregion
		//#region src/client-styles.js
		const STYLE = `
.codexSubscriptionAdvancedPreferences{display:flex;flex-direction:column;gap:10px}
.codexSubscriptionAdvancedPreferences[data-others-off=true]>[data-governed=true]{opacity:.55;transition:opacity .15s}
.codexSubscriptionSearchChoices.codexSubscriptionQuotaModes{display:flex;flex:0 0 auto;gap:0;grid-template-columns:none}
.codexSubscriptionSettingsDisclosure>summary{display:flex;align-items:center;gap:10px;min-height:28px;cursor:pointer;list-style:none;font-size:14px;font-weight:500}
.codexSubscriptionSettingsDisclosure>summary::-webkit-details-marker{display:none}
.codexSubscriptionSettingsDisclosure>summary>.codexSubscriptionPreferenceHint{margin-left:auto;font-weight:400}
.codexSubscriptionSettingsDisclosure>summary>svg{flex:none;transition:transform .15s}
.codexSubscriptionSettingsDisclosure[open]>summary>svg{transform:rotate(180deg)}
.codexSubscriptionSettingsDisclosure>summary:focus-visible{outline:2px solid var(--dsw-alias-border-l3);outline-offset:4px;border-radius:4px}
.codexSubscriptionSettingsDisclosureBody{padding-top:8px;margin-top:8px;border-top:1px solid var(--dsw-alias-border-l2)}
.codexComposerQuota[data-warning=true]{color:var(--dsw-alias-state-error-primary)}
.codexComposerQuota[data-warning=true] progress{accent-color:var(--dsw-alias-state-error-primary)}
.codexComposerQuota[data-warning=true] progress::-webkit-progress-value{background:var(--dsw-alias-state-error-primary)}
.codexQuotaWarning{margin:0 0 5px;color:var(--dsw-alias-state-error-primary);font-size:12px}
.codexQuotaThresholds{display:flex;gap:14px;flex-wrap:wrap;font-size:12px}.codexQuotaThresholds label{display:flex;align-items:center;gap:5px}.codexQuotaThresholds input{width:64px}.codexQuotaThresholds [role=alert]{color:var(--dsw-alias-label-error)}
.codexImageSettings{border-top:1px solid var(--dsw-alias-border-l2);padding-top:6px}
.codexImageSettings>summary{font-weight:500}
.codexImagePreference{align-items:flex-start;padding:10px 0}
.codexImagePreference>.codexSubscriptionPreferenceCopy{flex:1;min-width:0}
.codexImagePreference .codexSubscriptionPreferenceHint{max-width:none}
.codexImagePreference>.codexSubscriptionContextTrigger{flex:none;max-width:55%}
.codexImageDefaultsGroup{border-top:1px solid var(--dsw-alias-border-l2);margin-top:6px;padding-top:6px}
.codexImageSettings>p{margin-top:8px;max-width:none}
.codexSubscriptionSearchHead{display:flex;flex-direction:column;gap:1px}
.codexSubscriptionSearchScope{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscription{display:flex;flex-direction:column;gap:10px;max-width:720px;color:var(--dsw-alias-label-primary);container-type:inline-size}
.codexSubscription h2,.codexSubscription h3,.codexSubscription p{margin:0}
.codexSubscriptionHead{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.codexSubscription h2{font-size:16px;line-height:24px;font-weight:500}
.codexSubscription h3{font-size:14px;line-height:22px;font-weight:500}
.codexSubscriptionCard{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1);padding:14px 16px;display:flex;flex-direction:column;gap:12px}
.codexSubscriptionUsageCard{padding:12px 14px;gap:9px}
.codexSubscriptionPreferencesCard{padding:12px 14px;gap:10px}
.codexSubscriptionPreference{min-height:32px;box-sizing:border-box;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px}
.codexSubscriptionPreferenceCopy{display:flex;min-width:0;flex-direction:column;gap:2px}
.codexSubscriptionPreferenceLabel{display:flex;align-items:center;gap:6px}
.codexSubscriptionPreference>.codexSubscriptionPreferenceCopy{flex:1 1 240px}
.codexSubscriptionPreferenceHint{max-width:none;font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionPreferenceStack{margin-top:6px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionPreferenceStack>.codexSubscriptionQuotaModes{flex:1 1 100%;margin-left:0;display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}
.codexSubscriptionPreferenceStack .codexSubscriptionQuotaMode{min-height:30px;padding:4px 8px;text-align:center;white-space:normal;line-height:16px}
.codexSubscriptionPreferenceLabel small{padding:0 6px;border-radius:999px;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-tertiary);font-size:10px;font-weight:500;line-height:16px}
@container (max-width:560px){.codexSubscriptionPreferenceStack>.codexSubscriptionQuotaModes{grid-auto-flow:row;grid-template-columns:repeat(2,minmax(0,1fr))}}
.codexSubscriptionModeNote{flex:1 1 100%;padding:7px 10px;border-radius:8px;background:var(--dsw-alias-bg-module-platform);font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionModeNote[data-danger=true]{background:color-mix(in srgb,var(--dsw-alias-label-danger,#d92d20) 12%,transparent);color:var(--dsw-alias-label-danger,#d92d20)}
.codexSubscriptionQuotaModes{display:flex;flex-wrap:wrap;max-width:100%;align-items:center;gap:3px;padding:2px;border-radius:9px;background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionQuotaMode{position:relative;display:flex;align-items:center;justify-content:center;min-height:26px;padding:0 9px;border-radius:7px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px;cursor:pointer;white-space:nowrap}
.codexSubscriptionQuotaMode small{margin-left:3px;font-size:9px;line-height:1;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionQuotaMode:has(input:checked){background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);box-shadow:0 0 0 1px var(--dsw-alias-border-l3)}
.codexSubscriptionQuotaMode:has(input:focus-visible){outline:2px solid var(--dsw-alias-border-l3);outline-offset:1px}
.codexSubscriptionQuotaMode:has(input:disabled){cursor:not-allowed;opacity:.5}
.codexSubscriptionQuotaMode input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}
.codexSubscriptionContext{display:flex;flex-direction:column;gap:8px}
.codexSubscriptionPickerSetting{display:flex;flex-direction:column;gap:8px}
.codexSubscriptionContextHead{font-size:13px;line-height:20px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.codexSubscriptionContextCopy{display:flex;min-width:0;flex:1;flex-direction:column;gap:2px}
.codexSubscriptionContextHint{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionContextTrigger{height:32px;min-width:108px;display:inline-flex;align-items:center;justify-content:space-between;gap:10px;padding:0 10px 0 12px;border:0;border-radius:999px;outline:0;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;cursor:pointer}
.codexSubscriptionContextTrigger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.codexSubscriptionContextTrigger:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3)}
.codexSubscriptionContextTrigger:disabled{color:var(--dsw-alias-label-dimmed);cursor:not-allowed}
.codexSubscriptionContextTrigger svg{color:var(--dsw-alias-label-tertiary);transition:transform 120ms var(--ds-ease-in-out)}
.codexSubscriptionContextTrigger[aria-expanded=true] svg{transform:rotate(180deg)}
.codexSubscriptionContextModels{display:flex;flex-direction:column;border-top:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionContextModel{min-height:42px;display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionContextModel:last-child{border-bottom:0}
.codexSubscriptionContextModelCopy{display:flex;min-width:0;flex-direction:column}
.codexSubscriptionContextModelCopy strong{font-size:12px;line-height:18px;font-weight:500}
.codexSubscriptionContextModelCopy span{font-size:11px;line-height:16px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionContextInput{width:116px}
.codexSubscriptionSearch{display:flex;flex-direction:column;gap:2px}
.codexSubscriptionDivider{height:1px;background:var(--dsw-alias-border-l2)}
.codexSubscriptionQuotaModes[data-saving=true] .codexSubscriptionQuotaMode:has(input:disabled){cursor:wait;opacity:1}
.codexSubscriptionSearchChoices[data-saving=true] .codexSubscriptionQuotaMode:has(input:disabled){cursor:wait;opacity:1}
.codexSubscriptionAccountRow,.codexSubscriptionSectionHead{display:flex;align-items:center;justify-content:space-between;gap:12px}
.codexSubscriptionStatus{display:flex;align-items:center;gap:8px;font-size:14px;line-height:22px;font-weight:500}
.codexSubscriptionAccounts{display:flex;flex-direction:column;border-top:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionAccount{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:42px;border-bottom:1px solid var(--dsw-alias-border-l2);font-size:13px}
.codexSubscriptionAccount:last-child{border-bottom:0}
.codexSubscriptionAccountMain{display:flex;flex-direction:column;gap:2px;padding:6px 0;min-width:0}
.codexSubscriptionAccountQuota{display:flex;flex-wrap:wrap;gap:2px 12px;font-size:12px;color:var(--dsw-alias-text-l2)}
.codexSubscriptionAccountQuota[data-state=error]{color:var(--dsw-alias-text-danger,#c0392b)}
.codexSubscriptionAccount[data-active=true] .codexSubscriptionEmail,.codexSubscriptionAccount[data-active=true]>span{font-weight:600}
.codexSubscriptionEmail{max-width:100%;overflow:hidden;padding:2px 4px;border:0;border-radius:5px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}
.codexSubscriptionEmail:hover{background:var(--dsw-alias-interactive-bg-hover)}
.codexSubscriptionEmail:focus-visible{outline:2px solid var(--dsw-alias-border-l3);outline-offset:1px}
.codexSubscriptionFlow label{display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionDot{width:8px;height:8px;border-radius:50%;background:var(--dsw-alias-label-dimmed)}
.codexSubscriptionDot[data-state=connected]{background:var(--dsw-alias-state-success-primary)}
.codexSubscriptionDot[data-state=disconnected]{background:var(--dsw-alias-state-error-primary)}
.codexSubscriptionActions{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.codexSubscriptionFlow{display:flex;flex-direction:column;gap:10px;padding:12px 14px;border-radius:10px;background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionFlow p{font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionCode{width:max-content;max-width:100%;font:600 16px/22px ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.08em;overflow-wrap:anywhere}
.codexSubscriptionError{font-size:13px;line-height:20px;color:var(--dsw-alias-state-error-primary)}
.codexSubscriptionInput{width:100%;box-sizing:border-box}
.codexSubscriptionRecover{display:flex;align-items:center;justify-content:space-between;gap:12px}
.codexSubscriptionRecover .codexSubscriptionError{flex:1}
.codexSubscriptionRecover button{flex:0 0 auto}
.codexSubscriptionDiagnostics{color:var(--dsw-alias-label-secondary)}.codexSubscriptionDiagnostics h3{color:var(--dsw-alias-label-primary)}
.codexSubscriptionDiagnostics ul{margin:0;padding-left:18px;font-size:13px;line-height:20px}
.codexSubscriptionDiagnostics li+li{margin-top:6px}
.codexSubscriptionDiagnostics li strong{font-weight:600;color:var(--dsw-alias-label-primary)}
.codexSubscriptionDiagnostics [role=status]>p{margin:0;font-size:13px}
.codexSubscriptionDiagnostics pre{max-height:240px;margin:0;padding:10px 12px;border-radius:8px;background:var(--dsw-alias-bg-module-platform);overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font:11px/17px ui-monospace,SFMono-Regular,Consolas,monospace;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionLink{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;min-height:32px;padding:0 13px;border:1px solid var(--dsw-alias-border-l2);border-radius:999px;background:transparent;color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px;text-decoration:none;white-space:nowrap}
.codexSubscriptionLink:hover{background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionLink:focus-visible{outline:2px solid var(--dsw-alias-border-l3);outline-offset:2px}
.codexSubscriptionSectionTitle{display:flex;flex:1;min-width:0;flex-direction:column;gap:2px}
.codexSubscriptionFreshness{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionRefresh{flex:0 0 auto;min-width:72px;width:max-content;white-space:nowrap!important;word-break:keep-all!important;overflow-wrap:normal!important;writing-mode:horizontal-tb!important}
.codexSubscriptionRefresh *{white-space:nowrap!important;word-break:keep-all!important;writing-mode:horizontal-tb!important}
.codexSubscriptionEmpty{padding:18px;border:1px dashed var(--dsw-alias-border-l3);border-radius:10px;text-align:center;font-size:13px;line-height:20px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionHistory{margin-top:10px;border-top:1px solid var(--dsw-alias-border-l3);padding-top:8px}
.codexSubscriptionHistoryRefresh{margin:6px 0;padding:3px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer}
.codexSubscriptionHistoryRefresh:disabled{opacity:.5;cursor:default}
.codexSubscriptionHistory>summary{cursor:pointer;font-size:13px;font-weight:500;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionHistoryPeriods{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.codexSubscriptionHistoryPeriods button{height:26px;padding:0 10px;border:1px solid var(--dsw-alias-border-l3);border-radius:13px;background:transparent;color:inherit;font-size:12px;cursor:pointer}
.codexSubscriptionHistoryPeriods button[aria-pressed=true]{background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-inverted)}
.codexSubscriptionHistorySummary{margin:4px 0 8px;font-size:13px}
.codexSubscriptionHistoryGroup{margin:8px 0}
.codexSubscriptionHistoryGroup h4{margin:0 0 4px;font-size:12px;font-weight:500;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionOverviewStats{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin:10px 0}
.codexSubscriptionOverviewStats div{padding:8px 10px;border-radius:10px;background:var(--dsw-alias-bg-layer-3,rgba(127,127,127,.08))}
.codexSubscriptionOverviewStats dt{margin:0;font-size:11px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionOverviewStats dd{margin:2px 0 0;font-size:15px;font-weight:600}
.codexSubscriptionHeatmap{display:block;width:100%;max-width:520px;margin:6px 0 4px}
.codexSubscriptionHeatmap rect{fill:var(--dsw-alias-border-l3,rgba(127,127,127,.25))}
.codexSubscriptionHeatmap rect[data-level="1"]{fill:#0a84ff;fill-opacity:.3}
.codexSubscriptionHeatmap rect[data-level="2"]{fill:#0a84ff;fill-opacity:.5}
.codexSubscriptionHeatmap rect[data-level="3"]{fill:#0a84ff;fill-opacity:.75}
.codexSubscriptionHeatmap rect[data-level="4"]{fill:#0a84ff}
.codexSubscriptionHistoryRow{display:grid;grid-template-columns:minmax(80px,32%) 1fr 52px;align-items:center;gap:8px;font-size:12px;line-height:20px}
.codexSubscriptionHistoryKey{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.codexSubscriptionHistoryRow progress{width:100%;height:6px}
.codexSubscriptionHistoryRow strong{text-align:right;font-weight:500}
.codexSubscriptionLimits{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:6px}
.codexSubscriptionLimit{min-width:0;border-radius:10px;padding:9px 12px;background:var(--dsw-alias-bg-module-platform);display:flex;flex-direction:column;gap:6px}
.codexSubscriptionLimitTop{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.codexSubscriptionLimitLabel{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionLimit strong{font:600 18px/24px ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums}
.codexSubscriptionLimit progress{width:100%;height:4px;border:0;border-radius:999px;overflow:hidden;background:var(--dsw-alias-border-l3);accent-color:var(--dsw-alias-brand-primary,#3964fe);-webkit-appearance:none;appearance:none}
.codexSubscriptionLimit progress::-webkit-progress-bar{background:var(--dsw-alias-border-l3);border-radius:999px}
.codexSubscriptionLimit progress::-webkit-progress-value{background:var(--dsw-alias-brand-primary,#3964fe);border-radius:999px}
.codexSubscriptionLimit progress::-moz-progress-bar{background:var(--dsw-alias-brand-primary,#3964fe);border-radius:999px}
.codexSubscriptionLimitMeta{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionLimitPeriod{display:flex;gap:8px;flex-wrap:wrap}
.codexSubscriptionSearch>.codexSubscriptionSearchOptions{margin-top:0;padding-top:2px;border-top:1px solid var(--dsw-alias-border-l2);font-size:12px}
.codexSubscriptionDivider+.codexSubscriptionDivider{display:none}
.codexSubscriptionPickerModels{display:flex;flex-direction:column;border-top:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionPickerModel{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:36px;border-bottom:1px solid var(--dsw-alias-border-l2);font-size:13px}
.codexSubscriptionPickerModel:last-child{border-bottom:0}
.codexSubscriptionSearchOptions>summary{cursor:pointer;color:var(--dsw-alias-label-primary);padding:6px 0}
.codexSubscriptionSearchOptions>summary>span{float:right;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionSearchOptions[open]>summary{margin-bottom:8px}
.codexSubscriptionCreditSection{display:flex;flex-direction:column;gap:7px}
.codexSubscriptionCreditNote{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionCreditExpiry{display:grid;gap:2px;font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}.codexSubscriptionCreditExpiry p{margin:0}.codexSubscriptionCreditExpiry[data-soon=true]{color:var(--dsw-alias-label-secondary);font-weight:600}
.codexSubscriptionCreditRows{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px}
.codexSubscriptionCreditBalance,.codexSubscriptionSpendLimit{min-width:0;border-radius:10px;padding:12px 14px;background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionCreditBalance{display:flex;flex-direction:column;gap:6px}
.codexSubscriptionCreditBalance span,.codexSubscriptionCreditLabel{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionCreditBalance strong{font:600 18px/24px ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}
.codexSubscriptionCreditRows{display:flex;flex-direction:column;gap:6px}
.codexSubscriptionResetMeta{display:flex;min-width:0;flex-direction:column;gap:1px}
.codexSubscriptionResetPanel{display:flex;flex-direction:column;gap:10px;margin-top:6px}
.codexSubscriptionResetHead{display:flex;flex-direction:column;gap:2px}
.codexSubscriptionResetHead strong{font-size:14px;line-height:20px;font-weight:600;color:var(--dsw-alias-label-primary)}
.codexSubscriptionResetHead span{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionResetBox{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;padding:6px 14px 2px}
.codexSubscriptionResetTabs{display:flex;gap:8px;padding:6px 0 10px;border-bottom:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionResetTabs span{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:8px;background:var(--dsw-alias-bg-module-platform);font-size:12px;line-height:18px;font-weight:600;color:var(--dsw-alias-label-primary)}
.codexSubscriptionResetTabs b{font-weight:400;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionResetBox .codexSubscriptionResetBalance{gap:0}
.codexSubscriptionResetBox .codexSubscriptionResetCard{padding:12px 0;border:0;border-radius:0;background:none}
.codexSubscriptionResetBox .codexSubscriptionResetCard+.codexSubscriptionResetCard{border-top:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionResetBox .codexSubscriptionResetCard strong{font-size:13px;line-height:20px;font-weight:600}
.codexSubscriptionResetBox .codexSubscriptionResetExpiry{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionResetBox .codexSubscriptionResetUse{min-height:28px;padding:0 12px;border:0!important;border-radius:8px;background:var(--dsw-alias-bg-module-platform);font-size:12px;font-weight:600}
.codexSubscriptionResetBox>.codexSubscriptionResetBalance>.codexSubscriptionCreditNote{padding:12px 0}
.codexSubscriptionResetBalance{display:flex;flex-direction:column;gap:8px}
.codexSubscriptionResetCard{display:flex;align-items:center;justify-content:space-between;gap:10px;min-width:0;padding:9px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionResetCard{flex-wrap:wrap}
.codexSubscriptionResetCard .codexSubscriptionResetMeta{flex:1 1 180px}
.codexSubscriptionResetCard .codexSubscriptionActions{width:auto;flex:0 0 auto}
.codexSubscriptionResetCard strong{overflow:hidden;font-size:12px;line-height:18px;font-weight:500;text-overflow:ellipsis;white-space:nowrap}
.codexSubscriptionResetCard .codexSubscriptionResetUse{min-height:28px;padding:0 10px}
.codexSubscriptionResetBalance .codexSubscriptionActions{justify-content:flex-start}
.codexSubscriptionResetFlow{display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--dsw-alias-border-l2);padding-top:10px}
.codexSubscriptionResetFlow h4{margin:0;font-size:13px;line-height:20px;font-weight:500}
.codexSubscriptionResetWarning{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionResetExpiry{font-size:11px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionResetCheck{display:flex;align-items:flex-start;gap:8px;padding:9px 10px;border-radius:8px;background:var(--dsw-alias-bg-module-platform);font-size:12px;line-height:18px;color:var(--dsw-alias-label-primary);cursor:pointer}
.codexSubscriptionResetCheck input{margin:3px 0 0;accent-color:var(--dsw-alias-label-primary)}
.codexSubscriptionResetFinal{border-color:var(--dsw-alias-state-error-primary)!important;color:var(--dsw-alias-state-error-primary)!important}
.codexSubscriptionResetResult{font-size:12px;line-height:18px;color:var(--dsw-alias-state-success-primary)}
.codexSubscriptionResetUse:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.codexSubscriptionResetUse:focus-visible{outline:2px solid var(--dsw-alias-border-l3);outline-offset:1px}
.codexSubscriptionSpendLimit{display:flex;flex-direction:column;gap:8px}
.codexSubscriptionSpendTop{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.codexSubscriptionSpendTop strong{font:600 16px/22px ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums}
.codexSubscriptionSpendLimit progress{width:100%;height:6px;border:0;border-radius:999px;overflow:hidden;background:var(--dsw-alias-border-l3);accent-color:var(--dsw-alias-brand-primary,#3964fe);-webkit-appearance:none;appearance:none}
.codexSubscriptionSpendLimit progress::-webkit-progress-bar{background:var(--dsw-alias-border-l3);border-radius:999px}
.codexSubscriptionSpendLimit progress::-webkit-progress-value{background:var(--dsw-alias-brand-primary,#3964fe);border-radius:999px}
.codexSubscriptionSpendLimit progress::-moz-progress-bar{background:var(--dsw-alias-brand-primary,#3964fe);border-radius:999px}
.codexSettingsTabs{position:sticky;top:0;z-index:2;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;padding:4px;background:var(--dsw-alias-bg-module-platform);border-radius:12px}
.codexSettingsTabs button{min-width:0;min-height:36px;border:0;border-radius:9px;padding:7px 6px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:18px;cursor:pointer}
.codexSettingsTabs button:focus-visible{outline:2px solid var(--dsw-alias-border-l3);outline-offset:1px}
.codexSettingsTabs button[aria-selected=true]{background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:0 1px 3px #0001}
.codexSubscription>[role=tabpanel]:not([hidden]){display:flex;flex-direction:column;gap:10px}
.codexComposerQuota:focus-visible{outline:1px solid var(--dsw-alias-border-l3);outline-offset:2px}
.codexComposerQuota{display:inline-flex;align-items:center;gap:9px;flex:0 0 auto;height:28px;box-sizing:border-box;padding:0 5px;border:0;border-radius:6px;background:transparent;cursor:pointer;color:var(--dsw-alias-label-secondary);font-family:inherit;font-size:12px;line-height:20px;font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}
.codexComposerQuota:hover,.codexComposerQuota[aria-expanded=true]{background:var(--dsw-alias-interactive-bg-hover)}
.codexQuotaCompactWindow{display:inline-flex;align-items:center;gap:5px;min-width:0;max-width:min(380px,55vw)}
.codexQuotaCompactWindow>span:last-child{overflow:hidden;text-overflow:ellipsis}
.codexQuotaPopover{position:fixed;z-index:1000;width:max-content;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);overflow:auto;box-sizing:border-box;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:0 4px 16px #0002;font-size:12px;line-height:20px;outline:none}
.codexQuotaDetail+ .codexQuotaDetail{margin-top:5px;padding-top:5px;border-top:1px solid var(--dsw-alias-border-l2)}
.codexQuotaDetail>div{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.codexQuotaDetail strong{font-weight:500}
.codexQuotaReset,.codexQuotaDetail p{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px}
.codexComposerQuotaBar{width:100%;margin-top:8px}
.codexComposerQuotaBar{display:block;width:40px;height:4px;border:0;border-radius:999px;overflow:hidden;background:var(--dsw-alias-border-l3);accent-color:var(--dsw-alias-label-secondary);-webkit-appearance:none;appearance:none}
.codexComposerQuotaBar::-webkit-progress-bar{background:var(--dsw-alias-border-l3);border-radius:999px}
.codexComposerQuotaBar::-webkit-progress-value{background:var(--dsw-alias-label-secondary);border-radius:999px}
.codexComposerQuotaBar::-moz-progress-bar{background:var(--dsw-alias-label-secondary);border-radius:999px}
.codexModelSelect{position:relative;min-width:0}
.codexModelSelectTrigger{display:flex;align-items:center;gap:4px;min-width:0;max-width:min(360px,45cqw);height:28px;padding:0 4px 0 8px;border:0;border-radius:var(--dsw-radius-sm);outline:0;background:transparent;color:var(--dsw-alias-label-secondary);font-size:13px;font-weight:500;line-height:20px;cursor:pointer}
.codexModelSelectTrigger:hover:not(:disabled),.codexModelSelectTrigger[aria-expanded=true]{background:var(--dsw-alias-interactive-bg-hover)}
.codexModelSelectTrigger:focus-visible{box-shadow:0 0 0 2px var(--dsw-alias-border-l3)}
.codexModelSelectTrigger:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}
.codexModelSelectBolt{display:block;flex:none;width:14px;height:14px;color:var(--dsw-alias-label-primary)}
.codexModelSelectLabel{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.codexModelSelectEffort{flex:none;color:var(--dsw-alias-label-caption)}
.codexModelSelectChevron{flex:none;color:var(--dsw-alias-label-caption);transition:transform 120ms}
.codexModelSelectTrigger[aria-expanded=true] .codexModelSelectChevron{transform:rotate(180deg)}
/* The menu follows DSH's own model picker: one floating surface above the trigger, rows drill into the same surface. */
.codexModelSelectMenu{z-index:1100;--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-sizing:border-box;position:fixed;display:flex;flex-direction:column;width:max-content;min-width:min(240px,100vw - 32px);max-width:min(420px,100vw - 32px);max-height:min(360px,100vh - 96px);padding:4px;border:0;box-shadow:var(--dsw-elevation-prominent);color:var(--dsw-alias-label-primary);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);overflow:hidden}
.codexModelSelectCell{box-sizing:border-box;display:flex;align-items:center;gap:6px;width:auto;min-width:100%;height:34px;padding:0 8px;border:none;border-radius:var(--dsw-radius-md);outline:none;background:transparent;color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px;text-align:left;cursor:pointer}
.codexModelSelectCell:hover,.codexModelSelectCell:focus-visible{background:var(--dsw-alias-interactive-bg-hover)}
.codexModelSelectCellLabel{flex:none;white-space:nowrap}
.codexModelSelectCellValue{flex:auto;min-width:0;overflow:hidden;color:var(--dsw-alias-label-tertiary);text-align:right;text-overflow:ellipsis;white-space:nowrap}
.codexModelSelectCellChevron{flex:none;width:12px;height:12px;color:var(--dsw-alias-menu-icon)}
.codexModelSelectSearchRow{flex-shrink:0;position:relative;margin:2px 0 3px}
.codexModelSelectSearchRow .codexModelSelectSearch{display:flex;height:auto;padding:5px 7px;border:0 solid transparent;border-radius:var(--dsw-radius-md);background:transparent}
.codexModelSelectSearchRow .codexModelSelectSearch:focus-within{border-color:transparent}
.codexModelSelectSearchRow .codexModelSelectSearch input{padding:0;font-size:12px;line-height:normal}
.codexModelSelectSearchRow .codexModelSelectSearch input::placeholder{color:var(--dsw-alias-label-caption)}
.codexModelSelectGroups{flex:1 1 auto;min-height:0;overflow-y:auto}
.codexModelSelectGroupTitle{padding:5px 8px 3px;color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:500;line-height:18px}
.codexModelSelectOption{box-sizing:border-box;display:flex;align-items:center;gap:6px;width:auto;min-width:100%;min-height:34px;padding:5px 7px;border:none;border-radius:var(--dsw-radius-md);outline:none;background:transparent;color:inherit;text-align:left;cursor:pointer}
.codexModelSelectOption:hover:not(:disabled),.codexModelSelectOption:focus-visible{background:var(--dsw-alias-interactive-bg-hover)}
.codexModelSelectOption:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}
.codexModelSelectOptionCopy{display:flex;flex:1;flex-direction:column;min-width:0}
.codexModelSelectOptionName{overflow:hidden;color:inherit;font-size:13px;font-weight:400;line-height:18px;text-overflow:ellipsis;white-space:nowrap}
.codexModelSelectOptionDescription{overflow:hidden;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:16px;text-overflow:ellipsis;white-space:nowrap}
.codexModelSelectCheck{display:grid;place-items:center;flex:0 0 14px;color:var(--dsw-alias-label-primary)}
.codexModelSelectCheck svg{width:14px;height:14px}
.codexModelSelectStatus,.codexModelSelectEmpty{padding:8px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}
.codexModelSelectError,.codexModelSelectWarning{display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:3px;padding:6px 7px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary);font-size:11px;line-height:16px}
.codexModelSelectWarning{background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-state-warn-label)}
.codexModelSelectRetry{flex:none;padding:0;border:none;background:transparent;color:inherit;font:inherit;font-weight:600;cursor:pointer}
.codexImageTool{display:flex;flex-direction:column;gap:8px;margin:4px 0;color:var(--dsw-alias-label-primary)}
.codexImageToolRow{display:flex;align-items:center;min-height:24px;gap:8px;font-size:13px;line-height:20px}
.codexImageToolIcon{display:block;flex-shrink:0;width:16px;height:16px;color:var(--dsw-alias-label-secondary)}
.codexImageTool[data-state=running] .codexImageToolIcon{animation:codexImageSpin 800ms linear infinite}
.codexImageTool[data-state=error] .codexImageToolIcon{color:var(--dsw-alias-state-error-primary)}
.codexImageToolTitle{font-weight:500}
.codexImageToolState{color:var(--dsw-alias-label-tertiary)}
.codexImageToolError{margin:0 0 0 24px;font-size:12px;line-height:18px;color:var(--dsw-alias-state-error-primary)}
.codexImageToolGallery{margin-left:0}
.codexImageDetails{margin-left:24px;font-size:12px;color:var(--dsw-alias-label-secondary)}.codexImageDetails summary{cursor:pointer}.codexImageDetails p{margin:6px 0;line-height:1.6;overflow-wrap:anywhere}
.codexGeneratedImageFrame{display:flex;align-items:center;justify-content:center;width:min(240px,100%);height:240px;padding:0;overflow:hidden;border:1px solid var(--dsw-alias-border-l2);border-radius:16px;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-tertiary);cursor:pointer}
.codexGeneratedImageFrame img{display:block;width:100%;height:100%;object-fit:cover}
.codexGeneratedImageRetry{min-height:36px;padding:0 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-secondary);cursor:pointer}
@keyframes codexImageSpin{to{transform:rotate(360deg)}}
.codexImageToolGallery{display:flex;align-items:flex-start;flex-direction:column;gap:8px}
@container (max-width:560px){.codexSubscriptionCreditRows{grid-template-columns:1fr}}
@container (max-width:480px){.codexSubscriptionAccountRow,.codexSubscriptionSectionHead{align-items:flex-start;flex-direction:column}
.codexSubscriptionActions{width:100%}
.codexSubscriptionSearchChoices{grid-template-columns:1fr}}
/* Reserve the account buttons' natural width and let email/quota text shrink.
   Match the narrow layout's boundary exactly, including fractional CSS widths. */
@container (width > 480px){.codexSubscriptionAccount>.codexSubscriptionActions{flex-wrap:nowrap;flex:0 0 auto}}
.codexSubscriptionRuntime{font-size:12px;line-height:1.6;margin-top:12px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionRuntime summary{cursor:pointer;width:fit-content;color:var(--dsw-alias-label-primary);border-radius:6px}
.codexSubscriptionRuntime summary:focus-visible{outline:2px solid currentColor;outline-offset:4px}
.codexSubscriptionRuntime p{margin:8px 0}
.codexSubscriptionRuntime .codexSubscriptionPreference{flex-wrap:wrap;align-items:flex-start}
.codexSubscriptionRuntime .codexSubscriptionPreference>span{flex:1;min-width:180px;font-size:12px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionRuntime button{flex-shrink:0;white-space:nowrap}
.codexSubscriptionRuntime code{display:block;overflow-wrap:anywhere;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;user-select:text}
@media(max-width:640px){.codexSubscriptionCard{padding:14px}}
.codexSubscriptionHelp{font-size:12px;line-height:1.65;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionBadge{flex:none;padding:3px 8px;border-radius:6px;background:var(--dsw-alias-bg-module-platform);font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary)}
.codexImageSettings>.codexSubscriptionSectionHead{flex-direction:row;align-items:center}
.codexSubscriptionSettingRows>.codexImagePreference+.codexImagePreference{border-top:1px solid var(--dsw-alias-border-l2)}
.codexSubscriptionDiagnostics .codexSubscriptionSectionHead{align-items:flex-start;flex-direction:column;gap:12px}
.codexSubscriptionDiagnostics .codexSubscriptionSectionTitle{display:flex;flex-direction:column;gap:5px}
.codexSubscriptionRemotePair{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:8px}.codexSubscriptionRemotePair>div:not(.codexSubscriptionRemoteQr){flex:1 1 220px;min-width:0}.codexSubscriptionRemoteQr{width:168px;height:168px;flex:none;border-radius:12px;overflow:hidden;background:#fff}.codexSubscriptionRemoteQr svg{display:block;width:100%;height:100%}.codexSubscriptionRemoteCode{margin:6px 0;font:600 20px/28px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.08em;user-select:all}
.codexSubscriptionStorageMeter{display:flex;flex-direction:column;gap:9px;padding:12px;border-radius:10px;background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionStorageHead{display:flex;align-items:center;justify-content:space-between;gap:8px 16px;flex-wrap:wrap}
.codexSubscriptionStorageTitle{display:flex;align-items:baseline;gap:6px 12px;flex-wrap:wrap;min-width:0}
.codexSubscriptionStorageTitle output{font-size:12px;line-height:18px;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionStorageMeter progress{width:100%;height:4px;border:0;border-radius:4px;overflow:hidden;accent-color:var(--dsw-alias-label-secondary)}
.codexSubscriptionStorageMeter progress::-webkit-progress-bar{background:var(--dsw-alias-border-l2)}
.codexSubscriptionStorageMeter progress::-webkit-progress-value{background:var(--dsw-alias-label-secondary)}
.codexSubscriptionConfirm{padding:12px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;font-size:12px;line-height:1.65}
.codexSubscriptionConfirm p{margin-bottom:12px}
.codexSubscriptionRuntime{padding-top:10px;border-top:1px solid var(--dsw-alias-border-l2);margin-top:2px}
.codexSubscriptionRuntime details{margin-top:8px}.codexSubscriptionRuntime details[open]>summary{margin-bottom:10px}
@container (max-width:480px){.codexSubscriptionPreference,.codexSubscriptionContextHead{flex-wrap:wrap}.codexSubscriptionPreferenceHint{max-width:none}.codexSubscriptionPreference>.codexSubscriptionPreferenceCopy{flex:1 1 220px}.codexSubscriptionQuotaModes{max-width:100%;flex-wrap:wrap}.codexSubscriptionQuotaMode{min-height:30px}.codexSubscriptionActions{flex-wrap:wrap}}
@container (max-width:420px){.codexSettingsTabs{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(max-content,1fr);overflow-x:auto;scrollbar-width:none}.codexSettingsTabs button{padding:7px 10px;white-space:nowrap}}
@media(prefers-reduced-motion:reduce){.codexSubscription *{transition:none!important}}
.codexSubscriptionLogHead{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;margin-top:12px}.codexSubscriptionLogHead h4{margin:0;font-size:13px}.codexSubscriptionLog{max-height:320px;overflow:auto;margin:6px 0 0;padding:8px 10px;border:1px solid var(--border,#0002);border-radius:8px;font:11.5px/1.5 ui-monospace,Consolas,monospace;white-space:pre-wrap;word-break:break-word}.codexSubscriptionLog_error{color:#c0392b}.codexSubscriptionLog_warn{color:#b9770e}.codexSubscriptionLog_info{opacity:.8}
.codexSubscriptionConnectors>.codexSubscriptionQuotaModes{flex:0 0 auto;display:flex;flex-wrap:nowrap;margin-left:auto}
.codexSubscriptionConnectors .codexSubscriptionQuotaMode{min-height:28px;padding:0 10px;white-space:nowrap}
.codexSubscriptionConnectors>.codexSubscriptionModeNote{padding:0;background:none;font-size:12px;line-height:18px}
.codexSubscriptionConnectors>.codexSubscriptionModeNote[data-danger=true]{background:none}
@container (max-width:520px){.codexSubscriptionConnectors>.codexSubscriptionQuotaModes{flex:1 1 100%;margin-left:0;display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}.codexSubscriptionConnectors .codexSubscriptionQuotaMode{padding:0 4px;white-space:normal;text-align:center}}
.codexVoiceChoice{display:flex;align-items:center;gap:8px}
.codexVoiceChoice .codexSubscriptionContextTrigger{min-width:150px;justify-content:space-between}
.codexVoiceChoice .codexSubscriptionContextTrigger:first-child:not(:last-child){min-width:0;justify-content:center}
/* The voice button wears the send button's own classes, so its colours, shape and theme are always the send button's. */
.codexVoiceCall{position:absolute;z-index:2;margin:0}
a.codexVoiceCall{display:flex;align-items:center;justify-content:center;box-sizing:border-box;text-decoration:none}
/* DSH's send button is the light info colour at rest and darkens on hover. The voice button is an action in its own right, so it keeps the stronger colour all the time and only deepens a little on hover. */
.codexVoiceCall:not(:disabled){background:var(--dsw-alias-button-info-hover,#4176e6)!important;filter:none}
.codexVoiceCall:not(:disabled):hover{filter:brightness(.92)}
.codexVoiceCall:disabled{cursor:progress}
.codexVoiceCall[data-state=connecting]{animation:codexVoicePulse 1.1s ease-in-out infinite}
.codexVoiceCallNote{position:absolute;bottom:calc(100% + 8px);z-index:3;width:max-content;max-width:320px;padding:6px 10px;border-radius:8px;background:var(--dsw-alias-surface-elevated,#2a2a2e);color:var(--dsw-alias-label-primary,#fff);font-size:12px;line-height:16px;box-shadow:0 4px 16px rgba(0,0,0,.3);white-space:normal}
.codexVoiceBrowserActions{display:flex;gap:12px;flex-wrap:wrap;margin-top:6px}.codexVoiceBrowserActions a,.codexVoiceBrowserActions button{color:inherit;text-decoration:underline;background:none;border:0;padding:0;cursor:pointer;font:inherit}
@keyframes codexVoicePulse{50%{opacity:.55}}
@media (prefers-reduced-motion:reduce){.codexVoiceCall{animation:none!important}}

@keyframes codexVoiceStageIn{from{opacity:0;margin-top:8px}to{opacity:1;margin-top:0}}
@media (prefers-reduced-motion:reduce){.codexVoiceOrb,.codexVoiceDot,.codexVoiceStage,.codexVoiceLines p{animation:none!important;transition:none!important}}
.codexVoiceStage{position:fixed;z-index:60;display:flex;flex-direction:column;align-items:center;gap:6px;width:min(560px,92vw);pointer-events:none;animation:codexVoiceStageIn .28s cubic-bezier(.33,1,.68,1)}
.codexVoiceStage[data-side=above]{transform:translate(-50%,calc(-100% - 16px))}
.codexVoiceStage[data-side=below]{transform:translate(-50%,22px);flex-direction:column-reverse}
.codexVoiceOrbBox{position:relative;width:120px;height:120px;flex:none;margin:-14px 0}
.codexVoiceOrb{position:absolute;inset:0;transition:opacity .5s ease}
.codexVoiceOrb[data-ready=false]{opacity:0}
.codexVoiceOrb canvas{display:block;width:100%;height:100%}
.codexVoiceDot{position:absolute;left:35px;top:35px;width:50px;height:50px;border-radius:50%;background:var(--dsw-alias-label-primary,#fff);animation:codexVoicePulse 1.1s ease-in-out infinite;transition:opacity .35s ease,transform .5s cubic-bezier(.33,1,.68,1)}
.codexVoiceDot[data-gone=true]{opacity:0;transform:scale(1.8);animation:none}
.codexVoiceLines{display:flex;flex-direction:column;align-items:center;gap:2px;max-width:100%;min-height:0;text-align:center}
.codexVoiceLines p{margin:0;max-width:100%;font-size:13px;line-height:19px;color:var(--dsw-alias-label-primary);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;animation:codexVoiceStageIn .28s cubic-bezier(.33,1,.68,1)}
.codexVoiceLines p[data-role=user]{color:var(--dsw-alias-label-secondary)}
.codexVoiceLines p[data-old]{opacity:.45}
.codexVoiceStatus{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.codexVoiceTools{display:inline-flex;align-items:center;gap:2px}
[data-voice-live]>[data-slot="conversation.input.activity"]{display:none!important}
.codexVoiceTool{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}
.codexVoiceTool:hover{background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-primary)}
.codexVoiceTool[aria-pressed=true]{color:var(--dsw-alias-label-tertiary)}

/* Every fold-out in the settings reads as pressable: a full-width row, a chevron on the right that turns when it opens, a hover state. */
.codexSubscriptionHistory>summary,.codexSubscriptionSearchOptions>summary,.codexSubscriptionRuntime summary,.codexSubscriptionDiagnostics details>summary,.codexImageDetails summary{display:flex;align-items:center;gap:8px;width:auto;box-sizing:border-box;min-height:32px;margin:0 -10px;padding:4px 10px;border-radius:8px;list-style:none;cursor:pointer;user-select:none;font-size:13px;font-weight:500;color:var(--dsw-alias-label-primary);transition:background .12s}
.codexSubscriptionHistory>summary::-webkit-details-marker,.codexSubscriptionSearchOptions>summary::-webkit-details-marker,.codexSubscriptionRuntime summary::-webkit-details-marker,.codexSubscriptionDiagnostics details>summary::-webkit-details-marker,.codexImageDetails summary::-webkit-details-marker{display:none}
.codexSubscriptionHistory>summary::after,.codexSubscriptionSearchOptions>summary::after,.codexSubscriptionRuntime summary::after,.codexSubscriptionDiagnostics details>summary::after,.codexImageDetails summary::after{content:"";flex:none;margin-left:auto;width:7px;height:7px;border:solid var(--dsw-alias-label-tertiary);border-width:0 1.6px 1.6px 0;transform:translateY(-2px) rotate(45deg);transition:transform .15s,border-color .12s}
.codexSubscriptionHistory[open]>summary::after,.codexSubscriptionSearchOptions[open]>summary::after,.codexSubscriptionRuntime details[open]>summary::after,.codexSubscriptionDiagnostics details[open]>summary::after,.codexImageDetails[open]>summary::after{transform:translateY(2px) rotate(-135deg)}
.codexSubscriptionHistory>summary:hover,.codexSubscriptionSearchOptions>summary:hover,.codexSubscriptionRuntime summary:hover,.codexSubscriptionDiagnostics details>summary:hover,.codexImageDetails summary:hover{background:var(--dsw-alias-interactive-bg-hover)}
.codexSubscriptionHistory>summary:hover::after,.codexSubscriptionSearchOptions>summary:hover::after,.codexSubscriptionRuntime summary:hover::after,.codexSubscriptionDiagnostics details>summary:hover::after,.codexImageDetails summary:hover::after{border-color:var(--dsw-alias-label-primary)}
.codexSubscriptionHistory>summary:focus-visible,.codexSubscriptionSearchOptions>summary:focus-visible,.codexSubscriptionRuntime summary:focus-visible,.codexSubscriptionDiagnostics details>summary:focus-visible,.codexImageDetails summary:focus-visible{outline:2px solid var(--dsw-alias-border-l3);outline-offset:0}
.codexSubscriptionSearchOptions>summary>span{float:none;margin-left:auto;font-weight:400}
.codexSubscriptionSearchOptions>summary::after{margin-left:6px}
.codexSubscriptionRuntime summary{font-size:12px}

/* Feature overview: one row per feature, a sentence, a switch and optional options */
.codexFeatureOverview{display:flex;flex-direction:column;gap:0}
.codexFeatureOverview>h3{margin:0 0 4px}
.codexFeatureRow{border-top:1px solid var(--dsw-alias-border-l2)}.codexFeatureOverview>h3+.codexFeatureRow{border-top:0}
.codexFeatureMain{display:flex;align-items:center;gap:12px;padding:10px 0;min-height:52px}
.codexFeatureCopy{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
.codexFeatureTitle{font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary)}
.codexFeatureTitle small{margin-left:6px;font-size:10px;font-weight:500;padding:0 5px;border-radius:5px;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-tertiary)}
.codexFeatureSummary{font-size:12px;line-height:17px;color:var(--dsw-alias-label-secondary)}
.codexFeatureRow[data-blocked=true] .codexFeatureSummary{color:var(--dsw-alias-label-tertiary)}
.codexFeatureStatus{flex:none;font-size:12px;color:var(--dsw-alias-label-secondary)}
.codexFeatureMore{flex:none;display:inline-flex;align-items:center;gap:4px;min-width:68px;justify-content:flex-end;border:0;background:transparent;padding:4px 0 4px 6px;font:inherit;font-size:12px;color:var(--dsw-alias-label-secondary);cursor:pointer}
.codexFeatureMore:hover{color:var(--dsw-alias-label-primary)}.codexFeatureMore[aria-expanded=true] svg{transform:rotate(180deg)}
.codexFeatureMoreSpace{flex:none;min-width:68px}
.codexFeatureOptions{display:flex;flex-direction:column;gap:8px;margin:0 0 10px;padding:8px 12px;border-radius:10px;background:var(--dsw-alias-bg-module-platform)}
.codexFeatureScope{margin-top:6px;padding:6px 12px;border:1px dashed var(--dsw-alias-border-l3);border-radius:10px}
.codexQuotaAlerts[data-disabled=true]>.codexSubscriptionPreference{opacity:.5}
.codexScopeNote{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 12px;border-radius:10px;background:var(--dsw-alias-bg-module-platform);font-size:12px;color:var(--dsw-alias-label-secondary)}
.codexScopeNote[data-others-off=true]{background:color-mix(in srgb,var(--dsw-alias-bg-module-platform) 70%,#f5a30022)}
.codexScopeNote button{border:0;background:transparent;font:inherit;color:var(--dsw-alias-label-primary);text-decoration:underline;cursor:pointer;flex:none}
.codexAdvancedFold{padding:0}.codexAdvancedFold>summary{display:flex;align-items:center;gap:10px;padding:12px 16px;cursor:pointer;list-style:none;font-size:13px;font-weight:600}
.codexAdvancedFold>summary::-webkit-details-marker{display:none}
.codexAdvancedFold>summary>span{font-weight:400;font-size:12px;color:var(--dsw-alias-label-tertiary);margin-left:auto}
.codexAdvancedFold>summary::after{content:"";flex:none;width:7px;height:7px;border:solid var(--dsw-alias-label-tertiary);border-width:0 1.5px 1.5px 0;transform:translateY(-2px) rotate(45deg)}
.codexAdvancedFold[open]>summary::after{transform:translateY(2px) rotate(-135deg)}
.codexAdvancedBody{display:flex;flex-direction:column;gap:10px;padding:2px 16px 14px}
.codexAdvancedInline{margin-top:6px;border:0;border-top:1px solid var(--dsw-alias-border-l2);border-radius:0;background:transparent}.codexAdvancedInline>summary{padding:10px 0}.codexAdvancedInline>.codexSubscriptionPreference{margin-bottom:8px}
/* Settings pages in DSH's own look. One set of sizes for every page:
   frame 1px / radius 12 / side padding 16 / gap between frames 8; row min-height 52, padding 8 0; title 13/20, hint 12/18;
   every in-row control 32px high, radius 10, 13px; a hairline only under a row, never above one. */
.codexFlat{display:flex;flex-direction:column;gap:0}.codexFlat[hidden]{display:none}
.codexFlat .codexSubscriptionAdvancedPreferences{gap:0}
.codexFlat .codexSubscriptionCard,.codexFlat .codexSubscriptionPreferencesCard,.codexFlat .codexImageSettings{border:1px solid var(--dsw-alias-border-l2);background:transparent;box-shadow:none;border-radius:12px;padding:2px 16px;margin:0 0 8px}
.codexFlat .codexSubscriptionPreferencesCard,.codexFlat .codexFeatureOverview{gap:0}
.codexFlat h3,.codexFlat .codexSubscriptionSectionHead h3{margin:10px 0 2px;font-size:14px;font-weight:500;line-height:20px;color:var(--dsw-alias-label-primary)}
.codexFlat .codexSubscriptionPreference,.codexFlat .codexFeatureRow>.codexFeatureMain{box-sizing:border-box;padding:8px 0;min-height:52px;gap:6px 16px;align-items:center}
.codexFlat .codexSubscriptionPreference,.codexFlat .codexFeatureRow{border-bottom:1px solid var(--dsw-alias-border-l2)}
.codexFlat .codexFeatureRow,.codexFlat .codexSubscriptionPreference{border-top:0}
.codexFlat section>.codexSubscriptionPreference:last-child,.codexFlat .codexSubscriptionCard>.codexSubscriptionPreference:last-child,.codexFlat section>.codexFeatureRow:last-of-type,.codexFlat section>div:last-child>.codexSubscriptionPreference:last-child,.codexFlat .codexAdvancedBody>.codexSubscriptionPreference:last-child{border-bottom:0}
.codexFlat .codexSubscriptionPreferenceLabel,.codexFlat .codexFeatureTitle{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:400;line-height:20px;min-height:20px;color:var(--dsw-alias-label-primary)}
.codexFlat .codexSubscriptionPreferenceLabel small,.codexFlat .codexFeatureTitle small{line-height:16px;height:16px;display:inline-flex;align-items:center}
.codexFlat .codexSubscriptionPreferenceHint,.codexFlat .codexFeatureSummary{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.codexFlat .codexSubscriptionPreferenceCopy{gap:0}
.codexFlat .codexSubscriptionDivider{display:none}
.codexFlat .codexSubscriptionQuotaModes{background:var(--dsw-alias-bg-module-platform);border-radius:10px;padding:2px;gap:2px;min-height:32px;box-sizing:border-box}
.codexFlat .codexSubscriptionQuotaMode{min-height:28px;border-radius:8px;padding:0 10px;font-size:13px;white-space:nowrap}
.codexFlat .codexSubscriptionContextTrigger{background:var(--dsw-alias-bg-module-platform);border-radius:10px;padding:0 12px;min-height:32px;height:32px;color:var(--dsw-alias-label-primary);font-size:13px}
.codexFlat .codexSubscriptionPreference button[class*=_md_],.codexFlat .codexSubscriptionActions button[class*=_md_]{border-radius:10px;padding:0 12px;min-height:32px;height:32px;font-size:13px}
.codexFlat .codexSubscriptionActions .codexSubscriptionContextTrigger{min-height:32px}
.codexFlat .codexFeatureMore{box-sizing:border-box;width:28px;min-width:28px;height:28px;padding:0;gap:0;justify-content:center;background:transparent;border-radius:8px;color:var(--dsw-alias-label-secondary)}.codexFlat .codexFeatureMore:hover{background:var(--dsw-alias-bg-module-platform)}
.codexFlat .codexFeatureMoreSpace{display:block;width:28px;min-width:28px;height:28px}
.codexFlat .codexFeatureStatus{font-size:12px;color:var(--dsw-alias-label-secondary)}
.codexFlat .codexFeatureOverview>h3{margin-top:10px}
.codexFlat .codexAdvancedFold{margin-top:0;padding:0 16px}
.codexFlat .codexAdvancedFold>summary{padding:10px 0;font-weight:500;font-size:13px;line-height:20px}
.codexFlat .codexAdvancedBody{padding:0 0 4px}
.codexFlat .codexAdvancedInline{margin-top:0;border-top:0;padding:0}.codexFlat .codexAdvancedInline>summary{padding:10px 0;font-weight:400}
.codexFlat .codexSubscriptionSearch>.codexSubscriptionSearchOptions,.codexFlat .codexSubscriptionRuntime,.codexFlat .codexSubscriptionHistory{border-top:0;margin-top:0;padding-top:0}
.codexFlat .codexSubscriptionSearchOptions{margin:0;padding:0}.codexFlat .codexSubscriptionSearchOptions>summary{padding:10px 0;margin:0}
.codexFlat .codexSubscriptionCard:has(>.codexSubscriptionAccounts),.codexFlat .codexSubscriptionCard:has(>.codexSubscriptionActions),.codexFlat .codexSubscriptionStorage{padding-block:10px}
.codexFlat .codexSubscriptionCreditSection{display:block}.codexFlat .codexSubscriptionCreditSection[open]>summary{border-bottom:1px solid var(--dsw-alias-border-l2);margin-bottom:8px}
.codexFlat .codexSubscriptionStorage{gap:6px}
.codexFlat .codexSubscriptionStorageTitle h3{margin:0}
.codexFlat .codexSubscriptionStorageMeter{background:transparent;padding:0}
.codexFlat .codexSubscriptionResetBox{border:0;border-radius:0;padding:0}
.codexFlat :is(button,summary,a):focus-visible,.codexFlat label:has(:focus-visible){outline:2px solid var(--dsw-alias-border-inverted);outline-offset:2px;box-shadow:none}
.codexSettingsTabs{position:sticky;top:0;z-index:2;background:var(--dsw-alias-bg-layer-1);border-radius:0;padding:6px 0 0;margin-top:-6px;gap:18px;display:flex;overflow-x:auto;scrollbar-width:none;grid-template-columns:none;border-bottom:1px solid var(--dsw-alias-border-l2);margin-bottom:8px}
.codexSettingsTabs button{flex:none;min-height:34px;padding:0 2px;border-radius:0;border-bottom:2px solid transparent;margin-bottom:-1px;font-size:14px;color:var(--dsw-alias-label-tertiary);white-space:nowrap}
.codexSettingsTabs button[aria-selected=true]{background:transparent;box-shadow:none;color:var(--dsw-alias-label-primary);border-bottom-color:var(--dsw-alias-label-primary)}
.codexSubscriptionNotices{display:flex;flex-direction:column;gap:6px;margin:0 0 8px}
.codexSubscriptionNotices p{margin:0;padding:8px 12px;border-radius:10px;background:var(--dsw-alias-bg-module-platform)}
.codexSubscriptionNotice{font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}
.codexSubscriptionNotices button{margin-left:6px;border:0;background:transparent;padding:0;font:inherit;color:var(--dsw-alias-label-primary);text-decoration:underline;cursor:pointer}
.codexSubscriptionPace{margin:0;font-size:12px;line-height:18px;color:var(--dsw-alias-state-warning-primary,#b45309)}
.codexSubscriptionForecast{margin:0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.codexSubscriptionLimit[data-pace=true] progress{accent-color:var(--dsw-alias-state-warning-primary,#f5a300)}
.codexSubscriptionLimit[data-pace=true] progress::-webkit-progress-value{background:var(--dsw-alias-state-warning-primary,#f5a300)}
.codexSubscriptionLimit[data-pace=true] progress::-moz-progress-bar{background:var(--dsw-alias-state-warning-primary,#f5a300)}
.codexDiagResult{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-top:1px solid var(--dsw-alias-border-l2)}
.codexDiagBadge{font-size:13px;line-height:20px;font-weight:500;color:var(--dsw-alias-label-primary)}
.codexDiagResult[data-state=ok] .codexDiagBadge::before,.codexDiagResult[data-state=attention] .codexDiagBadge::before{content:'';display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:8px;background:var(--dsw-alias-state-success-primary,#1a9d58)}
.codexDiagResult[data-state=attention] .codexDiagBadge::before{background:var(--dsw-alias-state-warning-primary,#f5a300)}
.codexDiagTime{font-size:12px;color:var(--dsw-alias-label-tertiary)}
.codexDiagFindings{list-style:none;margin:0;padding:0 0 6px;display:flex;flex-direction:column;gap:8px}
.codexDiagFindings>li{display:flex;flex-direction:column;gap:2px;font-size:13px;line-height:20px}
.codexDiagNext{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.codexDiagTable{width:100%;font-size:12px;text-align:left;border-spacing:0 6px}
.codexFlat .codexSubscriptionDiagnostics details.codexAdvancedFold{margin:0;padding:0;border-top:1px solid var(--dsw-alias-border-l2)}.codexFlat .codexSubscriptionDiagnostics details>summary{margin:0}
.codexDiagFindings>li{padding:0;margin:0}.codexDiagFindings{padding-left:0!important}
/* The model search row stays put while the list scrolls under it: a hairline marks the edge so a partly scrolled group title reads as scrolled, not broken. */
.codexModelSelectSearchRow{margin:2px 0 0;border-bottom:1px solid var(--dsw-alias-border-l2)}
.codexModelSelectGroups{scroll-padding-block:30px;padding-top:2px}
.codexModelsHead{display:flex;align-items:center;gap:6px 12px;flex-wrap:wrap;padding:8px 0 2px}.codexModelsHead h3{margin:0!important;flex:0 0 auto}
.codexModelsHead>span{flex:1 1 auto;min-width:0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.codexModelsHead>button{flex:0 0 auto;margin-left:auto;height:28px;min-height:28px;padding:0 10px;font-size:12px}
.codexFlat details.codexAdvancedFold.codexSubscriptionCard{padding-block:0}
.codexFlat .codexAdvancedFold>summary{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px;padding:0;box-sizing:border-box}
.codexFlat .codexAdvancedInline>summary{min-height:44px}
.codexFlat details.codexAdvancedFold{display:block}
.codexModelSelectGroups [class*=_heading_]{background:var(--dsw-alias-bg-layer-2,var(--dsw-alias-bg-module-platform))}
.codexFlat :is(button,summary,a):focus-visible,.codexFlat label:has(:focus-visible){outline-color:var(--dsw-alias-brand-primary,#3964fe)}
.codexSubscriptionPace{color:var(--dsw-alias-state-warn-label,#b45309)}
.codexSubscriptionAccountQuota{color:var(--dsw-alias-label-secondary)}
.codexFeatureLoadStatus{display:inline-flex;align-items:center;color:var(--dsw-alias-label-secondary);flex:none}
.codexFeatureLoadStatus svg{width:16px;height:16px}
.codexFeatureRetryIcon{color:var(--dsw-alias-label-secondary)}
.codexFeatureLoadingIcon{animation:codexFeatureLoading 1s linear infinite}
.codexFeatureLoadNotice{position:fixed;z-index:1000;bottom:32px;left:50%;transform:translateX(-50%);padding:4px 8px;border:1px solid var(--dsw-alias-line-base,rgba(128,128,128,.2));border-radius:12px;background:var(--dsw-alias-bg-layer-1,#fff);box-shadow:0 4px 16px rgba(0,0,0,.08)}
@keyframes codexFeatureLoading{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.codexFeatureLoadingIcon{animation:none}}
`;
		//#endregion
		//#region src/rpc-contract.js
		const CHANNEL = "/codex-subscription";
		const RPC_ENDPOINTS = Object.freeze([
			"status",
			"login/start",
			"login/status",
			"login/submit",
			"login/cancel",
			"logout",
			"account/select",
			"account/remove",
			"usage/accounts",
			"preferences/status",
			"preferences/models",
			"preferences/update",
			"remote/status",
			"remote/pair",
			"remote/clients",
			"remote/revoke"
		]);
		function createSubscriptionRpcClient(transport) {
			return Object.freeze({ async call(channel, endpoint, payload, signal) {
				if (channel !== "/codex-subscription" || !RPC_ENDPOINTS.includes(endpoint)) throw new Error("Invalid subscription RPC target");
				try {
					return await transport.call("/api", `codex-subscription/${endpoint}`, payload, signal);
				} catch (error) {
					try {
						console.error(`[codex-subscription] ${endpoint} failed`);
					} catch {}
					throw error;
				}
			} });
		}
		function unwrap(response) {
			if (!response?.ok) throw new Error(response?.error?.message ?? "Codex RPC failed");
			return response.value;
		}
		//#endregion
		//#region src/image-models.js
		const DEFAULT_IMAGE_MODEL = "gpt-image-2";
		const IMAGE_MODELS = Object.freeze({
			"gpt-image-2": Object.freeze([
				"auto",
				"low",
				"medium",
				"high"
			]),
			"gpt-image-2.5-flare": Object.freeze([
				"auto",
				"low",
				"medium",
				"high",
				"xhigh",
				"max"
			]),
			"gpt-image-2.5-sunburst": Object.freeze([
				"auto",
				"low",
				"medium",
				"high",
				"xhigh",
				"max"
			])
		});
		//#endregion
		//#region src/image-features.js
		const IMAGE_FEATURE_DEFAULTS = Object.freeze({
			imageGeneration: true,
			imageShortcut: true,
			imageEditing: true,
			imageViewer: true,
			imageAnnotations: true,
			imageSketch: false,
			imageSketchAgent: false
		});
		function readImageFeatures(value = {}) {
			return Object.fromEntries(Object.entries(IMAGE_FEATURE_DEFAULTS).map(([key, fallback]) => [key, typeof value?.[key] === "boolean" ? value[key] : fallback]));
		}
		function readImageDefaults(value = {}) {
			const imageModel = Object.hasOwn(IMAGE_MODELS, value?.imageModel) ? value.imageModel : DEFAULT_IMAGE_MODEL;
			return {
				imageModel,
				imageQuality: IMAGE_MODELS[imageModel].includes(value?.imageQuality) ? value.imageQuality : "auto"
			};
		}
		//#endregion
		//#region src/capability-settings.js
		const CUSTOM_CONTEXT_OVERRIDES_FIELD = "customContextModels";
		const SEARCH_MODE_FIELD = "searchMode";
		const SEARCH_DOMAINS_FIELD = "searchDomains";
		const QUOTA_ALERTS_FIELD = "quotaAlerts";
		const SEARCH_MODES = [
			"live",
			"cached",
			"disabled"
		];
		const QUOTA_ALERT_MODES = [
			"off",
			"important",
			"early",
			"custom"
		];
		const QUOTA_THRESHOLD_FIELDS = ["quotaShortThreshold", "quotaLongThreshold"];
		const validQuotaThreshold = (value) => Number.isInteger(value) && value >= 1 && value <= 100;
		const validModelKey = (key) => typeof key === "string" && /^[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,95}$/u.test(key) && ![
			"constructor",
			"prototype",
			"__proto__"
		].includes(key);
		function normalizeContextOverrides(value) {
			if (!value || typeof value !== "object" || Array.isArray(value)) return {};
			return Object.fromEntries(Object.entries(value).filter(([key, size]) => validModelKey(key) && Number.isSafeInteger(size) && size > 0 && size <= 16e6).slice(0, 64));
		}
		function normalizeSearchDomains(value) {
			if (!Array.isArray(value) || value.length > 20) throw new Error("Invalid search domains");
			return [...new Set(value.map((item) => {
				if (typeof item !== "string" || item.length > 253 || !/^[\p{L}\p{N}.-]+$/u.test(item)) throw new Error("Invalid search domain");
				const hostname = new URL(`https://${item}`).hostname.toLowerCase();
				if (!hostname.includes(".") || hostname.split(".").some((part) => !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/u.test(part))) throw new Error("Invalid search domain");
				return hostname;
			}))];
		}
		function readCapabilitySettings(value = {}) {
			return {
				...Object.fromEntries(QUOTA_THRESHOLD_FIELDS.map((key) => [key, validQuotaThreshold(value[key]) ? value[key] : 20])),
				...readImageFeatures(value),
				...readImageDefaults(value),
				[CUSTOM_CONTEXT_OVERRIDES_FIELD]: normalizeContextOverrides(value[CUSTOM_CONTEXT_OVERRIDES_FIELD]),
				[SEARCH_MODE_FIELD]: SEARCH_MODES.includes(value["searchMode"]) ? value[SEARCH_MODE_FIELD] : "live",
				[SEARCH_DOMAINS_FIELD]: normalizeSearchDomains(value["searchDomains"] ?? []),
				[QUOTA_ALERTS_FIELD]: QUOTA_ALERT_MODES.includes(value["quotaAlerts"]) ? value[QUOTA_ALERTS_FIELD] : "important"
			};
		}
		//#endregion
		//#region src/settings-contract.js
		const DISABLED_MODELS_FIELD = "disabledModels";
		const AUTO_QUOTA_RETRY_FIELD = "autoQuotaRetry";
		const QUICK_QUOTA_MODE_FIELD = "quickQuotaMode";
		const LEGACY_QUICK_QUOTA_FIELD = "quickQuotaVisible";
		const QUICK_QUOTA_MODE_PERCENT = "percent";
		const QUICK_QUOTA_MODE_FORECAST = "forecast";
		const SEARCH_PROVIDER_FIELD = "searchProvider";
		const SEARCH_PROVIDER_AUTO = "auto";
		const SEARCH_PROVIDER_CODEX = "codex";
		const DEFAULT_SEARCH_PROVIDER = SEARCH_PROVIDER_AUTO;
		const FETCH_PROVIDER_FIELD = "fetchProvider";
		const FETCH_PROVIDER_CODEX = "codex";
		const normalizeFetchProvider = (value) => value === "codex" ? FETCH_PROVIDER_CODEX : "dsh";
		const SPEED_MODE_FIELD = "speedMode";
		const SPEED_MODE_STANDARD = "standard";
		const SPEED_MODE_FAST = "fast";
		const SPEED_MODE_ULTRAFAST = "ultrafast";
		const DEFAULT_SPEED_MODE = SPEED_MODE_STANDARD;
		const OUTPUT_VERBOSITY_FIELD = "outputVerbosity";
		const OUTPUT_VERBOSITY_DEFAULT = "default";
		const OUTPUT_VERBOSITY_MEDIUM = "medium";
		const OUTPUT_VERBOSITY_HIGH = "high";
		const DEFAULT_OUTPUT_VERBOSITY = OUTPUT_VERBOSITY_DEFAULT;
		const VOICE_CALL_FIELD = "voiceCall";
		const VOICE_VOICE_FIELD = "voiceVoice";
		const VOICE_VOICES = Object.freeze([
			"cove",
			"juniper",
			"maple",
			"spruce",
			"ember",
			"vale",
			"breeze",
			"arbor",
			"sol",
			"aube",
			"bubbie",
			"haetsal",
			"hanul",
			"himari",
			"leher",
			"miko",
			"neer",
			"porto",
			"rindo",
			"rio",
			"rivage",
			"selva",
			"sonna",
			"tinta",
			"viola"
		]);
		const VOICE_LANGUAGE_FIELD = "voiceLanguage";
		const VOICE_LANGUAGES = Object.freeze([
			"auto",
			"zh",
			"en",
			"ja",
			"ko",
			"es",
			"fr",
			"de",
			"pt",
			"ru"
		]);
		const normalizeVoiceCall = (value) => value === "on" ? "on" : "off";
		const normalizeVoiceVoice = (value) => VOICE_VOICES.includes(value) ? value : "cove";
		const normalizeVoiceLanguage = (value) => VOICE_LANGUAGES.includes(value) ? value : "auto";
		const DEFAULT_REASONING_EFFORT_FIELD = "defaultReasoningEffort";
		const DEFAULT_REASONING_EFFORTS = Object.freeze([
			"auto",
			"off",
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh",
			"max",
			"ultra"
		]);
		const DEFAULT_REASONING_EFFORT = "auto";
		const normalizeDefaultReasoningEffort = (value) => DEFAULT_REASONING_EFFORTS.includes(value) ? value : DEFAULT_REASONING_EFFORT;
		const REASONING_SUMMARY_FIELD = "reasoningSummary";
		const REASONING_SUMMARIES = Object.freeze([
			"auto",
			"concise",
			"detailed",
			"none"
		]);
		const DEFAULT_REASONING_SUMMARY = "auto";
		const RETRY_POLICY_FIELD = "retryPolicy";
		const RETRY_POLICIES = Object.freeze([
			"default",
			"off",
			"10",
			"20",
			"unlimited"
		]);
		const DEFAULT_RETRY_POLICY = "default";
		const CONNECTORS_FIELD = "connectors";
		const CONNECTOR_MODES = Object.freeze([
			"off",
			"read",
			"ask",
			"write"
		]);
		const INPUT_IMAGE_DETAIL_FIELD = "inputImageDetail";
		const INPUT_IMAGE_DETAILS = Object.freeze([
			"low",
			"high",
			"original",
			"auto"
		]);
		const DEFAULT_INPUT_IMAGE_DETAIL = "auto";
		const STREAM_IDLE_TIMEOUT_MINUTES_FIELD = "streamIdleTimeoutMinutes";
		const STREAM_IDLE_TIMEOUT_MINUTES = Object.freeze([
			2,
			5,
			10,
			20,
			30
		]);
		const CONTEXT_MODE_FIELD = "contextMode";
		const CONTEXT_MODE_STANDARD = "standard";
		const CONTEXT_MODE_EXTENDED = "extended";
		const CONTEXT_MODE_CUSTOM = "custom";
		const DEFAULT_CONTEXT_MODE = CONTEXT_MODE_STANDARD;
		const CUSTOM_CONTEXT_WINDOW_FIELD = "customContextWindow";
		const DEFAULT_CUSTOM_CONTEXT_WINDOW = 272e3;
		const MIN_CUSTOM_CONTEXT_WINDOW = 128e3;
		const MAX_CUSTOM_CONTEXT_WINDOW = 1e6;
		const CUSTOM_CONTEXT_MODEL_FIELDS = Object.freeze({
			"gpt-5.4": "customContextGpt54",
			"gpt-5.4-mini": "customContextGpt54Mini",
			"gpt-5.5": "customContextGpt55",
			"gpt-5.6": "customContextGpt56",
			"gpt-6-astra": "customContextGpt6Astra"
		});
		const CUSTOM_CONTEXT_MODEL_CAPS = Object.freeze({
			"gpt-5.4": 1e6,
			"gpt-5.4-mini": 4e5,
			"gpt-5.5": 272e3,
			"gpt-5.6": 872e3,
			"gpt-6-astra": 872e3
		});
		const CUSTOM_CONTEXT_MODEL_DEFAULTS = Object.freeze({
			"gpt-5.4": 272e3,
			"gpt-5.4-mini": 272e3,
			"gpt-5.5": 272e3,
			"gpt-5.6": 272e3,
			"gpt-6-astra": 272e3
		});
		const normalizeAutoQuotaRetry = (value) => typeof value === "boolean" ? value : false;
		const normalizeDisabledModels = (value) => Array.isArray(value) ? [...new Set(value.filter((id) => typeof id === "string" && /^[a-z][a-z0-9._-]{0,79}$/u.test(id)))].slice(0, 100) : [];
		const normalizeSearchProvider = (value) => [
			"auto",
			"dsh",
			"codex"
		].includes(value) ? value : DEFAULT_SEARCH_PROVIDER;
		const normalizeOutputVerbosity = (value) => [
			"default",
			"low",
			"medium",
			"high"
		].includes(value) ? value : DEFAULT_OUTPUT_VERBOSITY;
		const normalizeReasoningSummary = (value) => REASONING_SUMMARIES.includes(value) ? value : DEFAULT_REASONING_SUMMARY;
		const normalizeRetryPolicy = (value) => RETRY_POLICIES.includes(value) ? value : DEFAULT_RETRY_POLICY;
		const normalizeConnectorMode = (value) => CONNECTOR_MODES.includes(value) ? value : "off";
		const normalizeInputImageDetail = (value) => INPUT_IMAGE_DETAILS.includes(value) ? value : DEFAULT_INPUT_IMAGE_DETAIL;
		const normalizeStreamIdleTimeoutMinutes = (value) => STREAM_IDLE_TIMEOUT_MINUTES.includes(value) ? value : 10;
		const normalizeSpeedMode = (value) => [
			"standard",
			"fast",
			"ultrafast"
		].includes(value) ? value : DEFAULT_SPEED_MODE;
		const normalizeContextMode = (value) => [
			"standard",
			"extended",
			"custom"
		].includes(value) ? value : DEFAULT_CONTEXT_MODE;
		const normalizeCustomContextWindow = (value, maximum = MAX_CUSTOM_CONTEXT_WINDOW) => {
			if (!Number.isInteger(value)) return DEFAULT_CUSTOM_CONTEXT_WINDOW;
			return Math.min(Math.max(value, MIN_CUSTOM_CONTEXT_WINDOW), maximum);
		};
		function clampModelContext(value, maximum, fallback = DEFAULT_CUSTOM_CONTEXT_WINDOW) {
			return Math.max(Math.min(MIN_CUSTOM_CONTEXT_WINDOW, maximum), Math.min(Number.isSafeInteger(value) ? value : fallback, maximum));
		}
		const normalizeQuickQuotaMode = (value, legacyVisible = false) => [
			"off",
			"percent",
			"bar",
			"forecast"
		].includes(value) ? value : legacyVisible === true ? QUICK_QUOTA_MODE_PERCENT : "off";
		Object.freeze({
			compactionMode: {
				choices: ["dsh", "cloud"],
				default: "dsh",
				error: "Invalid compaction mode"
			},
			reasoningCache: {
				choices: [
					"off",
					"on",
					"sol"
				],
				default: "on",
				error: "Invalid reasoning cache preference"
			},
			[DEFAULT_REASONING_EFFORT_FIELD]: {
				choices: DEFAULT_REASONING_EFFORTS,
				default: DEFAULT_REASONING_EFFORT,
				error: "Invalid default reasoning effort"
			},
			composerPredictions: {
				choices: ["off", "on"],
				default: "off",
				error: "Invalid input prediction setting"
			},
			connectionMode: {
				choices: ["sse", "websocket"],
				default: "sse",
				error: "Invalid connection mode"
			},
			reviewModel: {
				choices: ["session", "official"],
				default: "session",
				error: "Invalid review model"
			},
			remoteControl: {
				choices: ["off", "on"],
				default: "off",
				error: "Invalid Remote Control setting"
			},
			otherModels: {
				choices: ["on", "off"],
				default: "on",
				error: "Invalid other-models setting"
			},
			subagentBackend: {
				choices: ["dsh", "codex"],
				default: "dsh",
				error: "Invalid subagent backend"
			},
			[QUICK_QUOTA_MODE_FIELD]: {
				choices: [
					"off",
					QUICK_QUOTA_MODE_PERCENT,
					"bar",
					QUICK_QUOTA_MODE_FORECAST
				],
				error: "Invalid quick quota preference"
			},
			[SEARCH_PROVIDER_FIELD]: {
				choices: [
					SEARCH_PROVIDER_AUTO,
					"dsh",
					SEARCH_PROVIDER_CODEX
				],
				default: DEFAULT_SEARCH_PROVIDER,
				error: "Invalid search provider preference"
			},
			[FETCH_PROVIDER_FIELD]: {
				choices: ["dsh", FETCH_PROVIDER_CODEX],
				default: "dsh",
				error: "Invalid fetch provider preference"
			},
			[SPEED_MODE_FIELD]: {
				choices: [
					SPEED_MODE_STANDARD,
					SPEED_MODE_FAST,
					SPEED_MODE_ULTRAFAST
				],
				default: DEFAULT_SPEED_MODE,
				error: "Invalid speed mode preference"
			},
			[OUTPUT_VERBOSITY_FIELD]: {
				choices: [
					OUTPUT_VERBOSITY_DEFAULT,
					"low",
					OUTPUT_VERBOSITY_MEDIUM,
					OUTPUT_VERBOSITY_HIGH
				],
				default: DEFAULT_OUTPUT_VERBOSITY,
				error: "Invalid output verbosity preference"
			},
			[REASONING_SUMMARY_FIELD]: {
				choices: REASONING_SUMMARIES,
				default: DEFAULT_REASONING_SUMMARY,
				error: "Invalid reasoning summary preference"
			},
			[RETRY_POLICY_FIELD]: {
				choices: RETRY_POLICIES,
				default: DEFAULT_RETRY_POLICY,
				error: "Invalid retry policy preference"
			},
			[CONNECTORS_FIELD]: {
				choices: CONNECTOR_MODES,
				default: "off",
				error: "Invalid connectors preference"
			},
			[INPUT_IMAGE_DETAIL_FIELD]: {
				choices: INPUT_IMAGE_DETAILS,
				default: DEFAULT_INPUT_IMAGE_DETAIL,
				error: "Invalid input image detail preference"
			},
			[STREAM_IDLE_TIMEOUT_MINUTES_FIELD]: {
				choices: STREAM_IDLE_TIMEOUT_MINUTES,
				default: 10,
				error: "Invalid stream idle timeout preference"
			},
			[VOICE_CALL_FIELD]: {
				choices: ["off", "on"],
				default: "off",
				error: "Invalid voice call setting"
			},
			[VOICE_VOICE_FIELD]: {
				choices: VOICE_VOICES,
				default: "cove",
				error: "Invalid voice preference"
			},
			[VOICE_LANGUAGE_FIELD]: {
				choices: VOICE_LANGUAGES,
				default: "auto",
				error: "Invalid voice language preference"
			},
			[CONTEXT_MODE_FIELD]: {
				choices: [
					CONTEXT_MODE_STANDARD,
					CONTEXT_MODE_EXTENDED,
					CONTEXT_MODE_CUSTOM
				],
				default: DEFAULT_CONTEXT_MODE,
				error: "Invalid context mode preference"
			}
		});
		const normalizeReasoningCache = (value) => value === void 0 || value === "on" || value === "sol" ? "on" : "off";
		//#endregion
		//#region src/preference-controller.js
		function createPreferenceController(rpc) {
			let updating = false;
			let error = false;
			let fallback;
			let pendingPatch;
			let failedPatch;
			let generation = 0;
			let contextModels = [];
			let availableModels = [];
			let verbosityModels = [];
			let fastModels;
			let ultrafastModels = [];
			let ultraModels = [];
			let catalogStatus;
			let modelsLoading = false;
			let modelError = false;
			let modelRefreshGeneration = 0;
			let modelRefreshStarted = false;
			let disposed = false;
			let subagentBackendAvailable = false;
			let subagentRuntimeInstalled = false;
			let fetchRoutingAvailable = false;
			let restartRequired = false;
			const sameModels = (left, right) => left.length === right.length && left.every((model, index) => JSON.stringify(model) === JSON.stringify(right[index]));
			const read = () => {
				const current = fallback ?? { status: "unavailable" };
				const value = pendingPatch === void 0 ? current.value : {
					...current.value,
					...pendingPatch
				};
				const capabilities = readCapabilitySettings(value);
				return Object.freeze({
					status: current.status,
					...capabilities,
					autoQuotaRetry: normalizeAutoQuotaRetry(value?.[AUTO_QUOTA_RETRY_FIELD]),
					connectionMode: value?.connectionMode === "websocket" ? "websocket" : "sse",
					reviewModel: value?.reviewModel === "official" ? "official" : "session",
					remoteControl: value?.remoteControl === "on" ? "on" : "off",
					composerPredictions: value?.composerPredictions === "on" ? "on" : "off",
					otherModels: value?.otherModels === "off" ? "off" : "on",
					compactionMode: value?.compactionMode === "cloud" ? "cloud" : "dsh",
					reasoningCache: normalizeReasoningCache(value?.reasoningCache),
					defaultReasoningEffort: normalizeDefaultReasoningEffort(value?.[DEFAULT_REASONING_EFFORT_FIELD]),
					subagentBackend: value?.subagentBackend === "codex" ? "codex" : "dsh",
					subagentBackendAvailable,
					subagentRuntimeInstalled,
					quickQuotaMode: normalizeQuickQuotaMode(value?.[QUICK_QUOTA_MODE_FIELD], value?.[LEGACY_QUICK_QUOTA_FIELD]),
					searchProvider: normalizeSearchProvider(value?.[SEARCH_PROVIDER_FIELD]),
					fetchProvider: normalizeFetchProvider(value?.[FETCH_PROVIDER_FIELD]),
					fetchRoutingAvailable,
					speedMode: normalizeSpeedMode(value?.[SPEED_MODE_FIELD]),
					outputVerbosity: normalizeOutputVerbosity(value?.[OUTPUT_VERBOSITY_FIELD]),
					inputImageDetail: normalizeInputImageDetail(value?.[INPUT_IMAGE_DETAIL_FIELD]),
					reasoningSummary: normalizeReasoningSummary(value?.[REASONING_SUMMARY_FIELD]),
					voiceCall: normalizeVoiceCall(value?.[VOICE_CALL_FIELD]),
					voiceVoice: normalizeVoiceVoice(value?.[VOICE_VOICE_FIELD]),
					voiceLanguage: normalizeVoiceLanguage(value?.[VOICE_LANGUAGE_FIELD]),
					retryPolicy: normalizeRetryPolicy(value?.[RETRY_POLICY_FIELD]),
					connectors: normalizeConnectorMode(value?.[CONNECTORS_FIELD]),
					streamIdleTimeoutMinutes: normalizeStreamIdleTimeoutMinutes(value?.[STREAM_IDLE_TIMEOUT_MINUTES_FIELD]),
					contextMode: normalizeContextMode(value?.[CONTEXT_MODE_FIELD]),
					customContextWindow: normalizeCustomContextWindow(value?.[CUSTOM_CONTEXT_WINDOW_FIELD]),
					customContextWindows: {
						...Object.fromEntries(Object.entries(CUSTOM_CONTEXT_MODEL_FIELDS).map(([modelKey, field]) => [modelKey, normalizeCustomContextWindow(value?.[field] ?? CUSTOM_CONTEXT_MODEL_DEFAULTS[modelKey], CUSTOM_CONTEXT_MODEL_CAPS[modelKey])])),
						...Object.fromEntries(contextModels.map((model) => [model.key, clampModelContext(capabilities["customContextModels"][model.key] ?? value?.[CUSTOM_CONTEXT_MODEL_FIELDS[model.key]], model.maximum, model.default ?? CUSTOM_CONTEXT_MODEL_DEFAULTS[model.key])]))
					},
					contextModels,
					availableModels,
					disabledModels: normalizeDisabledModels(value?.[DISABLED_MODELS_FIELD]),
					verbosityModels,
					fastModels,
					ultrafastModels,
					ultraModels,
					catalogStatus,
					modelsLoading,
					modelError,
					writable: !updating && current.status === "ready" && current.writable === true,
					hostReadOnly: current.status === "ready" && current.writable === false,
					saving: updating,
					restartRequired,
					error
				});
			};
			let snapshot = read();
			const listeners = /* @__PURE__ */ new Set();
			const publish = () => {
				if (disposed) return;
				snapshot = read();
				for (const listener of [...listeners]) {
					if (disposed) break;
					listener();
				}
			};
			const acceptFallback = (value) => {
				if (value?.liveSynced === false) restartRequired = true;
				subagentBackendAvailable = value?.subagentBackendAvailable === true;
				subagentRuntimeInstalled = value?.subagentRuntimeInstalled === true;
				fetchRoutingAvailable = value?.fetchRoutingAvailable === true;
				if (!modelRefreshStarted) {
					contextModels = Array.isArray(value?.contextModels) ? value.contextModels : [];
					availableModels = Array.isArray(value?.availableModels) ? value.availableModels : [];
					verbosityModels = Array.isArray(value?.verbosityModels) ? value.verbosityModels : [];
					fastModels = Array.isArray(value?.fastModels) ? value.fastModels : void 0;
					ultrafastModels = Array.isArray(value?.ultrafastModels) ? value.ultrafastModels : [];
					ultraModels = Array.isArray(value?.ultraModels) ? value.ultraModels : [];
					catalogStatus = value?.catalogStatus;
				}
				fallback = {
					status: "ready",
					value: {
						[DISABLED_MODELS_FIELD]: normalizeDisabledModels(value?.[DISABLED_MODELS_FIELD]),
						[AUTO_QUOTA_RETRY_FIELD]: normalizeAutoQuotaRetry(value?.[AUTO_QUOTA_RETRY_FIELD]),
						connectionMode: value?.connectionMode === "websocket" ? "websocket" : "sse",
						reviewModel: value?.reviewModel === "official" ? "official" : "session",
						remoteControl: value?.remoteControl === "on" ? "on" : "off",
						composerPredictions: value?.composerPredictions === "on" ? "on" : "off",
						otherModels: value?.otherModels === "off" ? "off" : "on",
						otherModels: value?.otherModels === "off" ? "off" : "on",
						compactionMode: value?.compactionMode === "cloud" ? "cloud" : "dsh",
						reasoningCache: normalizeReasoningCache(value?.reasoningCache),
						[DEFAULT_REASONING_EFFORT_FIELD]: normalizeDefaultReasoningEffort(value?.[DEFAULT_REASONING_EFFORT_FIELD]),
						subagentBackend: value?.subagentBackend === "codex" ? "codex" : "dsh",
						...readCapabilitySettings(value),
						[QUICK_QUOTA_MODE_FIELD]: normalizeQuickQuotaMode(value?.[QUICK_QUOTA_MODE_FIELD], value?.[LEGACY_QUICK_QUOTA_FIELD]),
						[SEARCH_PROVIDER_FIELD]: normalizeSearchProvider(value?.[SEARCH_PROVIDER_FIELD]),
						[FETCH_PROVIDER_FIELD]: normalizeFetchProvider(value?.[FETCH_PROVIDER_FIELD]),
						[SPEED_MODE_FIELD]: normalizeSpeedMode(value?.[SPEED_MODE_FIELD]),
						[OUTPUT_VERBOSITY_FIELD]: normalizeOutputVerbosity(value?.[OUTPUT_VERBOSITY_FIELD]),
						[INPUT_IMAGE_DETAIL_FIELD]: normalizeInputImageDetail(value?.[INPUT_IMAGE_DETAIL_FIELD]),
						[REASONING_SUMMARY_FIELD]: normalizeReasoningSummary(value?.[REASONING_SUMMARY_FIELD]),
						[VOICE_CALL_FIELD]: normalizeVoiceCall(value?.[VOICE_CALL_FIELD]),
						[VOICE_VOICE_FIELD]: normalizeVoiceVoice(value?.[VOICE_VOICE_FIELD]),
						[VOICE_LANGUAGE_FIELD]: normalizeVoiceLanguage(value?.[VOICE_LANGUAGE_FIELD]),
						[RETRY_POLICY_FIELD]: normalizeRetryPolicy(value?.[RETRY_POLICY_FIELD]),
						[CONNECTORS_FIELD]: normalizeConnectorMode(value?.[CONNECTORS_FIELD]),
						[STREAM_IDLE_TIMEOUT_MINUTES_FIELD]: normalizeStreamIdleTimeoutMinutes(value?.[STREAM_IDLE_TIMEOUT_MINUTES_FIELD]),
						[CONTEXT_MODE_FIELD]: normalizeContextMode(value?.[CONTEXT_MODE_FIELD]),
						[CUSTOM_CONTEXT_WINDOW_FIELD]: normalizeCustomContextWindow(value?.[CUSTOM_CONTEXT_WINDOW_FIELD]),
						...Object.fromEntries(Object.entries(CUSTOM_CONTEXT_MODEL_FIELDS).map(([modelKey, field]) => [field, normalizeCustomContextWindow(value?.[field] ?? CUSTOM_CONTEXT_MODEL_DEFAULTS[modelKey], CUSTOM_CONTEXT_MODEL_CAPS[modelKey])]))
					},
					writable: value?.writable === true
				};
			};
			const load = async () => {
				if (disposed) return;
				const current = ++generation;
				updating = false;
				pendingPatch = void 0;
				fallback = void 0;
				error = false;
				publish();
				if (disposed || current !== generation) return;
				try {
					const value = unwrap(await rpc.call(CHANNEL, "preferences/status", {}));
					if (current !== generation || disposed) return;
					acceptFallback(value);
					publish();
				} catch {
					if (current !== generation || disposed) return;
					publish();
				}
			};
			const refreshModels = async () => {
				if (disposed) return false;
				const current = ++modelRefreshGeneration;
				modelRefreshStarted = true;
				modelError = false;
				modelsLoading = true;
				publish();
				if (disposed || current !== modelRefreshGeneration) return false;
				try {
					const value = unwrap(await rpc.call(CHANNEL, "preferences/models", {}));
					if (disposed || current !== modelRefreshGeneration) return false;
					const nextContextModels = Array.isArray(value?.contextModels) ? value.contextModels : [];
					const nextAvailableModels = Array.isArray(value?.availableModels) ? value.availableModels : [];
					const nextVerbosityModels = Array.isArray(value?.verbosityModels) ? value.verbosityModels : [];
					const nextFastModels = Array.isArray(value?.fastModels) ? value.fastModels : void 0;
					const nextUltrafastModels = Array.isArray(value?.ultrafastModels) ? value.ultrafastModels : [];
					const nextUltraModels = Array.isArray(value?.ultraModels) ? value.ultraModels : [];
					catalogStatus = value?.catalogStatus;
					const changed = !sameModels(contextModels, nextContextModels) || !sameModels(availableModels, nextAvailableModels) || !sameModels(verbosityModels, nextVerbosityModels) || JSON.stringify(fastModels) !== JSON.stringify(nextFastModels) || JSON.stringify(ultrafastModels) !== JSON.stringify(nextUltrafastModels) || JSON.stringify(ultraModels) !== JSON.stringify(nextUltraModels);
					if (changed) {
						contextModels = nextContextModels;
						availableModels = nextAvailableModels;
						verbosityModels = nextVerbosityModels;
						fastModels = nextFastModels;
						ultrafastModels = nextUltrafastModels;
						ultraModels = nextUltraModels;
						publish();
					}
					return changed;
				} catch {
					if (disposed || current !== modelRefreshGeneration) return false;
					if (!modelError) {
						modelError = true;
						publish();
					}
					return false;
				} finally {
					if (!disposed && current === modelRefreshGeneration) {
						modelsLoading = false;
						publish();
					}
				}
			};
			const set = async (patch) => {
				if (disposed || snapshot.status !== "ready" || snapshot.writable !== true) return;
				const current = ++generation;
				updating = true;
				pendingPatch = patch;
				error = false;
				failedPatch = void 0;
				publish();
				if (disposed || current !== generation) return;
				try {
					const value = unwrap(await rpc.call(CHANNEL, "preferences/update", patch));
					if (current !== generation) return;
					acceptFallback(value);
					pendingPatch = void 0;
				} catch {
					if (current === generation) {
						pendingPatch = void 0;
						error = true;
						failedPatch = patch;
					}
				} finally {
					if (current === generation) {
						updating = false;
						publish();
					}
				}
			};
			return {
				getSnapshot: () => snapshot,
				subscribe: (listener) => {
					if (disposed) return () => {};
					listeners.add(listener);
					return () => listeners.delete(listener);
				},
				load,
				set,
				retry: () => failedPatch === void 0 ? load() : set(failedPatch),
				refreshModels,
				dispose: () => {
					if (disposed) return;
					disposed = true;
					generation += 1;
					modelRefreshGeneration += 1;
					listeners.clear();
				}
			};
		}
		//#endregion
		//#region src/account-status-controller.js
		const DEFAULT_TIMEOUT_MS = 1e4;
		const STATUS_ERROR_CODES = /* @__PURE__ */ new Set([
			"credential-unavailable",
			"credential-malformed",
			"transport",
			"timeout",
			"unknown"
		]);
		const STATUS_ERROR_MESSAGES = /* @__PURE__ */ new Map([
			["Codex account credentials are unavailable", "credential-unavailable"],
			["Codex account credentials are malformed", "credential-malformed"],
			["Codex account status service is unavailable", "transport"],
			["Could not read Codex account status", "unknown"]
		]);
		const TIMEOUT_CODES = /* @__PURE__ */ new Set([
			"TIMEOUT",
			"ETIMEDOUT",
			"ERR_TIMEOUT",
			"UND_ERR_CONNECT_TIMEOUT"
		]);
		const TRANSPORT_CODES = /* @__PURE__ */ new Set([
			"ECONNRESET",
			"ECONNREFUSED",
			"ENOTFOUND",
			"EAI_AGAIN",
			"NETWORK",
			"NETWORK_ERROR",
			"TRANSPORT",
			"CONNECTION_CLOSED",
			"DISCONNECTED"
		]);
		const asCode = (value) => typeof value === "string" ? value.trim().toLowerCase() : void 0;
		function rpcError(response) {
			const code = asCode(response?.error?.code);
			const message = typeof response?.error?.message === "string" ? response.error.message : "";
			const error = /* @__PURE__ */ new Error("Codex account status request failed");
			error.code = code === "internal" && STATUS_ERROR_MESSAGES.has(message) ? STATUS_ERROR_MESSAGES.get(message) : "unknown";
			return error;
		}
		function timeoutError() {
			const error = /* @__PURE__ */ new Error("Codex account status request timed out");
			error.code = "timeout";
			error.name = "TimeoutError";
			return error;
		}
		function classifyAccountStatusError(error) {
			const code = typeof error?.code === "string" ? error.code.trim().toUpperCase() : "";
			if (code === "TIMEOUT" || TIMEOUT_CODES.has(code) || error?.name === "TimeoutError") return "timeout";
			if (STATUS_ERROR_CODES.has(asCode(error?.code))) return asCode(error.code);
			if (TRANSPORT_CODES.has(code) || error?.name === "NetworkError") return "transport";
			return "unknown";
		}
		function publicAccountStatusError(error) {
			return Object.freeze({ code: classifyAccountStatusError(error) });
		}
		/** Own the account-status request lifecycle independently from account actions. */
		function createAccountStatusController(rpc, options = {}) {
			const request = options.request ?? ((signal) => rpc.call("/codex-subscription", "status", {}, signal));
			const scheduleTimeout = options.setTimeout ?? setTimeout;
			const cancelTimeout = options.clearTimeout ?? clearTimeout;
			const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
			if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) throw new Error("Account status timeout must be positive");
			let snapshot = Object.freeze({
				status: "loading",
				account: void 0,
				error: void 0,
				retrying: false
			});
			let generation = 0;
			let active;
			let disposed = false;
			const listeners = /* @__PURE__ */ new Set();
			const publish = (next) => {
				snapshot = Object.freeze(next);
				for (const listener of [...listeners]) listener();
			};
			const load = () => {
				if (disposed) return Promise.resolve(void 0);
				if (active !== void 0) return active.promise;
				const id = ++generation;
				const retrying = snapshot.error !== void 0;
				publish({
					status: retrying ? "error" : "loading",
					account: retrying ? snapshot.account : void 0,
					error: retrying ? snapshot.error : void 0,
					retrying: true
				});
				const controller = new AbortController();
				let timer;
				let onAbort;
				const cancelled = new Promise((resolve, reject) => {
					onAbort = () => reject(controller.signal.reason);
					controller.signal.addEventListener("abort", onAbort, { once: true });
					if (controller.signal.aborted) onAbort();
				});
				const timeout = new Promise((resolve, reject) => {
					timer = scheduleTimeout(() => {
						const error = timeoutError();
						controller.abort(error);
						reject(error);
					}, timeoutMs);
				});
				const work = Promise.resolve().then(() => request(controller.signal)).then((response) => {
					if (!response?.ok) throw rpcError(response);
					return response.value;
				});
				const promise = Promise.race([
					work,
					timeout,
					cancelled
				]).then((account) => {
					if (disposed || id !== generation || controller.signal.aborted) return void 0;
					if (account === null || typeof account !== "object" || Array.isArray(account) || typeof account.authenticated !== "boolean") throw new Error("Invalid account status");
					publish({
						status: "ready",
						account,
						error: void 0,
						retrying: false
					});
					return account;
				}).catch((error) => {
					if (disposed || id !== generation || controller.signal.aborted && error?.code !== "timeout") return void 0;
					publish({
						status: "error",
						account: void 0,
						error: publicAccountStatusError(error),
						retrying: false
					});
				}).finally(() => {
					cancelTimeout(timer);
					controller.signal.removeEventListener("abort", onAbort);
					if (active?.id === id) active = void 0;
				});
				active = {
					id,
					controller,
					promise
				};
				return promise;
			};
			const acceptAccount = (account) => {
				if (disposed) return false;
				generation += 1;
				active?.controller.abort(/* @__PURE__ */ new Error("Account status superseded by an account action"));
				active = void 0;
				publish({
					status: "ready",
					account,
					error: void 0,
					retrying: false
				});
				return true;
			};
			const reload = () => {
				if (disposed) return Promise.resolve(void 0);
				if (active !== void 0) {
					generation += 1;
					active.controller.abort(/* @__PURE__ */ new Error("Account status reload superseded the previous request"));
					active = void 0;
				}
				return load();
			};
			const dispose = () => {
				if (disposed) return;
				disposed = true;
				generation += 1;
				active?.controller.abort(/* @__PURE__ */ new Error("Account status controller disposed"));
				active = void 0;
				listeners.clear();
			};
			return Object.freeze({
				getSnapshot: () => snapshot,
				subscribe(listener) {
					listeners.add(listener);
					return () => listeners.delete(listener);
				},
				load,
				retry: load,
				reload,
				acceptAccount,
				dispose
			});
		}
		//#endregion
		//#region src/client-shared.js
		const NS = "settings.codexSubscription";
		const QUICK_QUOTA_REFRESH_EVENT = "dsh-codex-subscription:refresh-quick-quota";
		const accountStatusErrorText = (error, t) => {
			const key = {
				"credential-unavailable": "accountCredentialUnavailable",
				"credential-malformed": "accountCredentialMalformed",
				timeout: "accountStatusTimeout",
				transport: "accountStatusTransport",
				unknown: "accountStatusUnknown"
			}[error?.code];
			return t(key ?? "accountStatusUnknown");
		};
		const fill = (text, values) => Object.entries(values).reduce((next, [key, value]) => next.replace(`{${key}}`, String(value)), text);
		const maskEmail = (value) => {
			if (typeof value !== "string" || !value.includes("@")) return "••••";
			const [local, domain] = value.split("@", 2);
			if (local.length <= 2) return `${local.slice(0, 1)}••@${domain}`;
			return `${local[0]}•••${local.at(-1)}@${domain}`;
		};
		const hours = (seconds) => Math.round(seconds / 3600 * 10) / 10;
		/** The language DSH shows its interface in, so dates and numbers match the text around them rather than the OS. */
		const uiLocale = () => typeof document === "undefined" ? void 0 : document.documentElement.lang || void 0;
		const percent = (value) => Number(value).toLocaleString(uiLocale(), { maximumFractionDigits: 1 });
		const isApproximateWindow = (seconds, expected) => seconds >= expected * .95 && seconds <= expected * 1.05;
		const windowLabel = (seconds, t) => {
			if (isApproximateWindow(seconds, 18e3)) return t("windowFiveHours");
			if (isApproximateWindow(seconds, 86400)) return t("windowDaily");
			if (isApproximateWindow(seconds, 604800)) return t("windowWeekly");
			if (isApproximateWindow(seconds, 2592e3)) return t("windowMonthly");
			if (isApproximateWindow(seconds, 31536e3)) return t("windowAnnual");
			return seconds >= 86400 && seconds % 86400 === 0 ? fill(t("windowDays"), { value: seconds / 86400 }) : seconds >= 172800 ? fill(t("windowDays"), { value: Math.round(seconds / 8640) / 10 }) : fill(t("windowHours"), { value: hours(seconds) });
		};
		const usePreferenceSnapshot = (preference) => (0, react.useSyncExternalStore)(preference.subscribe, preference.getSnapshot);
		const useAccountStatusSnapshot = (accountStatus) => (0, react.useSyncExternalStore)(accountStatus.subscribe, accountStatus.getSnapshot);
		const notifyQuickQuota = () => window.dispatchEvent(new Event(QUICK_QUOTA_REFRESH_EVENT));
		//#endregion
		//#region src/client-primitives.js
		const Input = _deepseek_ai_dsh_client_ui_primitives.Input;
		const Button = _deepseek_ai_dsh_client_ui_primitives.Button;
		const Switch = _deepseek_ai_dsh_client_ui_primitives.Switch;
		const Tooltip = _deepseek_ai_dsh_client_ui_primitives.Tooltip;
		//#endregion
		//#region src/client-hint.jsx
		/** Keep the setting's own label as the help target; reuse host hover, focus and touch behaviour. */
		function SettingsLabel({ children, description, as: Tag = "span", className = "codexSubscriptionPreferenceLabel", openOnClick = true, ...props }) {
			const hasHelp = typeof description === "string" && description.trim() !== "";
			const label = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tag, {
				...props,
				className: className || void 0,
				tabIndex: hasHelp ? 0 : void 0,
				title: hasHelp && !Tooltip ? description : void 0,
				"aria-description": hasHelp && !Tooltip ? description : void 0,
				children
			});
			return hasHelp && Tooltip ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tooltip, {
				label: description,
				side: "bottom",
				portal: true,
				maxWidth: 360,
				openOnClick,
				children: label
			}) : label;
		}
		/** Live status, blocked reasons and confirmations remain readable without opening help. */
		function Hint({ children, as: Tag = "span" }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tag, {
				className: "codexSubscriptionPreferenceHint",
				children
			});
		}
		//#endregion
		//#region src/login-progress.js
		/** Reconcile a login flow with the credential store without exposing credentials. */
		async function readLoginProgress({ flow, readFlow, readAccount }) {
			try {
				const nextFlow = await readFlow();
				if (nextFlow.phase === "failed") try {
					const account = await readAccount();
					if (account?.authenticated === true) return {
						flow: {
							id: flow.id,
							method: flow.method,
							phase: "authenticated",
							authenticated: true
						},
						account,
						recovered: true
					};
				} catch {}
				if (nextFlow.phase !== "authenticated") return { flow: nextFlow };
				return {
					flow: nextFlow,
					account: await readAccount()
				};
			} catch (flowError) {
				try {
					const account = await readAccount();
					if (account?.authenticated === true) return {
						flow: {
							id: flow.id,
							method: flow.method,
							phase: "authenticated",
							authenticated: true
						},
						account,
						recovered: true
					};
				} catch {}
				throw flowError;
			}
		}
		//#endregion
		//#region src/client-recovery.js
		async function recoveryCall(rpc, endpoint, payload = {}, timeoutMs = 1e4) {
			let timer;
			const controller = new AbortController();
			try {
				return await Promise.race([Promise.resolve().then(() => rpc.call(CHANNEL, endpoint, payload, controller.signal)).then(unwrap), new Promise((_, reject) => {
					timer = setTimeout(() => {
						const error = Object.assign(/* @__PURE__ */ new Error("Request timed out"), { code: "timeout" });
						reject(error);
						controller.abort(error);
					}, timeoutMs);
				})]);
			} finally {
				clearTimeout(timer);
			}
		}
		//#endregion
		//#region src/client-account-quota.jsx
		const when = (seconds) => (/* @__PURE__ */ new Date(seconds * 1e3)).toLocaleString(uiLocale(), {
			month: "numeric",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
		/** Quota of every signed-in account (read-only; the active account does not change). */
		function useAccountQuotas(rpc, ids, active = true) {
			const [entries, setEntries] = (0, react.useState)({});
			const [busy, setBusy] = (0, react.useState)(false);
			const request = (0, react.useRef)(0);
			const flight = (0, react.useRef)();
			const activeRef = (0, react.useRef)(active);
			activeRef.current = active;
			const key = ids.join(",");
			const load = (force) => {
				if (ids.length < 2) {
					setEntries({});
					return;
				}
				if (!activeRef.current || document.visibilityState === "hidden") return;
				if (flight.current) {
					const current = flight.current;
					if (force && !current.force) return current.promise.catch(() => {}).then(() => request.current === current.id ? load(true) : void 0);
					return current.promise;
				}
				const id = ++request.current;
				setBusy(true);
				const current = {
					id,
					force
				};
				current.promise = recoveryCall(rpc, "usage/accounts", { force }).then((value) => {
					if (request.current === id) setEntries(Object.fromEntries((value?.accounts ?? []).map((entry) => [entry.id, entry])));
				}).catch(() => {
					if (request.current === id) setEntries(Object.fromEntries(ids.map((account) => [account, {
						id: account,
						error: "Could not read ChatGPT usage"
					}])));
				}).finally(() => {
					if (flight.current === current) flight.current = void 0;
					if (request.current === id) setBusy(false);
				});
				flight.current = current;
				return current.promise;
			};
			(0, react.useEffect)(() => {
				if (ids.length < 2) {
					setEntries({});
					setBusy(false);
				}
				return () => {
					request.current += 1;
					flight.current = void 0;
				};
			}, [key, rpc]);
			(0, react.useEffect)(() => {
				if (ids.length < 2 || !active) return void 0;
				let timer;
				const stop = () => {
					clearInterval(timer);
					timer = void 0;
				};
				const again = () => load(false);
				const wake = () => {
					stop();
					if (document.visibilityState === "hidden") return;
					again();
					timer = setInterval(again, 6e4);
				};
				wake();
				window.addEventListener("codex-subscription:usage-loaded", again);
				document.addEventListener("visibilitychange", wake);
				return () => {
					window.removeEventListener("codex-subscription:usage-loaded", again);
					document.removeEventListener("visibilitychange", wake);
					stop();
				};
			}, [
				key,
				active,
				rpc
			]);
			return {
				entries,
				busy,
				refresh: () => load(true)
			};
		}
		function AccountQuota({ entry, loading, t }) {
			if (entry === void 0) return loading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
				className: "codexSubscriptionAccountQuota",
				children: t("accountQuotaLoading")
			}) : null;
			if (entry.error !== void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
				className: "codexSubscriptionAccountQuota",
				"data-state": "error",
				children: entry.error === "ChatGPT sign-in needs to be renewed" ? t("resetRenewLogin") : t("accountQuotaError")
			});
			const windows = entry.usage?.rateLimits?.find((limit) => limit.id === "codex")?.windows ?? [];
			if (windows.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
				className: "codexSubscriptionAccountQuota",
				children: t("accountQuotaNone")
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
				className: "codexSubscriptionAccountQuota",
				children: windows.map((window) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [fill(t("accountQuotaLeft"), {
					label: windowLabel(window.windowSeconds, t),
					value: percent(window.remainingPercent)
				}), window.resetsAt === void 0 ? "" : ` · ${fill(t("accountQuotaResets"), { value: when(window.resetsAt) })}`] }, window.windowSeconds))
			});
		}
		//#endregion
		//#region src/client-account.jsx
		const LOGIN_FAILURES = [
			"account-claim",
			"network",
			"token-exchange",
			"callback"
		];
		function AccountEmail({ candidate, fallback, t, emailVisible, onClick }) {
			if (typeof candidate?.email !== "string" || candidate.email.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				title: t("emailUnavailable"),
				children: fallback ?? candidate?.label ?? t("emailUnavailable")
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: "codexSubscriptionEmail",
				"aria-label": t(emailVisible ? "hideEmail" : "showEmail"),
				"aria-pressed": emailVisible,
				onClick,
				children: emailVisible ? candidate.email : maskEmail(candidate.email)
			});
		}
		const signedInIds = (account) => account?.authenticated === true ? (account.accounts ?? []).map((candidate) => candidate.id).filter((id) => typeof id === "string") : [];
		function AccountCard({ rpc, t, account, setAccount, onSignedOut, onAccountChange = () => {}, active = true }) {
			const [flow, setFlow] = (0, react.useState)();
			const flowGeneration = (0, react.useRef)(0);
			const [manualCode, setManualCode] = (0, react.useState)("");
			const [adding, setAdding] = (0, react.useState)(false);
			const [removeId, setRemoveId] = (0, react.useState)();
			const [confirmSignOut, setConfirmSignOut] = (0, react.useState)(false);
			const [emailVisible, setEmailVisible] = (0, react.useState)(false);
			const accounts = account?.accounts ?? [];
			const accountVisibilityKey = `${account?.authenticated === true ? "signed-in" : "signed-out"}:${accounts.map((candidate) => `${candidate.id ?? ""}:${candidate.active === true}:${candidate.email ?? ""}`).join("|")}`;
			const [emailVisibilityKey, setEmailVisibilityKey] = (0, react.useState)(accountVisibilityKey);
			const [busy, setBusy] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)();
			const quotas = useAccountQuotas(rpc, signedInIds(account), active);
			const call = (endpoint, payload = {}) => recoveryCall(rpc, endpoint, payload);
			(0, react.useEffect)(() => {
				if (emailVisibilityKey === accountVisibilityKey) return;
				setEmailVisible(false);
				setEmailVisibilityKey(accountVisibilityKey);
			}, [accountVisibilityKey, emailVisibilityKey]);
			(0, react.useEffect)(() => {
				if (busy || flow?.id === void 0 || [
					"authenticated",
					"failed",
					"cancelled"
				].includes(flow.phase)) return void 0;
				let live = true;
				let reading = false;
				const generation = flowGeneration.current;
				const timer = window.setInterval(() => {
					if (reading) return;
					reading = true;
					(adding ? call("login/status", { id: flow.id }).then(async (nextFlow) => ({
						flow: nextFlow,
						account: nextFlow.phase === "authenticated" ? await call("status") : void 0
					})) : readLoginProgress({
						flow,
						readFlow: () => call("login/status", { id: flow.id }),
						readAccount: () => call("status")
					})).then((next) => {
						if (!live || generation !== flowGeneration.current) return;
						setFlow(next.flow);
						setError(void 0);
						if (next.account !== void 0) {
							setAccount(next.account);
							onSignedOut();
							setAdding(false);
							setFlow(void 0);
							notifyQuickQuota();
						}
					}).catch(() => {
						if (live && generation === flowGeneration.current) setError(t("failed"));
					}).finally(() => {
						reading = false;
					});
				}, 800);
				return () => {
					live = false;
					window.clearInterval(timer);
				};
			}, [
				flow?.id,
				flow?.phase,
				adding,
				busy
			]);
			const begin = (method, label) => {
				flowGeneration.current += 1;
				setFlow(void 0);
				setBusy(true);
				setError(void 0);
				onAccountChange();
				const loginLabel = adding && label === void 0 ? `Account ${accounts.length + 1}` : label;
				call("login/start", {
					method,
					openExternal: true,
					...loginLabel === void 0 ? {} : { label: loginLabel }
				}).then(setFlow).catch(() => setError(t("failed"))).finally(() => setBusy(false));
			};
			const cancel = () => {
				if (flow?.id === void 0) return;
				flowGeneration.current += 1;
				setBusy(true);
				setError(void 0);
				call("login/cancel", { id: flow.id }).then((next) => {
					setFlow(adding ? void 0 : next);
					if (adding) setAdding(false);
					if (adding) return void 0;
					return call("status").then((account) => {
						if (account.authenticated === true) {
							setAccount(account);
							setFlow({
								...next,
								phase: "authenticated",
								authenticated: true
							});
							setError(void 0);
							notifyQuickQuota();
						}
					});
				}).catch(() => setError(t("failed"))).finally(() => setBusy(false));
			};
			const submit = (event) => {
				event.preventDefault();
				if (flow?.id === void 0 || manualCode.trim() === "") return;
				setBusy(true);
				call("login/submit", {
					id: flow.id,
					value: manualCode.trim()
				}).then((next) => {
					setManualCode("");
					setFlow(next);
				}).catch(() => setError(t("failed"))).finally(() => setBusy(false));
			};
			const logout = () => {
				onAccountChange();
				setConfirmSignOut(false);
				setBusy(true);
				setError(void 0);
				call("logout").then((next) => {
					setAccount(next);
					setFlow(void 0);
					onSignedOut();
					notifyQuickQuota();
				}).catch(() => setError(t("failed"))).finally(() => setBusy(false));
			};
			const selectAccount = (id) => {
				onAccountChange();
				setBusy(true);
				setError(void 0);
				call("account/select", { id }).then((next) => {
					setAccount(next);
					onSignedOut();
					notifyQuickQuota();
				}).catch(() => setError(t("failed"))).finally(() => setBusy(false));
			};
			const removeAccount = (id) => {
				if (removeId !== id) {
					setRemoveId(id);
					return;
				}
				onAccountChange();
				setBusy(true);
				setError(void 0);
				call("account/remove", { id }).then((next) => {
					setAccount(next);
					setRemoveId(void 0);
					onSignedOut();
					notifyQuickQuota();
				}).catch(() => setError(t("failed"))).finally(() => setBusy(false));
			};
			const signedIn = account?.authenticated === true;
			const accountReady = account !== void 0;
			const loginVisible = flow !== void 0 && ![
				"authenticated",
				"failed",
				"cancelled"
			].includes(flow.phase);
			const toggleEmail = () => {
				setEmailVisibilityKey(accountVisibilityKey);
				setEmailVisible((value) => emailVisibilityKey === accountVisibilityKey ? !value : true);
			};
			const emailVisibleForAccount = emailVisible && emailVisibilityKey === accountVisibilityKey;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "codexSubscriptionCard",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionAccountRow",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "codexSubscriptionStatus",
							role: "status",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "codexSubscriptionDot",
								"data-state": accountReady ? signedIn ? "connected" : "disconnected" : "loading",
								"aria-hidden": "true"
							}), accountReady ? signedIn ? t("connected") : t("disconnected") : t("accountLoading")]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "codexSubscriptionActions",
							children: signedIn ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy || loginVisible,
								onClick: () => {
									setFlow(void 0);
									setAdding(true);
								},
								children: t("addAccount")
							}), confirmSignOut ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy,
								onClick: logout,
								children: t("signOutConfirm")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setConfirmSignOut(false),
								children: t("removeCancel")
							})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy || loginVisible,
								onClick: () => setConfirmSignOut(true),
								children: t("signOutAll")
							})] }) : accountReady && (flow === void 0 || ["failed", "cancelled"].includes(flow.phase)) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "primary",
								disabled: busy,
								onClick: () => begin("browser"),
								children: t("browserLogin")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy,
								onClick: () => begin("device_code"),
								children: t("deviceLogin")
							})] }) : null
						})]
					}),
					signedIn && accounts.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "codexSubscriptionAccounts",
						children: accounts.map((candidate) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "codexSubscriptionAccount",
							"data-active": candidate.active,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "codexSubscriptionAccountMain",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AccountEmail, {
									candidate,
									fallback: candidate.label,
									t,
									emailVisible: emailVisibleForAccount,
									onClick: toggleEmail
								}), accounts.length > 1 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AccountQuota, {
									entry: quotas.entries[candidate.id],
									loading: quotas.busy,
									t
								}) : null]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "codexSubscriptionActions",
								children: [
									candidate.active ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										disabled: busy || loginVisible,
										onClick: () => selectAccount(candidate.id),
										children: t("switchAccount")
									}),
									accounts.length > 1 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										disabled: busy || loginVisible,
										onClick: () => removeAccount(candidate.id),
										children: removeId === candidate.id ? t("removeConfirm") : t("removeAccount")
									}) : null,
									removeId === candidate.id ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										disabled: busy,
										onClick: () => setRemoveId(void 0),
										children: t("removeCancel")
									}) : null
								]
							})]
						}, candidate.id))
					}) : null,
					signedIn && adding && flow === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "codexSubscriptionFlow",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "codexSubscriptionActions",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "primary",
									disabled: busy,
									onClick: () => begin("browser"),
									children: t("browserLogin")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy,
									onClick: () => begin("device_code"),
									children: t("deviceLogin")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy,
									onClick: () => setAdding(false),
									children: t("cancel")
								})
							]
						})
					}) : null,
					flow?.phase === "waiting_device" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionFlow",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("deviceHint") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", {
								className: "codexSubscriptionCode",
								children: flow.deviceCode?.userCode
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: flow.deviceCode?.verificationUri,
								target: "_blank",
								rel: "noreferrer",
								children: t("openLogin")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("waiting") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy,
								onClick: cancel,
								children: t("cancel")
							})
						]
					}) : null,
					flow?.phase === "waiting_input" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
						className: "codexSubscriptionFlow",
						onSubmit: submit,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("manualCode") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Input, {
								className: "codexSubscriptionInput",
								value: manualCode,
								onChange: (event) => setManualCode(event.currentTarget.value),
								autoComplete: "off",
								spellCheck: false
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "codexSubscriptionActions",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									type: "submit",
									variant: "primary",
									disabled: busy || manualCode.trim() === "",
									children: t("submit")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy,
									onClick: cancel,
									children: t("cancel")
								})]
							})
						]
					}) : null,
					flow !== void 0 && ["starting", "waiting_browser"].includes(flow.phase) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionFlow",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("waiting") }),
							flow.authUrl === void 0 ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: flow.authUrl,
								target: "_blank",
								rel: "noreferrer",
								children: t("openLogin")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy,
								onClick: cancel,
								children: t("cancel")
							})
						]
					}) : null,
					flow?.phase === "failed" || error !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "codexSubscriptionError",
						role: "alert",
						children: error ?? (LOGIN_FAILURES.includes(flow?.failure) ? t(`failed_${flow.failure.replace("-", "_")}`) : t("failed"))
					}) : null
				]
			});
		}
		function AccountFailureCard({ accountStatus, snapshot, t, rpc, onRecovered, onAccountChange = () => {} }) {
			const retrying = snapshot.retrying === true;
			const [confirm, setConfirm] = (0, react.useState)(false);
			const [busy, setBusy] = (0, react.useState)(false);
			const [failed, setFailed] = (0, react.useState)(false);
			const clear = async () => {
				if (!confirm) {
					setConfirm(true);
					return;
				}
				onAccountChange();
				setBusy(true);
				setFailed(false);
				try {
					const next = await recoveryCall(rpc, "logout");
					onAccountChange();
					accountStatus.acceptAccount(next);
					onRecovered();
					notifyQuickQuota();
				} catch {
					setFailed(true);
				} finally {
					setBusy(false);
					setConfirm(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "codexSubscriptionCard codexSubscriptionRecover",
				role: "alert",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "codexSubscriptionError",
						children: retrying ? t("accountRetrying") : accountStatusErrorText(snapshot.error, t)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionActions",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: retrying || busy,
								"aria-busy": retrying,
								onClick: () => {
									accountStatus.retry();
								},
								children: retrying ? t("accountRetrying") : t("accountRetry")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy || retrying,
								onClick: () => void clear(),
								children: busy ? t("accountRetrying") : t(confirm ? "recoveryClearConfirm" : "recoveryClear")
							}),
							confirm ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: busy,
								onClick: () => setConfirm(false),
								children: t("cancel")
							}) : null
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Hint, {
						t,
						as: "p",
						children: t(confirm ? "recoveryClearHint" : "recoveryHint")
					}),
					failed ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "codexSubscriptionError",
						children: t("recoveryFailed")
					}) : null
				]
			});
		}
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/utils.js
		var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
			let toSJISFunction;
			const CODEWORDS_COUNT = [
				0,
				26,
				44,
				70,
				100,
				134,
				172,
				196,
				242,
				292,
				346,
				404,
				466,
				532,
				581,
				655,
				733,
				815,
				901,
				991,
				1085,
				1156,
				1258,
				1364,
				1474,
				1588,
				1706,
				1828,
				1921,
				2051,
				2185,
				2323,
				2465,
				2611,
				2761,
				2876,
				3034,
				3196,
				3362,
				3532,
				3706
			];
			/**
			* Returns the QR Code size for the specified version
			*
			* @param  {Number} version QR Code version
			* @return {Number}         size of QR code
			*/
			exports.getSymbolSize = function getSymbolSize(version) {
				if (!version) throw new Error("\"version\" cannot be null or undefined");
				if (version < 1 || version > 40) throw new Error("\"version\" should be in range from 1 to 40");
				return version * 4 + 17;
			};
			/**
			* Returns the total number of codewords used to store data and EC information.
			*
			* @param  {Number} version QR Code version
			* @return {Number}         Data length in bits
			*/
			exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
				return CODEWORDS_COUNT[version];
			};
			/**
			* Encode data with Bose-Chaudhuri-Hocquenghem
			*
			* @param  {Number} data Value to encode
			* @return {Number}      Encoded value
			*/
			exports.getBCHDigit = function(data) {
				let digit = 0;
				while (data !== 0) {
					digit++;
					data >>>= 1;
				}
				return digit;
			};
			exports.setToSJISFunction = function setToSJISFunction(f) {
				if (typeof f !== "function") throw new Error("\"toSJISFunc\" is not a valid function.");
				toSJISFunction = f;
			};
			exports.isKanjiModeEnabled = function() {
				return typeof toSJISFunction !== "undefined";
			};
			exports.toSJIS = function toSJIS(kanji) {
				return toSJISFunction(kanji);
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-level.js
		var require_error_correction_level = /* @__PURE__ */ __commonJSMin(((exports) => {
			exports.L = { bit: 1 };
			exports.M = { bit: 0 };
			exports.Q = { bit: 3 };
			exports.H = { bit: 2 };
			function fromString(string) {
				if (typeof string !== "string") throw new Error("Param is not a string");
				switch (string.toLowerCase()) {
					case "l":
					case "low": return exports.L;
					case "m":
					case "medium": return exports.M;
					case "q":
					case "quartile": return exports.Q;
					case "h":
					case "high": return exports.H;
					default: throw new Error("Unknown EC Level: " + string);
				}
			}
			exports.isValid = function isValid(level) {
				return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
			};
			exports.from = function from(value, defaultValue) {
				if (exports.isValid(value)) return value;
				try {
					return fromString(value);
				} catch (e) {
					return defaultValue;
				}
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-buffer.js
		var require_bit_buffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			function BitBuffer() {
				this.buffer = [];
				this.length = 0;
			}
			BitBuffer.prototype = {
				get: function(index) {
					const bufIndex = Math.floor(index / 8);
					return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
				},
				put: function(num, length) {
					for (let i = 0; i < length; i++) this.putBit((num >>> length - i - 1 & 1) === 1);
				},
				getLengthInBits: function() {
					return this.length;
				},
				putBit: function(bit) {
					const bufIndex = Math.floor(this.length / 8);
					if (this.buffer.length <= bufIndex) this.buffer.push(0);
					if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
					this.length++;
				}
			};
			module.exports = BitBuffer;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/bit-matrix.js
		var require_bit_matrix = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			/**
			* Helper class to handle QR Code symbol modules
			*
			* @param {Number} size Symbol size
			*/
			function BitMatrix(size) {
				if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = size;
				this.data = new Uint8Array(size * size);
				this.reservedBit = new Uint8Array(size * size);
			}
			/**
			* Set bit value at specified location
			* If reserved flag is set, this bit will be ignored during masking process
			*
			* @param {Number}  row
			* @param {Number}  col
			* @param {Boolean} value
			* @param {Boolean} reserved
			*/
			BitMatrix.prototype.set = function(row, col, value, reserved) {
				const index = row * this.size + col;
				this.data[index] = value;
				if (reserved) this.reservedBit[index] = true;
			};
			/**
			* Returns bit value at specified location
			*
			* @param  {Number}  row
			* @param  {Number}  col
			* @return {Boolean}
			*/
			BitMatrix.prototype.get = function(row, col) {
				return this.data[row * this.size + col];
			};
			/**
			* Applies xor operator at specified location
			* (used during masking process)
			*
			* @param {Number}  row
			* @param {Number}  col
			* @param {Boolean} value
			*/
			BitMatrix.prototype.xor = function(row, col, value) {
				this.data[row * this.size + col] ^= value;
			};
			/**
			* Check if bit at specified location is reserved
			*
			* @param {Number}   row
			* @param {Number}   col
			* @return {Boolean}
			*/
			BitMatrix.prototype.isReserved = function(row, col) {
				return this.reservedBit[row * this.size + col];
			};
			module.exports = BitMatrix;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alignment-pattern.js
		var require_alignment_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
			/**
			* Alignment pattern are fixed reference pattern in defined positions
			* in a matrix symbology, which enables the decode software to re-synchronise
			* the coordinate mapping of the image modules in the event of moderate amounts
			* of distortion of the image.
			*
			* Alignment patterns are present only in QR Code symbols of version 2 or larger
			* and their number depends on the symbol version.
			*/
			const getSymbolSize = require_utils().getSymbolSize;
			/**
			* Calculate the row/column coordinates of the center module of each alignment pattern
			* for the specified QR Code version.
			*
			* The alignment patterns are positioned symmetrically on either side of the diagonal
			* running from the top left corner of the symbol to the bottom right corner.
			*
			* Since positions are simmetrical only half of the coordinates are returned.
			* Each item of the array will represent in turn the x and y coordinate.
			* @see {@link getPositions}
			*
			* @param  {Number} version QR Code version
			* @return {Array}          Array of coordinate
			*/
			exports.getRowColCoords = function getRowColCoords(version) {
				if (version === 1) return [];
				const posCount = Math.floor(version / 7) + 2;
				const size = getSymbolSize(version);
				const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
				const positions = [size - 7];
				for (let i = 1; i < posCount - 1; i++) positions[i] = positions[i - 1] - intervals;
				positions.push(6);
				return positions.reverse();
			};
			/**
			* Returns an array containing the positions of each alignment pattern.
			* Each array's element represent the center point of the pattern as (x, y) coordinates
			*
			* Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
			* and filtering out the items that overlaps with finder pattern
			*
			* @example
			* For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
			* The alignment patterns, therefore, are to be centered on (row, column)
			* positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
			* Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
			* and are not therefore used for alignment patterns.
			*
			* let pos = getPositions(7)
			* // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
			*
			* @param  {Number} version QR Code version
			* @return {Array}          Array of coordinates
			*/
			exports.getPositions = function getPositions(version) {
				const coords = [];
				const pos = exports.getRowColCoords(version);
				const posLength = pos.length;
				for (let i = 0; i < posLength; i++) for (let j = 0; j < posLength; j++) {
					if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) continue;
					coords.push([pos[i], pos[j]]);
				}
				return coords;
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/finder-pattern.js
		var require_finder_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
			const getSymbolSize = require_utils().getSymbolSize;
			const FINDER_PATTERN_SIZE = 7;
			/**
			* Returns an array containing the positions of each finder pattern.
			* Each array's element represent the top-left point of the pattern as (x, y) coordinates
			*
			* @param  {Number} version QR Code version
			* @return {Array}          Array of coordinates
			*/
			exports.getPositions = function getPositions(version) {
				const size = getSymbolSize(version);
				return [
					[0, 0],
					[size - FINDER_PATTERN_SIZE, 0],
					[0, size - FINDER_PATTERN_SIZE]
				];
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mask-pattern.js
		var require_mask_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
			/**
			* Data mask pattern reference
			* @type {Object}
			*/
			exports.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			/**
			* Weighted penalty scores for the undesirable features
			* @type {Object}
			*/
			const PenaltyScores = {
				N1: 3,
				N2: 3,
				N3: 40,
				N4: 10
			};
			/**
			* Check if mask pattern value is valid
			*
			* @param  {Number}  mask    Mask pattern
			* @return {Boolean}         true if valid, false otherwise
			*/
			exports.isValid = function isValid(mask) {
				return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
			};
			/**
			* Returns mask pattern from a value.
			* If value is not valid, returns undefined
			*
			* @param  {Number|String} value        Mask pattern value
			* @return {Number}                     Valid mask pattern or undefined
			*/
			exports.from = function from(value) {
				return exports.isValid(value) ? parseInt(value, 10) : void 0;
			};
			/**
			* Find adjacent modules in row/column with the same color
			* and assign a penalty value.
			*
			* Points: N1 + i
			* i is the amount by which the number of adjacent modules of the same color exceeds 5
			*/
			exports.getPenaltyN1 = function getPenaltyN1(data) {
				const size = data.size;
				let points = 0;
				let sameCountCol = 0;
				let sameCountRow = 0;
				let lastCol = null;
				let lastRow = null;
				for (let row = 0; row < size; row++) {
					sameCountCol = sameCountRow = 0;
					lastCol = lastRow = null;
					for (let col = 0; col < size; col++) {
						let module$1 = data.get(row, col);
						if (module$1 === lastCol) sameCountCol++;
						else {
							if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
							lastCol = module$1;
							sameCountCol = 1;
						}
						module$1 = data.get(col, row);
						if (module$1 === lastRow) sameCountRow++;
						else {
							if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
							lastRow = module$1;
							sameCountRow = 1;
						}
					}
					if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
					if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
				}
				return points;
			};
			/**
			* Find 2x2 blocks with the same color and assign a penalty value
			*
			* Points: N2 * (m - 1) * (n - 1)
			*/
			exports.getPenaltyN2 = function getPenaltyN2(data) {
				const size = data.size;
				let points = 0;
				for (let row = 0; row < size - 1; row++) for (let col = 0; col < size - 1; col++) {
					const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
					if (last === 4 || last === 0) points++;
				}
				return points * PenaltyScores.N2;
			};
			/**
			* Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
			* preceded or followed by light area 4 modules wide
			*
			* Points: N3 * number of pattern found
			*/
			exports.getPenaltyN3 = function getPenaltyN3(data) {
				const size = data.size;
				let points = 0;
				let bitsCol = 0;
				let bitsRow = 0;
				for (let row = 0; row < size; row++) {
					bitsCol = bitsRow = 0;
					for (let col = 0; col < size; col++) {
						bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
						if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
						bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
						if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
					}
				}
				return points * PenaltyScores.N3;
			};
			/**
			* Calculate proportion of dark modules in entire symbol
			*
			* Points: N4 * k
			*
			* k is the rating of the deviation of the proportion of dark modules
			* in the symbol from 50% in steps of 5%
			*/
			exports.getPenaltyN4 = function getPenaltyN4(data) {
				let darkCount = 0;
				const modulesCount = data.data.length;
				for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
				return Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10) * PenaltyScores.N4;
			};
			/**
			* Return mask value at given position
			*
			* @param  {Number} maskPattern Pattern reference value
			* @param  {Number} i           Row
			* @param  {Number} j           Column
			* @return {Boolean}            Mask value
			*/
			function getMaskAt(maskPattern, i, j) {
				switch (maskPattern) {
					case exports.Patterns.PATTERN000: return (i + j) % 2 === 0;
					case exports.Patterns.PATTERN001: return i % 2 === 0;
					case exports.Patterns.PATTERN010: return j % 3 === 0;
					case exports.Patterns.PATTERN011: return (i + j) % 3 === 0;
					case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
					case exports.Patterns.PATTERN101: return i * j % 2 + i * j % 3 === 0;
					case exports.Patterns.PATTERN110: return (i * j % 2 + i * j % 3) % 2 === 0;
					case exports.Patterns.PATTERN111: return (i * j % 3 + (i + j) % 2) % 2 === 0;
					default: throw new Error("bad maskPattern:" + maskPattern);
				}
			}
			/**
			* Apply a mask pattern to a BitMatrix
			*
			* @param  {Number}    pattern Pattern reference number
			* @param  {BitMatrix} data    BitMatrix data
			*/
			exports.applyMask = function applyMask(pattern, data) {
				const size = data.size;
				for (let col = 0; col < size; col++) for (let row = 0; row < size; row++) {
					if (data.isReserved(row, col)) continue;
					data.xor(row, col, getMaskAt(pattern, row, col));
				}
			};
			/**
			* Returns the best mask pattern for data
			*
			* @param  {BitMatrix} data
			* @return {Number} Mask pattern reference number
			*/
			exports.getBestMask = function getBestMask(data, setupFormatFunc) {
				const numPatterns = Object.keys(exports.Patterns).length;
				let bestPattern = 0;
				let lowerPenalty = Infinity;
				for (let p = 0; p < numPatterns; p++) {
					setupFormatFunc(p);
					exports.applyMask(p, data);
					const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
					exports.applyMask(p, data);
					if (penalty < lowerPenalty) {
						lowerPenalty = penalty;
						bestPattern = p;
					}
				}
				return bestPattern;
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/error-correction-code.js
		var require_error_correction_code = /* @__PURE__ */ __commonJSMin(((exports) => {
			const ECLevel = require_error_correction_level();
			const EC_BLOCKS_TABLE = [
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				2,
				2,
				1,
				2,
				2,
				4,
				1,
				2,
				4,
				4,
				2,
				4,
				4,
				4,
				2,
				4,
				6,
				5,
				2,
				4,
				6,
				6,
				2,
				5,
				8,
				8,
				4,
				5,
				8,
				8,
				4,
				5,
				8,
				11,
				4,
				8,
				10,
				11,
				4,
				9,
				12,
				16,
				4,
				9,
				16,
				16,
				6,
				10,
				12,
				18,
				6,
				10,
				17,
				16,
				6,
				11,
				16,
				19,
				6,
				13,
				18,
				21,
				7,
				14,
				21,
				25,
				8,
				16,
				20,
				25,
				8,
				17,
				23,
				25,
				9,
				17,
				23,
				34,
				9,
				18,
				25,
				30,
				10,
				20,
				27,
				32,
				12,
				21,
				29,
				35,
				12,
				23,
				34,
				37,
				12,
				25,
				34,
				40,
				13,
				26,
				35,
				42,
				14,
				28,
				38,
				45,
				15,
				29,
				40,
				48,
				16,
				31,
				43,
				51,
				17,
				33,
				45,
				54,
				18,
				35,
				48,
				57,
				19,
				37,
				51,
				60,
				19,
				38,
				53,
				63,
				20,
				40,
				56,
				66,
				21,
				43,
				59,
				70,
				22,
				45,
				62,
				74,
				24,
				47,
				65,
				77,
				25,
				49,
				68,
				81
			];
			const EC_CODEWORDS_TABLE = [
				7,
				10,
				13,
				17,
				10,
				16,
				22,
				28,
				15,
				26,
				36,
				44,
				20,
				36,
				52,
				64,
				26,
				48,
				72,
				88,
				36,
				64,
				96,
				112,
				40,
				72,
				108,
				130,
				48,
				88,
				132,
				156,
				60,
				110,
				160,
				192,
				72,
				130,
				192,
				224,
				80,
				150,
				224,
				264,
				96,
				176,
				260,
				308,
				104,
				198,
				288,
				352,
				120,
				216,
				320,
				384,
				132,
				240,
				360,
				432,
				144,
				280,
				408,
				480,
				168,
				308,
				448,
				532,
				180,
				338,
				504,
				588,
				196,
				364,
				546,
				650,
				224,
				416,
				600,
				700,
				224,
				442,
				644,
				750,
				252,
				476,
				690,
				816,
				270,
				504,
				750,
				900,
				300,
				560,
				810,
				960,
				312,
				588,
				870,
				1050,
				336,
				644,
				952,
				1110,
				360,
				700,
				1020,
				1200,
				390,
				728,
				1050,
				1260,
				420,
				784,
				1140,
				1350,
				450,
				812,
				1200,
				1440,
				480,
				868,
				1290,
				1530,
				510,
				924,
				1350,
				1620,
				540,
				980,
				1440,
				1710,
				570,
				1036,
				1530,
				1800,
				570,
				1064,
				1590,
				1890,
				600,
				1120,
				1680,
				1980,
				630,
				1204,
				1770,
				2100,
				660,
				1260,
				1860,
				2220,
				720,
				1316,
				1950,
				2310,
				750,
				1372,
				2040,
				2430
			];
			/**
			* Returns the number of error correction block that the QR Code should contain
			* for the specified version and error correction level.
			*
			* @param  {Number} version              QR Code version
			* @param  {Number} errorCorrectionLevel Error correction level
			* @return {Number}                      Number of error correction blocks
			*/
			exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
				switch (errorCorrectionLevel) {
					case ECLevel.L: return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
					case ECLevel.M: return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
					case ECLevel.Q: return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
					case ECLevel.H: return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
					default: return;
				}
			};
			/**
			* Returns the number of error correction codewords to use for the specified
			* version and error correction level.
			*
			* @param  {Number} version              QR Code version
			* @param  {Number} errorCorrectionLevel Error correction level
			* @return {Number}                      Number of error correction codewords
			*/
			exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
				switch (errorCorrectionLevel) {
					case ECLevel.L: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
					case ECLevel.M: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
					case ECLevel.Q: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
					case ECLevel.H: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
					default: return;
				}
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/galois-field.js
		var require_galois_field = /* @__PURE__ */ __commonJSMin(((exports) => {
			const EXP_TABLE = /* @__PURE__ */ new Uint8Array(512);
			const LOG_TABLE = /* @__PURE__ */ new Uint8Array(256);
			(function initTables() {
				let x = 1;
				for (let i = 0; i < 255; i++) {
					EXP_TABLE[i] = x;
					LOG_TABLE[x] = i;
					x <<= 1;
					if (x & 256) x ^= 285;
				}
				for (let i = 255; i < 512; i++) EXP_TABLE[i] = EXP_TABLE[i - 255];
			})();
			/**
			* Returns log value of n inside Galois Field
			*
			* @param  {Number} n
			* @return {Number}
			*/
			exports.log = function log(n) {
				if (n < 1) throw new Error("log(" + n + ")");
				return LOG_TABLE[n];
			};
			/**
			* Returns anti-log value of n inside Galois Field
			*
			* @param  {Number} n
			* @return {Number}
			*/
			exports.exp = function exp(n) {
				return EXP_TABLE[n];
			};
			/**
			* Multiplies two number inside Galois Field
			*
			* @param  {Number} x
			* @param  {Number} y
			* @return {Number}
			*/
			exports.mul = function mul(x, y) {
				if (x === 0 || y === 0) return 0;
				return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/polynomial.js
		var require_polynomial = /* @__PURE__ */ __commonJSMin(((exports) => {
			const GF = require_galois_field();
			/**
			* Multiplies two polynomials inside Galois Field
			*
			* @param  {Uint8Array} p1 Polynomial
			* @param  {Uint8Array} p2 Polynomial
			* @return {Uint8Array}    Product of p1 and p2
			*/
			exports.mul = function mul(p1, p2) {
				const coeff = new Uint8Array(p1.length + p2.length - 1);
				for (let i = 0; i < p1.length; i++) for (let j = 0; j < p2.length; j++) coeff[i + j] ^= GF.mul(p1[i], p2[j]);
				return coeff;
			};
			/**
			* Calculate the remainder of polynomials division
			*
			* @param  {Uint8Array} divident Polynomial
			* @param  {Uint8Array} divisor  Polynomial
			* @return {Uint8Array}          Remainder
			*/
			exports.mod = function mod(divident, divisor) {
				let result = new Uint8Array(divident);
				while (result.length - divisor.length >= 0) {
					const coeff = result[0];
					for (let i = 0; i < divisor.length; i++) result[i] ^= GF.mul(divisor[i], coeff);
					let offset = 0;
					while (offset < result.length && result[offset] === 0) offset++;
					result = result.slice(offset);
				}
				return result;
			};
			/**
			* Generate an irreducible generator polynomial of specified degree
			* (used by Reed-Solomon encoder)
			*
			* @param  {Number} degree Degree of the generator polynomial
			* @return {Uint8Array}    Buffer containing polynomial coefficients
			*/
			exports.generateECPolynomial = function generateECPolynomial(degree) {
				let poly = new Uint8Array([1]);
				for (let i = 0; i < degree; i++) poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
				return poly;
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/reed-solomon-encoder.js
		var require_reed_solomon_encoder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			const Polynomial = require_polynomial();
			function ReedSolomonEncoder(degree) {
				this.genPoly = void 0;
				this.degree = degree;
				if (this.degree) this.initialize(this.degree);
			}
			/**
			* Initialize the encoder.
			* The input param should correspond to the number of error correction codewords.
			*
			* @param  {Number} degree
			*/
			ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
				this.degree = degree;
				this.genPoly = Polynomial.generateECPolynomial(this.degree);
			};
			/**
			* Encodes a chunk of data
			*
			* @param  {Uint8Array} data Buffer containing input data
			* @return {Uint8Array}      Buffer containing encoded data
			*/
			ReedSolomonEncoder.prototype.encode = function encode(data) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				const paddedData = new Uint8Array(data.length + this.degree);
				paddedData.set(data);
				const remainder = Polynomial.mod(paddedData, this.genPoly);
				const start = this.degree - remainder.length;
				if (start > 0) {
					const buff = new Uint8Array(this.degree);
					buff.set(remainder, start);
					return buff;
				}
				return remainder;
			};
			module.exports = ReedSolomonEncoder;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version-check.js
		var require_version_check = /* @__PURE__ */ __commonJSMin(((exports) => {
			/**
			* Check if QR Code version is valid
			*
			* @param  {Number}  version QR Code version
			* @return {Boolean}         true if valid version, false otherwise
			*/
			exports.isValid = function isValid(version) {
				return !isNaN(version) && version >= 1 && version <= 40;
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/regex.js
		var require_regex = /* @__PURE__ */ __commonJSMin(((exports) => {
			const numeric = "[0-9]+";
			const alphanumeric = "[A-Z $%*+\\-./:]+";
			let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
			kanji = kanji.replace(/u/g, "\\u");
			const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
			exports.KANJI = new RegExp(kanji, "g");
			exports.BYTE_KANJI = /* @__PURE__ */ new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
			exports.BYTE = new RegExp(byte, "g");
			exports.NUMERIC = new RegExp(numeric, "g");
			exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
			const TEST_KANJI = new RegExp("^" + kanji + "$");
			const TEST_NUMERIC = /* @__PURE__ */ new RegExp("^[0-9]+$");
			const TEST_ALPHANUMERIC = /* @__PURE__ */ new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			exports.testKanji = function testKanji(str) {
				return TEST_KANJI.test(str);
			};
			exports.testNumeric = function testNumeric(str) {
				return TEST_NUMERIC.test(str);
			};
			exports.testAlphanumeric = function testAlphanumeric(str) {
				return TEST_ALPHANUMERIC.test(str);
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/mode.js
		var require_mode = /* @__PURE__ */ __commonJSMin(((exports) => {
			const VersionCheck = require_version_check();
			const Regex = require_regex();
			/**
			* Numeric mode encodes data from the decimal digit set (0 - 9)
			* (byte values 30HEX to 39HEX).
			* Normally, 3 data characters are represented by 10 bits.
			*
			* @type {Object}
			*/
			exports.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [
					10,
					12,
					14
				]
			};
			/**
			* Alphanumeric mode encodes data from a set of 45 characters,
			* i.e. 10 numeric digits (0 - 9),
			*      26 alphabetic characters (A - Z),
			*   and 9 symbols (SP, $, %, *, +, -, ., /, :).
			* Normally, two input characters are represented by 11 bits.
			*
			* @type {Object}
			*/
			exports.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [
					9,
					11,
					13
				]
			};
			/**
			* In byte mode, data is encoded at 8 bits per character.
			*
			* @type {Object}
			*/
			exports.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [
					8,
					16,
					16
				]
			};
			/**
			* The Kanji mode efficiently encodes Kanji characters in accordance with
			* the Shift JIS system based on JIS X 0208.
			* The Shift JIS values are shifted from the JIS X 0208 values.
			* JIS X 0208 gives details of the shift coded representation.
			* Each two-byte character value is compacted to a 13-bit binary codeword.
			*
			* @type {Object}
			*/
			exports.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [
					8,
					10,
					12
				]
			};
			/**
			* Mixed mode will contain a sequences of data in a combination of any of
			* the modes described above
			*
			* @type {Object}
			*/
			exports.MIXED = { bit: -1 };
			/**
			* Returns the number of bits needed to store the data length
			* according to QR Code specifications.
			*
			* @param  {Mode}   mode    Data mode
			* @param  {Number} version QR Code version
			* @return {Number}         Number of bits
			*/
			exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
				if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
				if (!VersionCheck.isValid(version)) throw new Error("Invalid version: " + version);
				if (version >= 1 && version < 10) return mode.ccBits[0];
				else if (version < 27) return mode.ccBits[1];
				return mode.ccBits[2];
			};
			/**
			* Returns the most efficient mode to store the specified data
			*
			* @param  {String} dataStr Input data string
			* @return {Mode}           Best mode
			*/
			exports.getBestModeForData = function getBestModeForData(dataStr) {
				if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
				else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
				else if (Regex.testKanji(dataStr)) return exports.KANJI;
				else return exports.BYTE;
			};
			/**
			* Return mode name as string
			*
			* @param {Mode} mode Mode object
			* @returns {String}  Mode name
			*/
			exports.toString = function toString(mode) {
				if (mode && mode.id) return mode.id;
				throw new Error("Invalid mode");
			};
			/**
			* Check if input param is a valid mode object
			*
			* @param   {Mode}    mode Mode object
			* @returns {Boolean} True if valid mode, false otherwise
			*/
			exports.isValid = function isValid(mode) {
				return mode && mode.bit && mode.ccBits;
			};
			/**
			* Get mode object from its name
			*
			* @param   {String} string Mode name
			* @returns {Mode}          Mode object
			*/
			function fromString(string) {
				if (typeof string !== "string") throw new Error("Param is not a string");
				switch (string.toLowerCase()) {
					case "numeric": return exports.NUMERIC;
					case "alphanumeric": return exports.ALPHANUMERIC;
					case "kanji": return exports.KANJI;
					case "byte": return exports.BYTE;
					default: throw new Error("Unknown mode: " + string);
				}
			}
			/**
			* Returns mode from a value.
			* If value is not a valid mode, returns defaultValue
			*
			* @param  {Mode|String} value        Encoding mode
			* @param  {Mode}        defaultValue Fallback value
			* @return {Mode}                     Encoding mode
			*/
			exports.from = function from(value, defaultValue) {
				if (exports.isValid(value)) return value;
				try {
					return fromString(value);
				} catch (e) {
					return defaultValue;
				}
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/version.js
		var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
			const Utils = require_utils();
			const ECCode = require_error_correction_code();
			const ECLevel = require_error_correction_level();
			const Mode = require_mode();
			const VersionCheck = require_version_check();
			const G18 = 7973;
			const G18_BCH = Utils.getBCHDigit(G18);
			function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
				for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
			}
			function getReservedBitsCount(mode, version) {
				return Mode.getCharCountIndicator(mode, version) + 4;
			}
			function getTotalBitsFromDataArray(segments, version) {
				let totalBits = 0;
				segments.forEach(function(data) {
					const reservedBits = getReservedBitsCount(data.mode, version);
					totalBits += reservedBits + data.getBitsLength();
				});
				return totalBits;
			}
			function getBestVersionForMixedData(segments, errorCorrectionLevel) {
				for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (getTotalBitsFromDataArray(segments, currentVersion) <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
			}
			/**
			* Returns version number from a value.
			* If value is not a valid version, returns defaultValue
			*
			* @param  {Number|String} value        QR Code version
			* @param  {Number}        defaultValue Fallback value
			* @return {Number}                     QR Code version number
			*/
			exports.from = function from(value, defaultValue) {
				if (VersionCheck.isValid(value)) return parseInt(value, 10);
				return defaultValue;
			};
			/**
			* Returns how much data can be stored with the specified QR code version
			* and error correction level
			*
			* @param  {Number} version              QR Code version (1-40)
			* @param  {Number} errorCorrectionLevel Error correction level
			* @param  {Mode}   mode                 Data mode
			* @return {Number}                      Quantity of storable data
			*/
			exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
				if (!VersionCheck.isValid(version)) throw new Error("Invalid QR Code version");
				if (typeof mode === "undefined") mode = Mode.BYTE;
				const dataTotalCodewordsBits = (Utils.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
				if (mode === Mode.MIXED) return dataTotalCodewordsBits;
				const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
				switch (mode) {
					case Mode.NUMERIC: return Math.floor(usableBits / 10 * 3);
					case Mode.ALPHANUMERIC: return Math.floor(usableBits / 11 * 2);
					case Mode.KANJI: return Math.floor(usableBits / 13);
					case Mode.BYTE:
					default: return Math.floor(usableBits / 8);
				}
			};
			/**
			* Returns the minimum version needed to contain the amount of data
			*
			* @param  {Segment} data                    Segment of data
			* @param  {Number} [errorCorrectionLevel=H] Error correction level
			* @param  {Mode} mode                       Data mode
			* @return {Number}                          QR Code version
			*/
			exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
				let seg;
				const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
				if (Array.isArray(data)) {
					if (data.length > 1) return getBestVersionForMixedData(data, ecl);
					if (data.length === 0) return 1;
					seg = data[0];
				} else seg = data;
				return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
			};
			/**
			* Returns version information with relative error correction bits
			*
			* The version information is included in QR Code symbols of version 7 or larger.
			* It consists of an 18-bit sequence containing 6 data bits,
			* with 12 error correction bits calculated using the (18, 6) Golay code.
			*
			* @param  {Number} version QR Code version
			* @return {Number}         Encoded version info bits
			*/
			exports.getEncodedBits = function getEncodedBits(version) {
				if (!VersionCheck.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
				let d = version << 12;
				while (Utils.getBCHDigit(d) - G18_BCH >= 0) d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
				return version << 12 | d;
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/format-info.js
		var require_format_info = /* @__PURE__ */ __commonJSMin(((exports) => {
			const Utils = require_utils();
			const G15 = 1335;
			const G15_MASK = 21522;
			const G15_BCH = Utils.getBCHDigit(G15);
			/**
			* Returns format information with relative error correction bits
			*
			* The format information is a 15-bit sequence containing 5 data bits,
			* with 10 error correction bits calculated using the (15, 5) BCH code.
			*
			* @param  {Number} errorCorrectionLevel Error correction level
			* @param  {Number} mask                 Mask pattern
			* @return {Number}                      Encoded format information bits
			*/
			exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
				const data = errorCorrectionLevel.bit << 3 | mask;
				let d = data << 10;
				while (Utils.getBCHDigit(d) - G15_BCH >= 0) d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
				return (data << 10 | d) ^ G15_MASK;
			};
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/numeric-data.js
		var require_numeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			const Mode = require_mode();
			function NumericData(data) {
				this.mode = Mode.NUMERIC;
				this.data = data.toString();
			}
			NumericData.getBitsLength = function getBitsLength(length) {
				return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
			};
			NumericData.prototype.getLength = function getLength() {
				return this.data.length;
			};
			NumericData.prototype.getBitsLength = function getBitsLength() {
				return NumericData.getBitsLength(this.data.length);
			};
			NumericData.prototype.write = function write(bitBuffer) {
				let i, group, value;
				for (i = 0; i + 3 <= this.data.length; i += 3) {
					group = this.data.substr(i, 3);
					value = parseInt(group, 10);
					bitBuffer.put(value, 10);
				}
				const remainingNum = this.data.length - i;
				if (remainingNum > 0) {
					group = this.data.substr(i);
					value = parseInt(group, 10);
					bitBuffer.put(value, remainingNum * 3 + 1);
				}
			};
			module.exports = NumericData;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/alphanumeric-data.js
		var require_alphanumeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			const Mode = require_mode();
			/**
			* Array of characters available in alphanumeric mode
			*
			* As per QR Code specification, to each character
			* is assigned a value from 0 to 44 which in this case coincides
			* with the array index
			*
			* @type {Array}
			*/
			const ALPHA_NUM_CHARS = [
				"0",
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z",
				" ",
				"$",
				"%",
				"*",
				"+",
				"-",
				".",
				"/",
				":"
			];
			function AlphanumericData(data) {
				this.mode = Mode.ALPHANUMERIC;
				this.data = data;
			}
			AlphanumericData.getBitsLength = function getBitsLength(length) {
				return 11 * Math.floor(length / 2) + 6 * (length % 2);
			};
			AlphanumericData.prototype.getLength = function getLength() {
				return this.data.length;
			};
			AlphanumericData.prototype.getBitsLength = function getBitsLength() {
				return AlphanumericData.getBitsLength(this.data.length);
			};
			AlphanumericData.prototype.write = function write(bitBuffer) {
				let i;
				for (i = 0; i + 2 <= this.data.length; i += 2) {
					let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
					value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
					bitBuffer.put(value, 11);
				}
				if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
			};
			module.exports = AlphanumericData;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/byte-data.js
		var require_byte_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			const Mode = require_mode();
			function ByteData(data) {
				this.mode = Mode.BYTE;
				if (typeof data === "string") this.data = new TextEncoder().encode(data);
				else this.data = new Uint8Array(data);
			}
			ByteData.getBitsLength = function getBitsLength(length) {
				return length * 8;
			};
			ByteData.prototype.getLength = function getLength() {
				return this.data.length;
			};
			ByteData.prototype.getBitsLength = function getBitsLength() {
				return ByteData.getBitsLength(this.data.length);
			};
			ByteData.prototype.write = function(bitBuffer) {
				for (let i = 0, l = this.data.length; i < l; i++) bitBuffer.put(this.data[i], 8);
			};
			module.exports = ByteData;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/kanji-data.js
		var require_kanji_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			const Mode = require_mode();
			const Utils = require_utils();
			function KanjiData(data) {
				this.mode = Mode.KANJI;
				this.data = data;
			}
			KanjiData.getBitsLength = function getBitsLength(length) {
				return length * 13;
			};
			KanjiData.prototype.getLength = function getLength() {
				return this.data.length;
			};
			KanjiData.prototype.getBitsLength = function getBitsLength() {
				return KanjiData.getBitsLength(this.data.length);
			};
			KanjiData.prototype.write = function(bitBuffer) {
				let i;
				for (i = 0; i < this.data.length; i++) {
					let value = Utils.toSJIS(this.data[i]);
					if (value >= 33088 && value <= 40956) value -= 33088;
					else if (value >= 57408 && value <= 60351) value -= 49472;
					else throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
					value = (value >>> 8 & 255) * 192 + (value & 255);
					bitBuffer.put(value, 13);
				}
			};
			module.exports = KanjiData;
		}));
		//#endregion
		//#region node_modules/.pnpm/dijkstrajs@1.0.3/node_modules/dijkstrajs/dijkstra.js
		var require_dijkstra = /* @__PURE__ */ __commonJSMin(((exports, module) => {
			/******************************************************************************
			* Created 2008-08-19.
			*
			* Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
			*
			* Copyright (C) 2008
			*   Wyatt Baldwin <self@wyattbaldwin.com>
			*   All rights reserved
			*
			* Licensed under the MIT license.
			*
			*   http://www.opensource.org/licenses/mit-license.php
			*
			* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
			* THE SOFTWARE.
			*****************************************************************************/
			var dijkstra = {
				single_source_shortest_paths: function(graph, s, d) {
					var predecessors = {};
					var costs = {};
					costs[s] = 0;
					var open = dijkstra.PriorityQueue.make();
					open.push(s, 0);
					var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
					while (!open.empty()) {
						closest = open.pop();
						u = closest.value;
						cost_of_s_to_u = closest.cost;
						adjacent_nodes = graph[u] || {};
						for (v in adjacent_nodes) if (adjacent_nodes.hasOwnProperty(v)) {
							cost_of_e = adjacent_nodes[v];
							cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
							cost_of_s_to_v = costs[v];
							first_visit = typeof costs[v] === "undefined";
							if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
								costs[v] = cost_of_s_to_u_plus_cost_of_e;
								open.push(v, cost_of_s_to_u_plus_cost_of_e);
								predecessors[v] = u;
							}
						}
					}
					if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
						var msg = [
							"Could not find a path from ",
							s,
							" to ",
							d,
							"."
						].join("");
						throw new Error(msg);
					}
					return predecessors;
				},
				extract_shortest_path_from_predecessor_list: function(predecessors, d) {
					var nodes = [];
					var u = d;
					while (u) {
						nodes.push(u);
						predecessors[u];
						u = predecessors[u];
					}
					nodes.reverse();
					return nodes;
				},
				find_path: function(graph, s, d) {
					var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
					return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
				},
				/**
				* A very naive priority queue implementation.
				*/
				PriorityQueue: {
					make: function(opts) {
						var T = dijkstra.PriorityQueue, t = {}, key;
						opts = opts || {};
						for (key in T) if (T.hasOwnProperty(key)) t[key] = T[key];
						t.queue = [];
						t.sorter = opts.sorter || T.default_sorter;
						return t;
					},
					default_sorter: function(a, b) {
						return a.cost - b.cost;
					},
					/**
					* Add a new item to the queue and ensure the highest priority element
					* is at the front of the queue.
					*/
					push: function(value, cost) {
						var item = {
							value,
							cost
						};
						this.queue.push(item);
						this.queue.sort(this.sorter);
					},
					/**
					* Return the highest priority element in the queue.
					*/
					pop: function() {
						return this.queue.shift();
					},
					empty: function() {
						return this.queue.length === 0;
					}
				}
			};
			if (typeof module !== "undefined") module.exports = dijkstra;
		}));
		//#endregion
		//#region node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/core/segments.js
		var require_segments = /* @__PURE__ */ __commonJSMin(((exports) => {
			const Mode = require_mode();
			const NumericData = require_numeric_data();
			const AlphanumericData = require_alphanumeric_data();
			const ByteData = require_byte_data();
			const KanjiData = require_kanji_data();
			const Regex = require_regex();
			const Utils = require_utils();
			const dijkstra = require_dijkstra();
			/**
			* Returns UTF8 byte length
			*
			* @param  {String} str Input string
			* @return {Number}     Number of byte
			*/
			function getStringByteLength(str) {
				return unescape(encodeURIComponent(str)).length;
			}
			/**
			* Get a list of segments of the specified mode
			* from a string
			*
			* @param  {Mode}   mode Segment mode
			* @param  {String} str  String to process
			* @return {Array}       Array of object with segments data
			*/
			function getSegments(regex, mode, str) {
				const segments = [];
				let result;
				while ((result = regex.exec(str)) !== null) segments.push({
					data: result[0],
					index: result.index,
					mode,
					length: result[0].length
				});
				return segments;
			}
			/**
			* Extracts a series of segments with the appropriate
			* modes from a string
			*
			* @param  {String} dataStr Input string
			* @return {Array}          Array of object with segments data
			*/
			function getSegmentsFromString(dataStr) {
				const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
				const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
				let byteSegs;
				let kanjiSegs;
				if (Utils.isKanjiModeEnabled()) {
					byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
					kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
				} else {
					byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
					kanjiSegs = [];
				}
				return numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs).sort(function(s1, s2) {
					return s1.index - s2.index;
				}).map(function(obj) {
					return {
						data: obj.data,
						mode: obj.mode,
						length: obj.length
					};
				});
			}
			/**
			* Returns how many bits are needed to encode a string of
			* specified length with the specified mode
			*
			* @param  {Number} length String length
			* @param  {Mode} mode     Segment mode
			* @return {Number}        Bit length
			*/
			function getSegmentBitsLength(length, mode) {
				switch (mode) {
					case Mode.NUMERIC: return NumericData.getBitsLength(length);
					case Mode.ALPHANUMERIC: return AlphanumericData.getBitsLength(length);
					case Mode.KANJI: return KanjiData.getBitsLength(length);
					case Mode.BYTE: return ByteData.getBitsLength(length);
				}
			}
			/**
			* Merges adjacent segments which have the same mode
			*
			* @param  {Array} segs Array of object with segments data
			* @return {Array}      Array of object with segments data
			*/
			function mergeSegments(segs) {
				return segs.reduce(function(acc, curr) {
					const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
					if (prevSeg && prevSeg.mode === curr.mode) {
						acc[acc.length - 1].data += curr.data;
						return acc;
					}
					acc.push(curr);
					return acc;
				}, []);
			}
			/**
			* Generates a list of all possible nodes combination which
			* will be used to build a segments graph.
			*
			* Nodes are divided by groups. Each group will contain a list of all the modes
			* in which is possible to encode the given text.
			*
			* For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
			* The group for '12345' will contain then 3 objects, one for each
			* possible encoding mode.
			*
			* Each node represents a possible segment.
			*
			* @param  {Array} segs Array of object with segments data
			* @return {Array}      Array of object with segments data
			*/
			function buildNodes(segs) {
				const nodes = [];
				for (let i = 0; i < segs.length; i++) {
					const seg = segs[i];
					switch (seg.mode) {
						case Mode.NUMERIC:
							nodes.push([
								seg,
								{
									data: seg.data,
									mode: Mode.ALPHANUMERIC,
									length: seg.length
								},
								{
									data: seg.data,
									mode: Mode.BYTE,
									length: seg.length
								}
							]);
							break;
						case Mode.ALPHANUMERIC:
							nodes.push([seg, {
								data: seg.data,
								mode: Mode.BYTE,
								length: seg.length
							}]);
							break;
						case Mode.KANJI:
							nodes.push([seg, {
								data: seg.data,
								mode: Mode.BYTE,
								length: getStringByteLength(seg.data)
							}]);
							break;
						case Mode.BYTE: nodes.push([{
							data: seg.data,
							mode: Mode.BYTE,
							length: getStringByteLength(seg.data)
						}]);
					}
				}
				return nodes;
			}
			/**
			* Builds a graph from a list of nodes.
			* All segments in each node group will be connected with all the segments of
			* the next group and so on.
			*
			* At each connection will be assigned a weight depending on the
			* segment's byte length.
			*
			* @param  {Array} nodes    Array of object with segments data
			* @param  {Number} version QR Code version
			* @return {Object}         Graph of all possible segments
			*/
			function buildGraph(nodes, version) {
				const table = {};
				const graph = { start: {} };
				let prevNodeIds = ["start"];
				for (let i = 0; i < nodes.length; i++) {
					const nodeGroup = nodes[i];
					const currentNodeIds = [];
					for (let j = 0; j < nodeGroup.length; j++) {
						const node = nodeGroup[j];
						const key = "" + i + j;
						currentNodeIds.push(key);
						table[key] = {
							node,
							lastCount: 0
						};
						graph[key] = {};
						for (let n = 0; n < prevNodeIds.length; n++) {
							const prevNodeId = prevNodeIds[n];
							if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
								graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
								table[prevNodeId].lastCount += node.length;
							} else {
								if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
								graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
							}
						}
					}
					prevNodeIds = currentNodeIds;
				}
				for (let n = 0; n < prevNodeIds.length; n++) graph[prevNodeIds[n]].end = 0;
				return {
					map: graph,
					table
				};
			}
			/**
			* Builds a segment from a specified data and mode.
			* If a mode is not specified, the more suitable will be used.
			*
			* @param  {String} data             Input data
			* @param  {Mode | String} modesHint Data mode
			* @return {Segment}                 Segment
			*/
			function buildSingleSegment(data, modesHint) {
				let mode;
				const bestMode = Mode.getBestModeForData(data);
				mode = Mode.from(modesHint, bestMode);
				if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error("\"" + data + "\" cannot be encoded with mode " + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
				if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
				switch (mode) {
					case Mode.NUMERIC: return new NumericData(data);
					case Mode.ALPHANUMERIC: return new AlphanumericData(data);
					case Mode.KANJI: return new KanjiData(data);
					case Mode.BYTE: return new ByteData(data);
				}
			}
			/**
			* Builds a list of segments from an array.
			* Array can contain Strings or Objects with segment's info.
			*
			* For each item which is a string, will be generated a segment with the given
			* string and the more appropriate encoding mode.
			*
			* For each item which is an object, will be generated a segment with the given
			* data and mode.
			* Objects must contain at least the property "data".
			* If property "mode" is not present, the more suitable mode will be used.
			*
			* @param  {Array} array Array of objects with segments data
			* @return {Array}       Array of Segments
			*/
			exports.fromArray = function fromArray(array) {
				return array.reduce(function(acc, seg) {
					if (typeof seg === "string") acc.push(buildSingleSegment(seg, null));
					else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
					return acc;
				}, []);
			};
			/**
			* Builds an optimized sequence of segments from a string,
			* which will produce the shortest possible bitstream.
			*
			* @param  {String} data    Input string
			* @param  {Number} version QR Code version
			* @return {Array}          Array of segments
			*/
			exports.fromString = function fromString(data, version) {
				const graph = buildGraph(buildNodes(getSegmentsFromString(data, Utils.isKanjiModeEnabled())), version);
				const path = dijkstra.find_path(graph.map, "start", "end");
				const optimizedSegs = [];
				for (let i = 1; i < path.length - 1; i++) optimizedSegs.push(graph.table[path[i]].node);
				return exports.fromArray(mergeSegments(optimizedSegs));
			};
			/**
			* Splits a string in various segments with the modes which
			* best represent their content.
			* The produced segments are far from being optimized.
			* The output of this function is only used to estimate a QR Code version
			* which may contain the data.
			*
			* @param  {string} data Input string
			* @return {Array}       Array of segments
			*/
			exports.rawSplit = function rawSplit(data) {
				return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
			};
		}));
		//#endregion
		//#region src/client-remote-control.jsx
		var import_qrcode = (/* @__PURE__ */ __commonJSMin(((exports) => {
			const Utils = require_utils();
			const ECLevel = require_error_correction_level();
			const BitBuffer = require_bit_buffer();
			const BitMatrix = require_bit_matrix();
			const AlignmentPattern = require_alignment_pattern();
			const FinderPattern = require_finder_pattern();
			const MaskPattern = require_mask_pattern();
			const ECCode = require_error_correction_code();
			const ReedSolomonEncoder = require_reed_solomon_encoder();
			const Version = require_version();
			const FormatInfo = require_format_info();
			const Mode = require_mode();
			const Segments = require_segments();
			/**
			* QRCode for JavaScript
			*
			* modified by Ryan Day for nodejs support
			* Copyright (c) 2011 Ryan Day
			*
			* Licensed under the MIT license:
			*   http://www.opensource.org/licenses/mit-license.php
			*
			//---------------------------------------------------------------------
			// QRCode for JavaScript
			//
			// Copyright (c) 2009 Kazuhiko Arase
			//
			// URL: http://www.d-project.com/
			//
			// Licensed under the MIT license:
			//   http://www.opensource.org/licenses/mit-license.php
			//
			// The word "QR Code" is registered trademark of
			// DENSO WAVE INCORPORATED
			//   http://www.denso-wave.com/qrcode/faqpatent-e.html
			//
			//---------------------------------------------------------------------
			*/
			/**
			* Add finder patterns bits to matrix
			*
			* @param  {BitMatrix} matrix  Modules matrix
			* @param  {Number}    version QR Code version
			*/
			function setupFinderPattern(matrix, version) {
				const size = matrix.size;
				const pos = FinderPattern.getPositions(version);
				for (let i = 0; i < pos.length; i++) {
					const row = pos[i][0];
					const col = pos[i][1];
					for (let r = -1; r <= 7; r++) {
						if (row + r <= -1 || size <= row + r) continue;
						for (let c = -1; c <= 7; c++) {
							if (col + c <= -1 || size <= col + c) continue;
							if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
							else matrix.set(row + r, col + c, false, true);
						}
					}
				}
			}
			/**
			* Add timing pattern bits to matrix
			*
			* Note: this function must be called before {@link setupAlignmentPattern}
			*
			* @param  {BitMatrix} matrix Modules matrix
			*/
			function setupTimingPattern(matrix) {
				const size = matrix.size;
				for (let r = 8; r < size - 8; r++) {
					const value = r % 2 === 0;
					matrix.set(r, 6, value, true);
					matrix.set(6, r, value, true);
				}
			}
			/**
			* Add alignment patterns bits to matrix
			*
			* Note: this function must be called after {@link setupTimingPattern}
			*
			* @param  {BitMatrix} matrix  Modules matrix
			* @param  {Number}    version QR Code version
			*/
			function setupAlignmentPattern(matrix, version) {
				const pos = AlignmentPattern.getPositions(version);
				for (let i = 0; i < pos.length; i++) {
					const row = pos[i][0];
					const col = pos[i][1];
					for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++) if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
					else matrix.set(row + r, col + c, false, true);
				}
			}
			/**
			* Add version info bits to matrix
			*
			* @param  {BitMatrix} matrix  Modules matrix
			* @param  {Number}    version QR Code version
			*/
			function setupVersionInfo(matrix, version) {
				const size = matrix.size;
				const bits = Version.getEncodedBits(version);
				let row, col, mod;
				for (let i = 0; i < 18; i++) {
					row = Math.floor(i / 3);
					col = i % 3 + size - 8 - 3;
					mod = (bits >> i & 1) === 1;
					matrix.set(row, col, mod, true);
					matrix.set(col, row, mod, true);
				}
			}
			/**
			* Add format info bits to matrix
			*
			* @param  {BitMatrix} matrix               Modules matrix
			* @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
			* @param  {Number}    maskPattern          Mask pattern reference value
			*/
			function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
				const size = matrix.size;
				const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
				let i, mod;
				for (i = 0; i < 15; i++) {
					mod = (bits >> i & 1) === 1;
					if (i < 6) matrix.set(i, 8, mod, true);
					else if (i < 8) matrix.set(i + 1, 8, mod, true);
					else matrix.set(size - 15 + i, 8, mod, true);
					if (i < 8) matrix.set(8, size - i - 1, mod, true);
					else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
					else matrix.set(8, 15 - i - 1, mod, true);
				}
				matrix.set(size - 8, 8, 1, true);
			}
			/**
			* Add encoded data bits to matrix
			*
			* @param  {BitMatrix}  matrix Modules matrix
			* @param  {Uint8Array} data   Data codewords
			*/
			function setupData(matrix, data) {
				const size = matrix.size;
				let inc = -1;
				let row = size - 1;
				let bitIndex = 7;
				let byteIndex = 0;
				for (let col = size - 1; col > 0; col -= 2) {
					if (col === 6) col--;
					while (true) {
						for (let c = 0; c < 2; c++) if (!matrix.isReserved(row, col - c)) {
							let dark = false;
							if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
							matrix.set(row, col - c, dark);
							bitIndex--;
							if (bitIndex === -1) {
								byteIndex++;
								bitIndex = 7;
							}
						}
						row += inc;
						if (row < 0 || size <= row) {
							row -= inc;
							inc = -inc;
							break;
						}
					}
				}
			}
			/**
			* Create encoded codewords from data input
			*
			* @param  {Number}   version              QR Code version
			* @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
			* @param  {ByteData} data                 Data input
			* @return {Uint8Array}                    Buffer containing encoded codewords
			*/
			function createData(version, errorCorrectionLevel, segments) {
				const buffer = new BitBuffer();
				segments.forEach(function(data) {
					buffer.put(data.mode.bit, 4);
					buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
					data.write(buffer);
				});
				const dataTotalCodewordsBits = (Utils.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
				if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
				while (buffer.getLengthInBits() % 8 !== 0) buffer.putBit(0);
				const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
				for (let i = 0; i < remainingByte; i++) buffer.put(i % 2 ? 17 : 236, 8);
				return createCodewords(buffer, version, errorCorrectionLevel);
			}
			/**
			* Encode input data with Reed-Solomon and return codewords with
			* relative error correction bits
			*
			* @param  {BitBuffer} bitBuffer            Data to encode
			* @param  {Number}    version              QR Code version
			* @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
			* @return {Uint8Array}                     Buffer containing encoded codewords
			*/
			function createCodewords(bitBuffer, version, errorCorrectionLevel) {
				const totalCodewords = Utils.getSymbolTotalCodewords(version);
				const dataTotalCodewords = totalCodewords - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
				const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
				const blocksInGroup1 = ecTotalBlocks - totalCodewords % ecTotalBlocks;
				const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
				const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
				const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
				const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
				const rs = new ReedSolomonEncoder(ecCount);
				let offset = 0;
				const dcData = new Array(ecTotalBlocks);
				const ecData = new Array(ecTotalBlocks);
				let maxDataSize = 0;
				const buffer = new Uint8Array(bitBuffer.buffer);
				for (let b = 0; b < ecTotalBlocks; b++) {
					const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
					dcData[b] = buffer.slice(offset, offset + dataSize);
					ecData[b] = rs.encode(dcData[b]);
					offset += dataSize;
					maxDataSize = Math.max(maxDataSize, dataSize);
				}
				const data = new Uint8Array(totalCodewords);
				let index = 0;
				let i, r;
				for (i = 0; i < maxDataSize; i++) for (r = 0; r < ecTotalBlocks; r++) if (i < dcData[r].length) data[index++] = dcData[r][i];
				for (i = 0; i < ecCount; i++) for (r = 0; r < ecTotalBlocks; r++) data[index++] = ecData[r][i];
				return data;
			}
			/**
			* Build QR Code symbol
			*
			* @param  {String} data                 Input string
			* @param  {Number} version              QR Code version
			* @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
			* @param  {MaskPattern} maskPattern     Mask pattern
			* @return {Object}                      Object containing symbol data
			*/
			function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
				let segments;
				if (Array.isArray(data)) segments = Segments.fromArray(data);
				else if (typeof data === "string") {
					let estimatedVersion = version;
					if (!estimatedVersion) {
						const rawSegments = Segments.rawSplit(data);
						estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
					}
					segments = Segments.fromString(data, estimatedVersion || 40);
				} else throw new Error("Invalid data");
				const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
				if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (!version) version = bestVersion;
				else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
				const dataBits = createData(version, errorCorrectionLevel, segments);
				const moduleCount = Utils.getSymbolSize(version);
				const modules = new BitMatrix(moduleCount);
				setupFinderPattern(modules, version);
				setupTimingPattern(modules);
				setupAlignmentPattern(modules, version);
				setupFormatInfo(modules, errorCorrectionLevel, 0);
				if (version >= 7) setupVersionInfo(modules, version);
				setupData(modules, dataBits);
				if (isNaN(maskPattern)) maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
				MaskPattern.applyMask(maskPattern, modules);
				setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
				return {
					modules,
					version,
					errorCorrectionLevel,
					maskPattern,
					segments
				};
			}
			/**
			* QR Code
			*
			* @param {String | Array} data                 Input data
			* @param {Object} options                      Optional configurations
			* @param {Number} options.version              QR Code version
			* @param {String} options.errorCorrectionLevel Error correction level
			* @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
			*/
			exports.create = function create(data, options) {
				if (typeof data === "undefined" || data === "") throw new Error("No input text");
				let errorCorrectionLevel = ECLevel.M;
				let version;
				let mask;
				if (typeof options !== "undefined") {
					errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
					version = Version.from(options.version);
					mask = MaskPattern.from(options.maskPattern);
					if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
				}
				return createSymbol(data, version, errorCorrectionLevel, mask);
			};
		})))();
		const PAIR_URL = "https://chatgpt.com/codex/pair?pairing_code=";
		const STATUS_KEYS = {
			connected: "remoteConnected",
			connecting: "remoteConnecting",
			waiting: "remoteWaiting",
			error: "remoteError",
			stopped: "remoteStopped"
		};
		const MARGIN = 2;
		function Qr({ value, label }) {
			let modules;
			try {
				modules = (0, import_qrcode.create)(value, { errorCorrectionLevel: "M" }).modules;
			} catch {
				return null;
			}
			const size = modules.size;
			let path = "";
			for (let row = 0; row < size; row++) for (let column = 0; column < size; column++) if (modules.get(row, column)) path += `M${column + MARGIN} ${row + MARGIN}h1v1h-1z`;
			const span = size + MARGIN * 2;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "codexSubscriptionRemoteQr",
				role: "img",
				"aria-label": label,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${span} ${span}`,
					shapeRendering: "crispEdges",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
						width: span,
						height: span,
						fill: "#fff"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						d: path,
						fill: "#000"
					})]
				})
			});
		}
		/** Beta: show this DSH in the ChatGPT mobile app's Codex list (Remote Control). */
		function RemoteControlCard({ rpc, preference, snapshot, t, active = true }) {
			const [state, setState] = (0, react.useState)();
			const [pairing, setPairing] = (0, react.useState)();
			const [busy, setBusy] = (0, react.useState)(false);
			const [failed, setFailed] = (0, react.useState)(false);
			const [now, setNow] = (0, react.useState)(Date.now());
			const [clients, setClients] = (0, react.useState)();
			const [removing, setRemoving] = (0, react.useState)();
			const alive = (0, react.useRef)(false);
			const generation = (0, react.useRef)(0);
			const valid = (token) => alive.current && generation.current === token;
			const on = snapshot.remoteControl === "on";
			const read = async () => {
				const token = generation.current;
				try {
					const result = await rpc.call(CHANNEL, "remote/status", {});
					if (valid(token) && result.ok) setState(result.value);
				} catch {}
			};
			const readClients = async () => {
				const token = generation.current;
				try {
					const result = await rpc.call(CHANNEL, "remote/clients", {});
					if (valid(token) && result.ok) setClients(result.value);
				} catch {}
			};
			(0, react.useLayoutEffect)(() => {
				alive.current = true;
				if (!on) {
					setState(void 0);
					setPairing(void 0);
					setClients(void 0);
					setBusy(false);
					setRemoving(void 0);
					setFailed(false);
				}
				return () => {
					alive.current = false;
					generation.current += 1;
				};
			}, [on]);
			(0, react.useEffect)(() => {
				if (!on) {
					setClients(void 0);
					return;
				}
				if (!active) return void 0;
				let stopped = false, timer;
				const poll = async () => {
					await readClients();
					if (!stopped) timer = setTimeout(poll, 2e4);
				};
				poll();
				return () => {
					stopped = true;
					clearTimeout(timer);
				};
			}, [
				on,
				rpc,
				active
			]);
			const remove = async (client) => {
				if (removing) return;
				const token = generation.current;
				setRemoving(client.clientId);
				setFailed(false);
				try {
					const result = await rpc.call(CHANNEL, "remote/revoke", { clientId: client.clientId });
					if (!valid(token)) return;
					if (result.ok) setClients(result.value);
					else setFailed(true);
				} catch {
					if (valid(token)) setFailed(true);
				} finally {
					if (valid(token)) setRemoving(void 0);
				}
			};
			(0, react.useEffect)(() => {
				if (!on) {
					setState(void 0);
					setPairing(void 0);
					return;
				}
				if (!active) return void 0;
				let stopped = false, timer;
				const poll = async () => {
					await read();
					if (!stopped) timer = setTimeout(poll, 4e3);
				};
				poll();
				return () => {
					stopped = true;
					clearTimeout(timer);
				};
			}, [
				on,
				rpc,
				active
			]);
			(0, react.useEffect)(() => {
				if (!pairing || !active) return void 0;
				setNow(Date.now());
				const timer = setInterval(() => setNow(Date.now()), 5e3);
				return () => clearInterval(timer);
			}, [pairing, active]);
			const pair = async () => {
				if (busy) return;
				const token = generation.current;
				setBusy(true);
				setFailed(false);
				try {
					const result = await rpc.call(CHANNEL, "remote/pair", {});
					if (!valid(token)) return;
					if (!result.ok) {
						setFailed(true);
						return;
					}
					setPairing(result.value);
					setNow(Date.now());
					read();
				} catch {
					if (valid(token)) setFailed(true);
				} finally {
					if (valid(token)) setBusy(false);
				}
			};
			const expired = pairing && pairing.expiresAt <= now;
			const minutes = pairing ? Math.max(0, Math.ceil((pairing.expiresAt - now) / 6e4)) : 0;
			const status = state?.status ?? "connecting";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "codexSubscriptionCard codexSubscriptionPreferencesCard",
				"aria-label": t("remoteTitle"),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "codexSubscriptionPreference",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionPreferenceCopy",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(SettingsLabel, {
							description: [t("remoteHint"), t("remoteLimits")].join(" "),
							children: [
								t("remoteTitle"),
								" ",
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: "Beta" })
							]
						}), snapshot.status === "ready" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Hint, { children: t(on ? "state_remote_on" : "state_remote_off") }) : null]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Switch, {
						checked: on,
						label: t("remoteTitle"),
						disabled: !snapshot.writable,
						onChange: (next) => {
							preference.set({ remoteControl: next ? "on" : "off" });
						}
					})]
				}), on ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "codexSubscriptionDivider" }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionPreference",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							role: "status",
							children: [
								status === "connected" && state?.phones > 0 ? t("remotePhones").replace("{count}", String(state.phones)) : t(STATUS_KEYS[status] ?? "remoteConnecting"),
								status === "error" && state?.lastError ? ` · ${state.lastError}` : "",
								status !== "connected" && state?.phones > 0 ? ` · ${t("remotePhones").replace("{count}", String(state.phones))}` : ""
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							disabled: busy || status === "stopped",
							onClick: () => {
								pair();
							},
							children: t(pairing ? "remotePairAgain" : "remotePair")
						})]
					}),
					status === "waiting" && state?.lastError === "conflict" && state?.reconnects >= 6 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						role: "status",
						className: "codexSubscriptionHelp",
						children: t("remoteConflictLong")
					}) : null,
					status === "error" && state?.lastError === "unauthorized" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						role: "status",
						className: "codexSubscriptionHelp",
						children: t("remoteUnauthorizedHelp")
					}) : null,
					failed ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "codexSubscriptionHelp",
						children: t("remotePairFailed")
					}) : null,
					pairing && !expired ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionRemotePair",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Qr, {
							value: `${PAIR_URL}${pairing.pairingCode}`,
							label: t("remoteQrLabel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "codexSubscriptionHelp",
								children: t("remotePairSteps")
							}),
							pairing.manualCode ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "codexSubscriptionRemoteCode",
								"aria-label": t("remoteManualCode"),
								children: pairing.manualCode
							}) : null,
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "codexSubscriptionHelp",
								children: t("remoteExpires").replace("{minutes}", String(minutes))
							})
						] })]
					}) : pairing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "codexSubscriptionHelp",
						children: t("remoteExpired")
					}) : null,
					clients && clients.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "codexSubscriptionRemoteClients",
						role: "list",
						"aria-label": t("remotePaired"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "codexSubscriptionPreferenceLabel",
							children: t("remotePaired")
						}), clients.map((client) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							role: "listitem",
							className: "codexSubscriptionPreference",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: [
								client.name ?? t("remotePhoneUnknown"),
								client.platform,
								client.lastSeenAt ? t("remoteLastSeen").replace("{date}", new Date(client.lastSeenAt).toLocaleString(uiLocale())) : null
							].filter(Boolean).join(" · ") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								disabled: Boolean(removing),
								onClick: () => {
									remove(client);
								},
								children: t("remoteRevoke")
							})]
						}, client.clientId))]
					}) : null
				] }) : null]
			});
		}
		//#endregion
		//#region src/client.jsx
		const inject = [
			"slots",
			"locale",
			"connection"
		];
		function LiteSection({ preference, rpc, accountStatus, t }) {
			const snapshot = usePreferenceSnapshot(preference);
			const accountSnapshot = useAccountStatusSnapshot(accountStatus);
			const [actionEpoch, setActionEpoch] = (0, react.useState)(0);
			const invalidateRemote = () => setActionEpoch((value) => value + 1);
			const account = accountSnapshot.account;
			const identity = account === void 0 ? void 0 : JSON.stringify([account.authenticated, (account.accounts ?? []).find((item) => item.active)?.id ?? null]);
			const accountEpoch = (0, react.useRef)({
				identity,
				value: 0
			});
			const effectiveIdentity = accountSnapshot.status === "loading" ? accountEpoch.current.identity : identity;
			if (accountEpoch.current.identity !== effectiveIdentity) accountEpoch.current = {
				identity: effectiveIdentity,
				value: accountEpoch.current.value + 1
			};
			const acceptAccount = (next) => {
				invalidateRemote();
				accountStatus.acceptAccount(next);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: "codexSubscription",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "codexSubscriptionHead",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("title") })
					}),
					snapshot.error ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						role: "alert",
						children: [
							t("preferenceFailed"),
							" ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									preference.retry();
								},
								children: t("preferenceRetry")
							})
						]
					}) : null,
					snapshot.hostReadOnly ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						role: "status",
						children: t("settingsReadonly")
					}) : null,
					accountSnapshot.status === "error" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AccountFailureCard, {
						accountStatus,
						snapshot: accountSnapshot,
						t,
						rpc,
						onAccountChange: invalidateRemote,
						onRecovered: () => {
							preference.refreshModels();
						}
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AccountCard, {
						rpc,
						t,
						account: accountSnapshot.account,
						setAccount: acceptAccount,
						onAccountChange: invalidateRemote,
						onSignedOut: () => {
							preference.refreshModels();
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(RemoteControlCard, {
						rpc,
						preference,
						snapshot,
						t
					}, `${actionEpoch}:${accountEpoch.current.value}`)
				]
			});
		}
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "codex-subscription: copy");
			ctx.effect(() => {
				const tag = document.createElement("style");
				tag.dataset.plugin = "dsh-codex-subscription";
				tag.textContent = STYLE;
				document.head.append(tag);
				return () => tag.remove();
			}, "codex-subscription: style");
			const rpc = createSubscriptionRpcClient(ctx.get("connection").rpc);
			const preference = createPreferenceController(rpc);
			const accountStatus = createAccountStatusController(rpc);
			ctx.effect(() => {
				preference.load();
				accountStatus.load();
				const disposeReset = ctx.on("connection/reset", () => {
					preference.load();
					accountStatus.reload();
				});
				return () => {
					disposeReset?.();
					preference.dispose();
					accountStatus.dispose();
				};
			}, "codex-subscription: account and remote settings");
			const t = ctx.locale.bind(NS);
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "codex-subscription",
				order: 15,
				label: () => t("nav"),
				locale: NS,
				inject: () => ({
					preference,
					rpc,
					accountStatus,
					t
				})
			}, LiteSection));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map