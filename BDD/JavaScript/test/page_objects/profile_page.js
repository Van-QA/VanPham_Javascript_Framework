const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');
const assert = require('chai').assert;

const navigateToProfilePageByUsername = async (username) => {
  const url = scope.host + '/@' + username;
  await page.navigateToURL(url);
};

const navigateToProfilePage= async () => {
  const url = scope.host + '/@' + constants.PAGE_URL.PROFILE_URL;
  await page.navigateToURL(url);
};

const verifyUsername = async (username) => {
  // Verify username displayed sucessfully
  // Get actual text in UI
  var elements = await page.getTextElement(constants.PROFILE_PAGE.USERNAME_FIELD);
  // Assert
  assert.equal(elements, username, 'Verify username');
};

const verifyNavigation = async () => {
  // Verify UI navigated sucessfully
  // Get actual text in UI
  var elements = await page.getTextElement(constants.PROFILE_PAGE.EDIT_PROFILE_BUTTON);
  // Assert
  assert.equal(elements, "Edit profile", 'Verify UI navigated sucessfully');
}

module.exports = {navigateToProfilePageByUsername, navigateToProfilePage, verifyUsername, verifyNavigation};
