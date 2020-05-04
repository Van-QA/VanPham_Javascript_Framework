const request = require('./api_request_helper');
const endPoint = require('./api_endpoint');
const constant = require('./api_constant');
const scope = require('../../hooks/scope');

const creatCollectionUsingAPI = async (body) => {
  const api = scope.apiHost + endPoint.END_POINTS.COLLECTION.CREATE_COLLECTION_ENDPOINT;
  const header = constant.HEADERS_WITH_TOKEN;
  const response = await request.POST(api, header, body);
  return response;
};

const addPictureToTheCollection = async (photoID, collectionID) => {
  const api = scope.apiHost + endPoint.END_POINTS.COLLECTION.ADD_NEW_IMAGE_TO_THE_COLLECTION.replace('{collectionID}', collectionID);
  const header = constant.HEADERS_WITH_TOKEN;
  const body = { photo_id : photoID };
  const response = await request.POST(api, header, body);
  return response;
};

const deleteCollectionWithAPI = async (collectionID) => {
  const api = scope.host + endPoint.END_POINTS.COLLECTION.DELETE_COLLECTION_ENDPOINT.replace('{collectionID}', collectionID);
  const header = constant.HEADERS_WITH_TOKEN;
  const response = await request.DELETE(api, header);
  return response;
};

module.exports = { creatCollectionUsingAPI, addPictureToTheCollection, deleteCollectionWithAPI };
