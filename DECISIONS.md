# Decisions

## 2026-08-20 - Ship the fork under its own extension id

`cloudo.open-in-browser` instead of republishing as `techer.open-in-browser`. The upstream id is alive in the
Cursor marketplace (v2.0.0, ~67k downloads via Open VSX), so reusing it would either be impossible or would
collide with updates pushed by the original publisher.

## 2026-08-20 - Distribute as a local .vsix, Open VSX later

Cursor has no direct publishing endpoint - its marketplace (`marketplace.cursorapi.com`) mirrors Open VSX.
`npm run install-cursor` covers the personal use case; publishing needs an Open VSX namespace and token,
which is a separate step.

## 2026-08-20 - `open@8` instead of `opn` and `open@10`

`opn` is unmaintained. `open@10` is ESM only and would force a bundler into a build that is otherwise plain
`tsc`. `open@8` is the last CommonJS release, still maintained enough, and exposes cross platform app
constants (`apps.chrome`, `apps.firefox`, `apps.edge`).

## 2026-08-20 - Menu visibility through a `config.` when clause

`when: resourceLangId == html || config.open-in-browser.showForAllFiles` instead of a context key set from
the extension. A context key would track the active editor and therefore be wrong for the file the user
right clicks in the explorer.

## 2026-08-20 - `extensionKind: ["ui", "workspace"]` and explicit capabilities

Cursor 3.16 is VS Code 1.128, where workspace trust and virtual workspaces gate extensions. Without
`untrustedWorkspaces.supported` the commands silently do nothing in restricted mode. `ui` first makes the
browser launch on the local machine in remote setups; `virtualWorkspaces` is false because the browser needs
a real path on disk.
