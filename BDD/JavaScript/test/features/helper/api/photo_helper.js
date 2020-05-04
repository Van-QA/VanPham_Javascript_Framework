const request = require('./api_request_helper');
const endPoint = require('./api_endpoint');
const constant = require('./api_constant');
const scope = require('../../hooks/scope');

const getPhotoInfoByAPI = async (photoID) => {
  const api = scope.apiHost + endPoint.END_POINTS.PHOTO.PHOTO_INFO_BY_ID_ENDPOINT.replace('{photoID}', photoID);
  const header = constant.HEADERS;
  const response = await request.GET(api, header);
  return response;
};

const downloadPhotoByAPI = async (photoID) => {
  const api = scope.host + endPoint.END_POINTS.PHOTO.DOWNLOAD_FILE_URL_BY_ID.replace('{photoID}', photoID);
  const header = constant.HEADERS;
  const response = await request.GET(api, header);
  return response;
};
module.exports = { getPhotoInfoByAPI, downloadPhotoByAPI };
