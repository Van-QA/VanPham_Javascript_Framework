const puppeteer = require('puppeteer');
const assert = require('chai').assert;

puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {
  const page = await browser.newPage();
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
  const USER_FULL_NAME = '(//div[@data-test="users-route"]//div[string-length(text())>0])[1]';
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
  await page.goto('https://unsplash.com/@duynguyenhvn/collections');
  // Get actual username in UI
  await page.waitForXPath(USER_FULL_NAME, { visible: true });
  const elementHandle = await page.$x(USER_FULL_NAME);
  const elementHandleContent = await elementHandle[0].getProperty('textContent');
  // Assert
  const actualUserFullName = await elementHandleContent.jsonValue();
  const expectedUserFullName = USER.fullname;
  assert.equal(actualUserFullName, expectedUserFullName, 'Verify user name');
  await browser.close();
});
