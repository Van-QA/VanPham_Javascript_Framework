const { After, AfterAll, BeforeAll } = require('cucumber');
const collectionHelpers = require('../helper/api/collection_helper');
const scope = require('./scope');
const CONFIG = require('../../config/env');
const puppeteer = require('puppeteer');
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

// Here is where you might clean up database tables to have a clean slate before the tests run
BeforeAll(async () => {
  const headless = CONFIG.ENVIROMENT.HEADLESS;
  const slowMo = CONFIG.ENVIROMENT.SLOW_MO;
  scope.host = CONFIG.ENVIROMENT.HOST;
  scope.apiHost = CONFIG.ENVIROMENT.API_HOST;
  scope.driver = puppeteer;
  scope.context = {};
  if (!scope.browser) { scope.browser = await scope.driver.launch({ headless, slowMo }); }
  scope.context.currentPage = await scope.browser.newPage();
  scope.context.currentPage.setViewport({ width: 1366, height: 768 });
  const url = scope.host;
  await scope.context.currentPage.goto(url, {
    waitUntil: 'networkidle2'
  });
});

// Here we clean up the browser session
After(async () => {
  if (scope.browser && scope.context.currentPage) {
    const cookies = await scope.context.currentPage.cookies();
    if (cookies && cookies.length > 0) {
      await scope.context.currentPage.deleteCookie(...cookies);
    }
  }
});

AfterAll(async () => {
  const { newCollectionID } = await scope.context;
  await scope.context.currentPage.close();
  scope.context.currentPage = null;
  if (scope.browser) { await scope.browser.close(); }
  if (newCollectionID) {
    await collectionHelpers.deleteCollectionWithAPI(newCollectionID);
    console.log('Delete collection with ID: ' + newCollectionID);
  }
});
