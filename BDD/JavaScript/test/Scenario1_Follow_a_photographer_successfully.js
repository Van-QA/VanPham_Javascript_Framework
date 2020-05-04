const puppeteer = require('puppeteer');
const assert = require('chai').assert;
const user_sample = require('./features/dataprovider/user_sample.js');
async function run() {
  const browser = await puppeteer.launch({
      //executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      headless: false,
      args: [
          '--no-sandbox',
          //'--auto-open-devtools-for-tabs',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox'
      ]
  })
  const page = await browser.newPage()

  await page.goto('https://www.unsplash.com/login', {
      timeout: 0,
      waitUntil: ['networkidle2']
  })
  const USER = Object.values(user_sample.USER)[0];
  const USERNAME_EMAIL_FIELD = '#user_email';
  const PASSWORD_PWD_FIELD = '#user_password';
  const LOGIN_BUTTON_FIELD = ':nth-child(7) > .btn';
  // input username
  await page.waitForSelector(USERNAME_EMAIL_FIELD, { visible: true });
  await page.type(USERNAME_EMAIL_FIELD, USER.email);
  // input password
  await page.waitForSelector(PASSWORD_PWD_FIELD, { visible: true });
  await page.type(PASSWORD_PWD_FIELD, USER.password);
  // click login button
  await page.waitForSelector(LOGIN_BUTTON_FIELD, { visible: true });
  await page.click(LOGIN_BUTTON_FIELD);
  
  // click the first image
  const IMAGE='div:nth-child(1)>div:nth-child(1)>div>figure'; //column 1 row 1
  await page.waitForSelector(IMAGE, { visible: true });
  await page.click(IMAGE);

  // hover on the use icon at the top left corner
  const MODAL_USER_ICON='header>div img'; 
  await page.waitForSelector(MODAL_USER_ICON, { visible: true });
  await page.hover(MODAL_USER_ICON);

  // Click on the follow button
  const FOLLOW_BUTTON='header>div>span button > span';
  await page.waitForSelector(FOLLOW_BUTTON, { visible: true }); 
  var backgroundColor = await page.evaluate(() => { return window.getComputedStyle(document.querySelector('header>div>span button')).backgroundColor});
  assert.equal(backgroundColor, "rgb(0, 127, 255)", 'Background of follow button was blue before perform action');
  await page.click(FOLLOW_BUTTON);

  // Verify button background color turned into white
  await page.waitFor(1000);
  backgroundColor = await page.evaluate(() => { return window.getComputedStyle(document.querySelector('header>div>span button')).backgroundColor});
  assert.equal(backgroundColor, "rgb(255, 255, 255)", 'Verify background of follow button changed into white');

  // Verify button text turn into Following
  const FOLLOW_BUTTON_XPATH = '//header/div//button//span';
  // Get actual text in UI
  await page.waitForXPath(FOLLOW_BUTTON_XPATH, { visible: true });
  var elements = await page.$x(FOLLOW_BUTTON_XPATH);
  var elementContent= await elements[0].getProperty('textContent');
  
  // Assert
  var actualText = await elementContent.jsonValue();
  assert.equal(actualText, "Following", 'Verify follow button text');
  console.log("Done");
  //await browser.close();
}

run()
