import { open, defaultBrowser, standardizedBrowserName } from './util';
import Config from './config';
import * as vscode from 'vscode';

/**
 * file to open: the one from the context menu, otherwise the active editor
 */
function resolveTarget (path: any): string | undefined {
  const uri: vscode.Uri | undefined = path && path.fsPath
    ? path
    : vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.uri;

  if (!uri) {
    vscode.window.showWarningMessage('Open in Browser: no file is open.');
    return;
  }
  // untitled or a virtual file system: there is nothing on disk for the browser to read
  if (uri.scheme !== 'file') {
    vscode.window.showWarningMessage('Open in Browser: save the file to disk first.');
    return;
  }

  return uri.fsPath;
}

/** 
 * open default browser
 * if you have specified browser in configuration file, 
 * the browser you specified will work.
 * else the system default browser will work.
 */
export const openDefault = (path: any): void => {
  const target = resolveTarget(path);
  if (!target) {
    return;
  }
  const configured = defaultBrowser();
  const browser = standardizedBrowserName(configured);
  if (configured && !browser) {
    vscode.window.showWarningMessage(
      `Open in Browser: unknown browser "${configured}" in open-in-browser.default, using the system default.`
    );
  }
  open(target, browser);
};

/** 
 * open specify browser
 */
export const openBySpecify = (path: any): void => {
  const target = resolveTarget(path);
  if (!target) {
    return;
  }
  vscode.window.showQuickPick(
    Config.browsers
  ).then(item => {
    if (!item) {
      return;
    }
    open(target, item.standardName);
  });
};
