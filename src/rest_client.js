var http = require('http');

var RestClient = module.exports = {};

RestClient.host = "";

RestClient.path = "";

RestClient.request = function (params,cb) {
  var options = {}
    , self = this
    , req = null;

  options = {
    host: self.host,
    path: self.path+params
  };


  function response(res) {
    var result = '';
    res.on('data',function (chunk) { result += chunk; });
    res.on('end',function () { cb(null,result); });
  }

  http.request(options,response).end();
}

