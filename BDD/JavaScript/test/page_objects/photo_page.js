const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');
const assert = require('chai').assert;

const viewPhotoByPhotoID = async (photoID) => {
  const url = scope.host + constants.PAGE_URL.VIEW_PHOTO_BY_ID_URL.replace('{photoID}', photoID);
  await page.navigateToURL(url);
};

const getAllRelatedTagsInPhotoPage = async () => {
  const allRelatedTags = await page.getTextElements(constants.PHOTO_PAGE.RELATED_TAGS);
  return allRelatedTags;
};

const waitForPhotoModalVisibility = async () => {
  await page.waitForVisibilityOfElementSelector(constants.PHOTO_PAGE.PHOTO_MODAL[1]);
};

const hoverUserModalIcon = async () => {
  // hover on the use icon at the top left corner
  await page.hoverElement(constants.PHOTO_PAGE.MODAL_USER_ICON, false);
};

const clickFollowButton = async () => {
  // Click on the follow button
  await page.clickElement(constants.PHOTO_PAGE.FOLLOW_BUTTON, false);
}; 

const verifyFollowButtonBackground = async () => {
  // Verify button background color turned into white
  page.wait(1);
  const tmp = constants.PHOTO_PAGE.FOLLOW_BUTTON_BACKGROUND;
  backgroundColor = await page.evaluate(() => { return window.getComputedStyle(document.querySelector('header>div>span button')).backgroundColor});
  assert.equal(backgroundColor, "rgb(255, 255, 255)", 'Verify background of follow button changed into white');
}; 


const verifyFollowButtonText = async () => {
  // Verify button text turn into Following
  // Get actual text in UI
  var elements = await page.getTextElement(constants.PHOTO_PAGE.FOLLOW_BUTTON_TEXT);
  // Assert
  assert.equal(elements, "Following", 'Verify follow button text');
}
module.exports = { viewPhotoByPhotoID, getAllRelatedTagsInPhotoPage, waitForPhotoModalVisibility, hoverUserModalIcon, clickFollowButton, verifyFollowButtonBackground, verifyFollowButtonText };
