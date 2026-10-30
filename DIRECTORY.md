# Directory listing copy

Use this factual copy when listing the lite build of `dsh-codex-subscription` in a DSH plugin directory. The repository README remains the installation authority.

## Short description

Use a ChatGPT subscription in DeepSeek Harness through independent OAuth sign-in, with the Codex models, backend-reported quota, and Beta phone remote control.

## 中文短描述

通过独立 OAuth 登录在 DeepSeek Harness 中使用 ChatGPT 订阅，提供 Codex 模型、服务端实际额度和 Beta 手机远程控制。

## Facts

- Package: `dsh-codex-subscription`
- Version line: `3.2.1-lite.x` (local build; not the published full version)
- Provider: `openai-codex`
- Authentication: independent ChatGPT OAuth managed on the DSH host
- Codex CLI required: no
- OpenAI API key required: no
- Platforms: official DSH on Windows, macOS, and Linux
- Main capabilities: Codex models, model-aware context windows, Fast mode, backend-reported quota and account quota, and Beta remote control with pairing, paired-device listing and revocation
- Removed in the lite line: subscription web search, image generation/editing, sketch, connectors, voice, and the separate subagent runtime — DSH owns its own models and tools
- Safety boundary: subscription failures remain visible and never silently fall back to another paid provider

## Install

```sh
dsh plugin --profile web add /path/to/dsh-codex-subscription
```

Do not describe this plugin as reusing a local Codex CLI login, copying `~/.codex/auth.json`, requiring Windows, or providing Claude, Grok, Gemini, or GitHub Copilot subscriptions.
