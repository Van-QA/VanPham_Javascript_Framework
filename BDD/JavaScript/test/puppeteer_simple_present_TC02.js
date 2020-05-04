const puppeteer = require('puppeteer');
const assert = require('chai').assert;
const iPhone = puppeteer.devices['iPhone X'];

puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);
  await page.goto('https://www.unsplash.com/login', {
    waitUntil: 'networkidle2' });
  const USERNAME_INPUT_FIELD = '#user_email';
  const PASSWORD_INOUT_FIELD = '#user_password';
  const LOGIN_BUTTON_FIELD = ':nth-child(7) > .btn';
  const USER = {
    email: 'hashaha2212014@gmail.com',
    password: 'mypassword123!',
    username: '@duynguyenhvn',
    location: 'NashTech',
    fullname: 'Duy Nguyen'
  };
  const LOCATION_INPUT = '#user_location';
  const UPDATE_ACCOUNT_BUTTON = '.btn.btn-default.btn-block-level';
  const LOCATION = '//a[contains(text(),"VietNam")]';
  // input username
  await page.waitForSelector(USERNAME_INPUT_FIELD, { visible: true });
  await page.type(USERNAME_INPUT_FIELD, USER.email);
  // input password
  await page.waitForSelector(PASSWORD_INOUT_FIELD, { visible: true });
  await page.type(PASSWORD_INOUT_FIELD, USER.password);
  // click login button
  await page.waitForSelector(LOGIN_BUTTON_FIELD, { visible: true });
  await page.click(LOGIN_BUTTON_FIELD);
  // navigate to collection page
  await page.goto('https://unsplash.com/account');
  // Clear and Type to update location
  await page.waitForSelector(LOCATION_INPUT, { visible: true });
  await page.click(LOCATION_INPUT, { clickCount: 3 });
  await page.type(LOCATION_INPUT, 'VietNam', {
    delay: 1
  });
  // click update profile button
  await page.waitForSelector(UPDATE_ACCOUNT_BUTTON, { visible: true });
  await page.click(UPDATE_ACCOUNT_BUTTON);
  // navigate to collection page
  await page.goto('https://unsplash.com/@duynguyenhvn/collections');
  // Get actual location after edited
  await page.waitForXPath(LOCATION, { visible: true });
  const elementHandle = await page.$x(LOCATION);
  const elementHandleContent = await elementHandle[0].getProperty('textContent');
  // Assert
  const actualLocation = await elementHandleContent.jsonValue();
  const expectedLocation = 'VietNam';

  assert.equal(actualLocation, expectedLocation, 'Verify location');

  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);
  let totalBytes = 0;
  let usedBytes = 0;
  const coverage = [...jsCoverage, ...cssCoverage];
  for (const entry of coverage) {
    totalBytes += entry.text.length;
    for (const range of entry.ranges) { usedBytes += range.end - range.start - 1; } 
  }
  console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);
  await browser.close();
});
