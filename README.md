# Open in Browser (Cursor)

Open the current file in your default browser or in any other installed browser. A maintained fork of [techer.open-in-browser](https://github.com/SudoKillMe/vscode-extensions-open-in-browser), last released in 2018.

## Install

Search for `Open in Browser` in the Extensions panel of Cursor and pick the one published by `cloudo`, or install it by id:

```bash
cursor --install-extension cloudo.open-in-browser
```

To build and install from source instead: `npm install && npm run install-cursor`.

## Usage

|command|Windows, Linux|Mac|
|------|------|------|
|open in default browser|`Alt + B`|`Ctrl + Alt + B`|
|open in specified browser|`Shift + Alt + B`|`Shift + Ctrl + Alt + B`|

Mac has its own bindings because `Option + B` types a character and `Cmd + Option + B` toggles the secondary side bar.

Both commands are also in the command palette and in the context menu of the editor, the editor tab and the explorer.

![the two commands the extension adds to the context menu](images/context-menu.png)

## Settings

|setting|default|description|
|------|------|------|
|`open-in-browser.default`|`""`|browser opened by the default browser command, empty means the system default|
|`open-in-browser.showForAllFiles`|`false`|show the context menu items for every file, not only for html|

`open-in-browser.default` takes any of *chrome*, *google chrome*, *gc*, *firefox*, *ff*, *edge*, *msedge*, *safari*, *opera*, *chromium*, *firefox developer edition*, *fde*, *ie*, *iexplore*.

## Development

Run `npm run watch`, then press `F5` in Cursor to start an extension host with the extension loaded.

`master` is protected, so changes go through pull requests. Bump `version` in `package.json` and add a `CHANGELOG.md` entry in the same one: merging it publishes the release to Open VSX, which is where Cursor takes extensions from.

## License

[MIT](LICENSE.txt), see the [changelog](CHANGELOG.md) for what changed when.
