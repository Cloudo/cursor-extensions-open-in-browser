'use strict';
import * as vscode from 'vscode';
import {
    openDefault,
    openBySpecify
} from './index';

export function activate(context: vscode.ExtensionContext) {

    let openDefaultCommand = vscode.commands.registerCommand('open-in-browser.openInDefaultBrowser', (path) => {
        openDefault(path);
    });
    let openBySpecifyCommand = vscode.commands.registerCommand('open-in-browser.openInSpecifyBrowser', (path) => {
        openBySpecify(path);
    });

    context.subscriptions.push(openDefaultCommand);
    context.subscriptions.push(openBySpecifyCommand);
}

export function deactivate() {
}
