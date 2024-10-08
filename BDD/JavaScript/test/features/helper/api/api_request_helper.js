const request = require('request');

/**
 * Function for GET method
 * @param _url - url | endpoint
 * @param _headers - Headers required for API, has to be JSON format
 *                   e.g. { 'Content-Type': 'text/xml' }
 */
function GET (_url, _headers) {
  try {
    var options = {
      method: 'GET',
      url: _url,
      headers: _headers,
      json: true
    };
    return REQUEST(options);
  } catch (err) {
    console.log('Error in sending GET Request: ', err);
  }
}

/**
 * Function for POST method
 * @param _url - url | endpoint
 * @param _headers - Headers required for API, has to be JSON format
 *                   e.g. { 'Content-Type': 'text/xml' }
 * @param _body - Body: XML(string format) or JSON object
 */
async function POST (_url, _headers, _body) {
  try {
    var options = {
      method: 'POST',
      url: _url,
      headers: _headers,
      body: _body,
      json: isJsonType(_body)
    };
    const promise = await REQUEST(options);
    return promise;
  } catch (err) {
    console.log('Error in sending POST Request: ', err);
  }
}

/**
 * Function for PUT method
 * @param _url - url | endpoint
 * @param _headers - Headers required for API, has to be JSON format
 *                   e.g. { 'Content-Type': 'text/xml' }
 * @param _body - Body: XML(string format) or JSON object
 */
function PUT (_url, _headers, _body) {
  try {
    var options = {
      method: 'PUT',
      url: _url,
      headers: _headers,
      body: _body,
      json: isJsonType(_body)
    };
    return REQUEST(options);
  } catch (err) {
    console.log('Error in sending PUT Request: ', err);
  }
}

/**
 * Function for DELETE method
 * @param _url - url | endpoint
 * @param _headers - Headers required for API, has to be JSON format
 *                   e.g. { 'Content-Type': 'text/xml' }
 * @param _body - Body: XML(string format) or JSON object
 */
function DELETE (_url, _headers, _body) {
  try {
    var options = {
      method: 'DELETE',
      url: _url,
      headers: _headers,
      body: _body,
      json: isJsonType(_body)
    };
    return REQUEST(options);
  } catch (err) {
    console.log('Error in sending DELETE Request: ', err);
  }
}

/**
 * Function to check if body is JSON object
 * @param _body - any string
 */
function isJsonType (_body) {
  return (typeof (_body) == 'object');
}

/**
 * Function for POST method
 * @param options - options for REQUEST api
 * e.g. var options = { method: 'POST',
 *              url: 'http://localhost:8080',
 *              headers:  { 'Content-Type': 'text/xml' },
 *              body: { 'ID': '123', 'NAME': 'pravin' },
 *              json : TRUE
 *          };
 */
function getResponse (options) {
  return REQUEST(options);
}

/**
 * internal function for requesting API
 * @param options - options for REQUEST api
 * @returns Promise object
 */
function REQUEST (options) {
  return new Promise((resolve, reject) => {
    request(options, function (error, response) {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

module.exports = { getResponse, GET, POST, PUT, DELETE };
