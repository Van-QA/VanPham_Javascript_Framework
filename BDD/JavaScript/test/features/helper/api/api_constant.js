const CONFIG = require('../../../config/env');

const HEADERS = {
  'Content-Type': 'application/json'
};

const HEADERS_WITH_TOKEN = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + CONFIG.ENVIROMENT.TOKEN
};

const CREATE_COLLECTION_REQUEST_BODY = {
  title: 'PUPPETEER ' + getDate().toString(),
  description: 'CREATE COLLECTION WITH API',
  private: 'false'
};

function getDate () {
  var m = new Date();
  return (
    m.getUTCFullYear() + '/' +
    ('0' + (m.getUTCMonth() + 1)).slice(-2) + '/' +
    ('0' + m.getUTCDate()).slice(-2) + ' ' +
    ('0' + m.getUTCHours()).slice(-2) + ':' +
    ('0' + m.getUTCMinutes()).slice(-2) + ':' +
    ('0' + m.getUTCSeconds()).slice(-2));
}

module.exports = { HEADERS, HEADERS_WITH_TOKEN, CREATE_COLLECTION_REQUEST_BODY };
