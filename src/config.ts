import { QuickPickItem } from "vscode";

const { apps } = require('open');

interface PickItem extends QuickPickItem {
  [propName: string]: any;
}

const platform = process.platform;

// apps.* come from `open` and already resolve the binary name per platform
const chromeItem: PickItem = {
  description: "Windows, Mac, Linux",
  detail: "A fast, secure, and free web browser built for the modern web",
  label: "Google Chrome",
  standardName: apps.chrome,
  acceptName: ['chrome', 'google chrome', 'google-chrome', 'gc']
};

const chromiumItem: PickItem = {
  description: "Mac, Linux",
  detail: "The open source project behind Google Chrome",
  label: "Chromium",
  standardName: platform === 'darwin' ? 'Chromium' : 'chromium-browser',
  acceptName: ['chromium']
};
const firefoxItem: PickItem = {
  description: "Windows, Mac, Linux",
  detail: "A fast, smart and personal web browser",
  label: "Mozilla Firefox",
  standardName: apps.firefox,
  acceptName: ['firefox', 'ff', 'mozilla firefox']
};
const firefoxDeveloperItem: PickItem = {
  description: "Mac",
  detail: "A fast, smart and personal web browser",
  label: "Mozilla Firefox Developer Edition",
  standardName: "FirefoxDeveloperEdition",
  acceptName: ['firefox developer', 'fde', 'firefox developer edition']
};

const ieItem: PickItem = {
  description: "Windows",
  detail: "A slightly outdated browser",
  label: "Microsoft IE",
  standardName: "iexplore",
  acceptName: ['ie', 'iexplore']
};
const edgeItem: PickItem = {
  description: "Windows, Mac, Linux",
  detail: "The chromium based browser from Microsoft",
  label: "Microsoft Edge",
  standardName: apps.edge,
  acceptName: ['edge', 'msedge', 'microsoftedge']
};

const safariItem: PickItem = {
  description: "Mac",
  detail: "A fast, efficient browser on Mac",
  label: "Apple Safari",
  standardName: "safari",
  acceptName: ['safari']
};

const operaItem: PickItem = {
  description: "Windows, Mac, Linux",
  detail: 'A fast, secure, easy-to-use browser',
  label: 'Opera',
  standardName: 'opera',
  acceptName: ['opera']
};

const browsers = [chromeItem, firefoxItem, edgeItem, operaItem];

if (platform === 'win32') {
  browsers.push(ieItem);
} else if (platform === 'darwin') {
  browsers.push(safariItem);
  browsers.push(chromiumItem);
  browsers.push(firefoxDeveloperItem);
} else {
  browsers.push(chromiumItem);
}

export default {
  browsers: browsers,
  app: 'open-in-browser'
};
