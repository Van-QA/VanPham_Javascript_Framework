const {
  When,
  Then
} = require('cucumber');
const assert = require('chai').assert;
const expect = require('chai').expect;
const photoPage = require('../../page_objects/photo_page');
const photoHelper = require('../helper/api/photo_helper');
const scope = require('../hooks/scope');
const hashCode = require('crypto-js');

When('the user open the photo with ID {string}', async (photoID) => {
  await photoPage.viewPhotoByPhotoID(photoID);
  scope.context.photoID = photoID;
});

Then('All related tags in photo page is shown correctly', async () => {
  const { photoID } = await scope.context;
  const respone = await photoHelper.getPhotoInfoByAPI(photoID);
  const responeBody = await JSON.stringify(respone.body);
  const actualAllRelatedTags = await photoPage.getAllRelatedTagsInPhotoPage();
  const responseData = await JSON.parse(responeBody)['tags'];
  var expectedAllRelatedTags = [];
  for (const i in responseData) {
    expectedAllRelatedTags.push((responseData[i]['title']).toCapitalize());
  }
  expect(actualAllRelatedTags).to.eql(expectedAllRelatedTags);
});

When('the user downloads image using API', async () => {
  const { photoID } = await scope.context;
  const response = await photoHelper.downloadPhotoByAPI(photoID);
  const hashCodeImage = hashCode.MD5(response.body).toString();
  scope.context.hashCodeImage = hashCodeImage;
});

Then('the user notices that the hashcode of image is the same with {string}', async (expectedHashCode) => {
  const { hashCodeImage } = await scope.context;
  const actualHashCode = hashCodeImage;
  assert.equal(actualHashCode, expectedHashCode, 'Verify hash code photo');
});
