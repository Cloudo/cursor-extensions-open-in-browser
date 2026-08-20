# Change Log
### [3.0.0]
Cursor fork, published as `cloudo.open-in-browser`.

* commands renamed from `extension.*` to `open-in-browser.*`
* supported in untrusted workspaces, declared as a `ui` extension for remote setups
* `opn` replaced with `open@8`, Edge added on Mac and Linux
* errors are reported: unsaved file, unknown browser in settings, browser not installed
* separate mac keybindings: `ctrl+alt+b` and `shift+ctrl+alt+b`, since `option+b` types a character and `cmd+option+b` is taken by the secondary side bar
* new setting `open-in-browser.showForAllFiles`
* build cleaned up: `@types/vscode`, TypeScript 5, `@vscode/vsce`, dev dependencies no longer shipped

### [2.0.0]
rewritten in TypeScript, `opn` used to launch browsers

added Chromium and Firefox Developer Edition

### [1.2.0]
added context menu option to tab bar

### [1.1.1]
add `opera` support

change icon;  beautiful, right?

change Licence
### [1.0.0]
add `default browser` configuration option

add `open in other browsers`

### [0.0.3]
add `open file by right click menu item`

fix some bug

### [0.0.2]
add shortcut `Alt + B` 

modify the command on linux...

### [0.0.1]

BASIC SUPPORT...
