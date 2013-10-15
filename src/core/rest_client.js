var http = require('http')
  , utils = require('./utils')
  , _ = require('underscore');

var RestClient = module.exports = {};

RestClient._host = "";

RestClient._path = "";

RestClient.buildParams = function (params) {
  return utils.objectToGETParams(params);
}

RestClient.formatResponse = function (params,response) {
  return response;
}

RestClient.url = function (url) {
  var self = this
    , link = url.replace(/http:\/\//,"").split("/");

  self._host = link[0];
  self._path = "";
  _.each(link,function (value,key) {
    if(key !== 0) self._path += "/" + value;
  });
}

RestClient.request = function (params,cb) {
  var options = {}
    , self = this
    , req = null
    , GETParams = self.buildParams(params);


  options = {
    host: self._host,
    path: self._path + '?' + GETParams
  };

  function response(res) {
    var result = '';
    res.on('data',function (chunk) { result += chunk; });
    res.on('end',function () { cb(null,self.formatResponse(params,result)); });
  }

  http.request(options,response).end();
}

