const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');

const navigateLoginPage = async () => {
  const url = scope.host + constants.PAGE_URL.LOGIN;
  await page.navigateToURL(url);
};

const inputUserName = async (username) => {
  await page.typeText(constants.LOGIN_PAGE.USERNAME_INPUT_FIELD, username);
};

const inputPassword = async (password) => {
  await page.typeText(constants.LOGIN_PAGE.PASSWORD_INOUT_FIELD, password);
};

const clickSummitButton = async () => {
  await page.clickElement(constants.LOGIN_PAGE.LOGIN_BUTTON_FIELD, true);
};

module.exports = { navigateLoginPage, inputUserName, inputPassword, clickSummitButton };
