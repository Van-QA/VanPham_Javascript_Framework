String.prototype.toCapitalize = function () {
  return this.toLowerCase().replace(/^.|\s\S/g, function (a) { return a.toUpperCase(); });
};
