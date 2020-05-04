const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');

const navigateToUserCollectionPage = async (userName) => {
  const url = scope.host + constants.PAGE_URL.USER_COLLECTITON_PAGE_URL.replace('{userName}', userName);
  console.log(url);
  await page.navigateToURL(url);
};

const navigateToTheNewCollection = async (collectionID) => {
  const url = scope.host + constants.PAGE_URL.COLLECTION_IMAGE_URL.replace('{collectionID}', collectionID);
  await page.navigateToURL(url);
};

const getUserFullName = async () => {
  const userFullName = await page.getTextElement(constants.USER_COLLECTION_PAGE.USER_FULL_NAME);
  return userFullName;
};

const getLocation = async (location) => {
  const selector = constants.USER_COLLECTION_PAGE.LOCATION[1].replace('{location}', location);
  const locator = [constants.USER_COLLECTION_PAGE.LOCATION[0], selector];
  const userLocation = await page.getTextElement(locator);
  return userLocation;
};

const clickOnImageInTheCollection = async () => {
  await page.clickElement(constants.USER_COLLECTION_PAGE.NEW_IMAGE_ADDED_IN_COLLECTION);
};

module.exports = { navigateToUserCollectionPage, getUserFullName, getLocation, clickOnImageInTheCollection, navigateToTheNewCollection };
