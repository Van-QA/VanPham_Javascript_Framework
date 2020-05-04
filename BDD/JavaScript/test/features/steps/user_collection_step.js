const {
  Given,
  When,
  Then
} = require('cucumber');
const assert = require('chai').assert;
const expect = require('chai').expect;
const userCollectionPage = require('../../page_objects/user_collection_page');
const scope = require('../hooks/scope');
const userData = require('../dataprovider/user_sample');
const collectionHelper = require('../helper/api/collection_helper');
const requestBody = require('../helper/api/api_constant');
const photoPage = require('../../page_objects/photo_page');

Given('the user create collection with API', async () => {
  const body = requestBody.CREATE_COLLECTION_REQUEST_BODY;
  const respone = await collectionHelper.creatCollectionUsingAPI(JSON.stringify(body));
  const newCollectionID = await JSON.parse(respone.body)['id'];
  scope.context.newCollectionID = newCollectionID;
});

When('the user navigate to new collection', async () => {
  const { newCollectionID } = await scope.context;
  await userCollectionPage.navigateToTheNewCollection(newCollectionID);
});

When('the user add a picture to the new collection', async () => {
  const { photoID } = await scope.context;
  const { newCollectionID } = await scope.context;
  await collectionHelper.addPictureToTheCollection(photoID, newCollectionID);
});

When('the user click on image in the collection', async () => {
  await userCollectionPage.clickOnImageInTheCollection();
});

When('the user navigate to collection page', async () => {
  const { userName } = await scope.context;
  if (userData.USER[userName] != null) {
    const desiredUserName = userData.USER[userName]['username'];
    await userCollectionPage.navigateToUserCollectionPage(desiredUserName);
  }
});

Then('the ID in URL is shown correctly', async () => {
  const { photoID } = await scope.context;
  const { currentPage } = scope.context;
  await photoPage.waitForPhotoModalVisibility();
  const currentURL = await currentPage.url();
  const actualPhotoID = currentURL.substring(currentURL.lastIndexOf('/') + 1);
  assert.equal(actualPhotoID, photoID, 'Verify photoID in URL');
});

Then('the user fullname is shown correctly', async () => {
  const { userName } = await scope.context;
  const expectedUserFullName = userName;
  const actualUserFullName = await userCollectionPage.getUserFullName();
  assert.equal(actualUserFullName, expectedUserFullName, 'Verify user name');
});

Then('the location {string} is updated successfully', async (expectedLocation) => {
  const actualLocation = await userCollectionPage.getLocation(expectedLocation);
  expect(actualLocation).to.have.string(expectedLocation);
});
