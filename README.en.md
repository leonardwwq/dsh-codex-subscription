# DSH Codex Subscription Lite

[简体中文](README.md)

This is an **unofficial lightweight fork** of [WSL043's DSH Codex Subscription](https://github.com/WSL043/dsh-codex-subscription), not an official upstream release. It aims to integrate ChatGPT / Codex subscriptions with DeepSeek Harness (DSH), with optional phone remote control.

It retains plugin registration, ChatGPT sign-in and account management, subscription model integration, and remote-control enablement, pairing and device management. DSH continues to manage its own models and tools. This plugin no longer registers its extra search, image generation, sketch, connector, voice, or standalone subagent features, and no longer provides their settings pages.

When upgrading from the full edition, Lite ignores its saved hidden-model preferences without deleting them. Returning to the full edition restores those preferences.

Install the locally built plugin through DSH, then sign in under **Settings → Codex Subscription**. Remote Control is off by default; enable and pair it on the same page.

## Build

This repository requires Node.js `^22.19.0 || >=24.0.0` (excluding Node.js 23). With the locked dependencies already present, build directly:

```sh
./node_modules/.bin/tsdown --config tsdown.config.mjs
```

To reinstall dependencies, use pnpm 11.26.0 as pinned in `package.json`:

```sh
npx pnpm@11.26.0 install --frozen-lockfile
npx pnpm@11.26.0 build
```

Output is in `lib/`. Use `npx pnpm@11.26.0 pack` to make a local package, then explicitly select that artifact using the plugin installation method supported by your DSH version. For example, this machine's DSH 0.2.1-rc.5 web workspace accepts:

```sh
dsh plugin --profile web add -w "file:/absolute/path/to/dsh-codex-subscription-3.2.1-lite.1.tgz"
```

Replace the example with the actual path; whether `-w` is required depends on the profile's pnpm workspace configuration. Lite and the upstream full edition use the same package name, so the name alone does not distinguish their sources; check the profile's dependency source to avoid installing or overwriting the wrong version. Keep the artifact at a stable path and record its version and checksum; moving or deleting a file referenced by a profile can prevent reinstallation.

Before installing or upgrading, back up the profile configuration, lockfile and original plugin artifact. To roll back, restore the original dependency source and lockfile, reinstall the saved original artifact, then restart DSH and verify it. Exact installation and restoration commands depend on the DSH version and the profile's package-manager configuration; these steps do not guarantee state compatibility across versions.

The DSH `plugin` command uses the profile's own package-manager configuration, which may differ from this repository's pnpm version and workspace settings. Review peer-dependency warnings and do not change automatic peer installation for the whole profile without assessing the other plugins.

## Troubleshooting

If the settings page reports that it cannot read the account status and the plugin log (`~/.dsh/state/codex-subscription/diagnostic-log.jsonl`) contains `openai-codex is already registered` or a similar duplicate-provider message, another profile entry may own the same provider. The usual cause is `providers: { openai-codex: {} }` under `@deepseek-ai/dsh-llm-pi-ai` in `cordis.patch.yml`. This plugin owns that route: remove the duplicate provider config, keep the plugin's own `codex-subscription` entry, and restart DSH.

## Feedback

Report fork-specific problems using the [fork's issue template](https://github.com/leonardwwq/dsh-codex-subscription/issues/new?template=install-problem.yml), including the DSH version, installation source and reproduction steps. Do not report fork-specific problems as upstream defects.

## Compatibility

`compatibility.json` distinguishes historical full-edition compatibility claims from Lite verification. Lite has only had credential-free installation, activation and status RPC smoke-tested on macOS with DSH 0.2.1-rc.5; real sign-in, model chat, phone pairing, and other platforms or versions are not established by that smoke test. Future DSH and mobile-app updates may require adaptation; keep a rollback available and test sign-in, chat and pairing before upgrading.

Some original source and tests remain for reference and still target features removed from Lite; the old full test suite is not, by itself, an acceptance test for Lite.

## License and attribution

This fork is based on [WSL043's upstream project](https://github.com/WSL043/dsh-codex-subscription). The [LICENSE](LICENSE) is the MIT License and retains `Copyright (c) 2026 WSL043`. Copies or substantial portions must retain the copyright and permission notices; the software is provided as is, without warranty. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party attribution.
