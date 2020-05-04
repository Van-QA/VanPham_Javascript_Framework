const {
  When,
  Then
} = require('cucumber');
const assert = require('chai').assert;
const informationOfPhotoPage = require('../../page_objects/photo_infomation_page');
const scope = require('../hooks/scope');
const photoHelper = require('../helper/api/photo_helper');

When('the user open info modal of current photo', async () => {
  const { photoID } = await scope.context;
  await informationOfPhotoPage.navigatePhotoInfoByID(photoID);
});

Then('the data in photo info is shown correctly', async () => {
  const { photoID } = await scope.context;
  const response = await photoHelper.getPhotoInfoByAPI(photoID);
  const responseBody = await JSON.stringify(response.body);
  // actual
  const expectedCameraMake = await JSON.parse(responseBody)['exif']['make'];
  const expectedCameraModel = await JSON.parse(responseBody)['exif']['model']; ;
  const expectedFocalLength = await JSON.parse(responseBody)['exif']['focal_length']; ;
  // expected
  const actualCameraMake = await informationOfPhotoPage.getCameraMakeOfPhotoInfo();
  const actualCameraModel = await informationOfPhotoPage.getCameraModelOfPhotoInfo();
  const actualFocalLength = await informationOfPhotoPage.getFocalLengthOfPhotoInfo();
  // assert
  assert.equal(actualCameraMake, expectedCameraMake, 'Verify camera make');
  assert.equal(actualCameraModel, expectedCameraModel, 'Verify camera model');
  assert.equal(actualFocalLength, expectedFocalLength + 'mm', 'Verify focal length');
});
