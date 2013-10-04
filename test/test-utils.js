var utils = require('../src/utils')
  , should = require ('should');

describe("utils", function () {

  it("should return http variables",function () {
    var result = utils.objectToGETParams({a:20,b:"asd"})
      , expected = "a=20&b=asd";

    result.should.be.equal(expected);
  });

  it("should replace space with plus sign",function () {
    var result = utils.objectToGETParams({a:20,b:"hello world"})
      , expected = "a=20&b=hello+world";

    result.should.be.equal(expected);
  })

});