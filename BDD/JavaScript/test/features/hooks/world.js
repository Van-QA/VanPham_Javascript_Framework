// Dependencies
const { setWorldConstructor } = require('cucumber');
const scope = require('./scope');

const World = function () {
  scope.host;
  scope.driver;
  scope.context;
};

setWorldConstructor(World);
