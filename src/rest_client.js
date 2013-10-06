var http = require('http')
  , utils = require('./utils')
  , _ = require('underscore');

var RestClient = module.exports = {};

RestClient.host = "";

RestClient.path = "";

RestClient.buildParams = function (params) {
  return utils.objectToGETParams(params);
}

RestClient.formatResponse = function (response) {
  return response;
}

RestClient.url = function (url) {
  var self = this
    , link = url.replace(/http:\/\//,"").split("/");

  self.host = link[0];
  self.path = "";
  _.each(link,function (value,key) {
    if(key !== 0) self.path += "/" + value;
  });
}

RestClient.request = function (params,cb) {
  var options = {}
    , self = this
    , req = null
    , GETParams = self.buildParams(params);


  options = {
    host: self.host,
    path: self.path + '?' + GETParams
  };

  function response(res) {
    var result = '';
    res.on('data',function (chunk) { result += chunk; });
    res.on('end',function () { cb(null,self.formatResponse(result)); });
  }

  http.request(options,response).end();
}

