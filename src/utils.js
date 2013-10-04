var _ = require('underscore');

Utils = module.exports = {};

Utils.objectToGETParams = function (obj) {

  function parser(value,key) {
    return (key + "=" + value)
      .replace(/ /g,'+');
  }
  return _.map(obj,parser).join('&');
}