const {
  Given,
  When
} = require('cucumber');
const loginPage = require('../../page_objects/login_page');
const scope = require('../hooks/scope');
const userData = require('../dataprovider/user_sample');

Given('the user navigate to login page',
  loginPage.navigateLoginPage
);


When('the user login as a {string} of sample users', async (userFullName) => {
  if (userData.USER[userFullName] != null) {
    const desiredEmail = userData.USER[userFullName]['email'];
    const desiredPassword = userData.USER[userFullName]['password'];
    await loginPage.inputUserName(desiredEmail);
    await loginPage.inputPassword(desiredPassword);
    await loginPage.clickSummitButton();
    scope.context.userName = userFullName;
  }
});
