const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');

const navigateToEditProfilePage = async () => {
  const url = scope.host + constants.PAGE_URL.EDIT_PROFILE_URL;
  await page.navigateToURL(url);
};

const editLocation = async (location) => {
  await page.clearAndType(constants.EDIT_PROFILE_PAGE.LOCATION_INPUT, location, true);
};

const editUsername = async (username) => {
  await page.clearAndType(constants.EDIT_PROFILE_PAGE.USERNAME_INPUT, username, true);
};

const clickUpdateAccountButton = async () => {
  await page.clickElement(constants.EDIT_PROFILE_PAGE.UPDATE_ACCOUNT_BUTTON, true);
};

module.exports = { navigateToEditProfilePage, editLocation, clickUpdateAccountButton, editUsername };
