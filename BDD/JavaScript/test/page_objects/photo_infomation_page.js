const scope = require('../features/hooks/scope');
const constants = require('./constants');
const page = require('./base_page');

const navigatePhotoInfoByID = async (photoID) => {
  const url = scope.host + constants.PAGE_URL.PHOTO_INFO_BY_ID_URL.replace('{photoID}', photoID);
  await page.navigateToURL(url);
};

const getCameraMakeOfPhotoInfo = async () => {
  const cameraMakeOfPhotoInfo = await page.getTextElement(constants.PHOTO_INFOMATION_MODAL.CAMERA_MAKE_PHOTO_INFO);
  return cameraMakeOfPhotoInfo;
};

const getCameraModelOfPhotoInfo = async () => {
  const cameraModeOfPhotoInfo = await page.getTextElement(constants.PHOTO_INFOMATION_MODAL.CAMERA_MODEL_PHOTO_INFO);
  return cameraModeOfPhotoInfo;
};

const getFocalLengthOfPhotoInfo = async () => {
  const focalLengthOfPhotoInfo = await page.getTextElement(constants.PHOTO_INFOMATION_MODAL.FOCAL_LENGTH_PHOTO_INFO);
  return focalLengthOfPhotoInfo;
};

module.exports = { navigatePhotoInfoByID, getCameraMakeOfPhotoInfo, getCameraModelOfPhotoInfo, getFocalLengthOfPhotoInfo };
