# DSH Codex Subscription 轻量版

[English](README.en.md)

这是 [WSL043 的 DSH Codex Subscription](https://github.com/WSL043/dsh-codex-subscription) 的**非官方轻量 fork**，不是上游项目的官方版本。它旨在将 ChatGPT / Codex 订阅接入 DeepSeek Harness（DSH），并支持通过 ChatGPT 手机应用远程控制 DSH。

保留插件注册、ChatGPT 登录和账号管理、订阅模型适配，以及手机远程控制的开关、配对和设备管理。DSH 自己的模型与工具仍由 DSH 管理。轻量版不再注册本插件原有的搜索、生图、草图、连接器、语音和独立子任务功能，也不再提供这些功能的设置页面。

从完整版升级时，轻量版不会应用原有的隐藏模型设置，也不会删除它；换回完整版时原设置仍保留。

## 使用

构建本项目后，通过 DSH 的插件安装方式安装这个本地构建的插件；在 DSH 的 **设置 → Codex 订阅** 中登录 ChatGPT。需要手机远控时，在同一页面打开远程控制并按提示配对。远控默认关闭。

## 构建

项目要求 Node.js `^22.19.0 || >=24.0.0`（不包括 Node.js 23）。依赖已按 `pnpm-lock.yaml` 就位时，可以直接构建：

```sh
./node_modules/.bin/tsdown --config tsdown.config.mjs
```

需要重新安装依赖时，请使用 `package.json` 指定的 pnpm 11.26.0：

```sh
npx pnpm@11.26.0 install --frozen-lockfile
npx pnpm@11.26.0 build
```

构建产物位于 `lib/`。可使用 `npx pnpm@11.26.0 pack` 生成本地包，再通过所用 DSH 版本支持的插件安装方式明确选择该本地制品。例如，本机 DSH 0.2.1-rc.5 的 web workspace 可使用：

```sh
dsh plugin --profile web add -w "file:/绝对路径/dsh-codex-subscription-3.2.1-lite.1.tgz"
```

将示例路径替换成实际文件路径；`-w` 是否需要取决于 profile 的 pnpm workspace 配置。本地轻量版与上游完整版使用相同的包名，不能依靠包名区分来源；请核对 profile 的依赖来源，避免误装或覆盖其他版本。将制品保存在稳定路径并记录版本与校验值：如果 profile 依赖指向临时或桌面路径，移动或删除文件后可能无法重新安装。

安装或升级前备份 profile 配置、锁文件及原插件制品；回滚时恢复原依赖来源和锁文件，使用保存的原制品重新安装，并重启 DSH 验证。具体安装和恢复命令取决于 DSH 版本及 profile 的包管理配置；这些步骤不保证保留所有版本间的状态兼容性。

DSH 的 `plugin` 命令会使用 profile 自己的包管理配置，未必与本项目的 pnpm 版本或 workspace 设置相同。安装时请检查 peer 依赖警告；不要为修复单个插件而未经评估地修改整个 profile 的自动 peer 安装策略。

## 常见问题

设置页显示「无法读取账户状态」，插件日志（`~/.dsh/state/codex-subscription/diagnostic-log.jsonl`）里出现 `openai-codex is already registered` 或提示该 provider 已注册：说明 profile 里可能有别处注册了同一个 provider。最常见的是 `cordis.patch.yml` 给 `@deepseek-ai/dsh-llm-pi-ai` 配了 `providers: { openai-codex: {} }`。provider 路由归本插件所有，删掉那段配置（保留插件自身的 `codex-subscription` 条目）后重启 DSH 即可。

## 自用维护

这个 fork 独立维护：日常 CI 只检查本仓库的测试和构建，不比较上游 npm 包的版本，也不自动跟踪或发布上游更新。npm 自动发布已停用。保留上游归属和许可证不代表需要跟随上游版本。

## 反馈

本 fork 的问题请在 [fork 仓库的反馈模板](https://github.com/leonardwwq/dsh-codex-subscription/issues/new?template=install-problem.yml)中反馈，注明 DSH 版本、安装来源和复现步骤；不要将 fork 特有的问题直接当作上游缺陷报告。

## 兼容性

`compatibility.json` 区分原版历史兼容声明和轻量版验证证据。当前轻量版仅在 macOS 的 DSH 0.2.1-rc.5 上完成无凭据安装、激活和状态 RPC 冒烟验证；这不等于已验证真实登录、模型对话、手机配对或其他平台及版本。DSH 或 ChatGPT 手机端更新可能改变接口，无法保证未来版本无需适配。升级前请保留可回退的 DSH 和插件版本，并先验证登录、模型对话及手机配对。

本仓库保留了原版的部分源代码和测试用于参考，部分旧测试仍针对已移除的功能；不应将旧版完整测试集通过与否直接视为轻量版验收结果。

## 许可证与归属

本项目基于 [WSL043 的上游项目](https://github.com/WSL043/dsh-codex-subscription)；[LICENSE](LICENSE) 为 MIT License，保留 `Copyright (c) 2026 WSL043`。复制或分发本软件或其实质部分时须保留版权及许可声明；软件按原样提供，不附保证。第三方组件归属另见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
