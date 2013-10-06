var rest_client = require("../src/rest_client")
  , should = require("should");

describe("RestClient",function () {

  it("should return formated params", function () {
    var result = rest_client.buildParams({hi:123,hello:"sample hi"})
      , expected = "hi=123&hello=sample+hi";

    result.should.be.equal(expected);
  });

  it("should return identical response", function () {
    var response = "123123AIjdsi45";
    response.should.be.equal(rest_client.formatResponse(response));
  });

  it("should build host and path from url",function () {
    var url = "http://www.reddit.com/search"
      , host = "www.reddit.com"
      , path = "/search";

    rest_client.url(url);
  });

  it("should do a rest request", function (done) {
    rest_client.request({q:"sample"},function (err,result) {
      if(err) throw err;
      done();
    })
  });

});