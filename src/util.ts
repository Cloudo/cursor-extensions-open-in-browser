import Config from './config';
import * as vscode from 'vscode';

const opener = require('open');

/**
 * get standardized browser name
 * @param name String
 */
export const standardizedBrowserName = (name: string = ''): any => {
  let _name = name.toLowerCase().trim();
  const browser = Config.browsers.find(item => {
    return item.acceptName.indexOf(_name) !== -1;
  });

  return browser ? browser.standardName : '';
};

/**
 * get default browser name from the settings
 */
export const defaultBrowser = (): string => {
  const config = vscode.workspace.getConfiguration(Config.app);
  return config ? config.get<string>('default', '') : '';
};

const failed = (browser: any) => {
  const name = Array.isArray(browser) ? browser[0] : browser;
  vscode.window.showErrorMessage(
    `Open in Browser: could not open ${name || 'the default browser'}. Check that it is installed.`
  );
};

export const open = async (path: string, browser: any = '') => {
  try {
    const subprocess = await opener(path, browser ? { app: { name: browser } } : {});
    // a named browser that exits non-zero is not installed; the system default may exit non-zero for other reasons
    if (browser) {
      subprocess.once('exit', (code: number) => code && failed(browser));
    }
  } catch (e) {
    failed(browser);
  }
};
