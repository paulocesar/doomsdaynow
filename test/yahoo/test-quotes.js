var yahoo_history = require("../../src/services/yahoo-history")
  , yahoo_quotes = require("../../src/services/yahoo-quotes")
  , should = require("should");

describe("YahooQuotes", function () {

  it("should convert requests to html tag",function () {
    var result = yahoo_quotes.parseTag(["ask","askSize","bid"])
      , expected = "aa5b";
    result.should.be.equal(expected);
  });

  it("should parse symbols to html symbols",function () {
    var result = yahoo_quotes.parseSymbols(["MSFT","XOM"])
      , expected = "MSFT+XOM";
    result.should.be.equal(expected);
  })

  it("should convert to Yahoo GET params", function () {
    var result = yahoo_quotes.buildParams({stock:["MSFT","XOM"],tag:["ask","askSize"]})
      , expected = "s=MSFT+XOM&f=aa5";

    result.should.be.equal(expected);
  });

  it("should format response correctly", function () {
    var result = yahoo_quotes.formatResponse("","a,b,v,c,c\na,c,v,rt,a")
      , expected = [['a','b','v','c','c'],['a','c','v','rt','a']];
    result[0].toString().should.be.equal(expected[0].toString());
    result[1].toString().should.be.equal(expected[1].toString());
    result.toString().should.be.equal(expected.toString());
  });

  it("should request yahoo correct data", function (done) {
    yahoo_quotes.request({stock:["MSFT"],tag:['ask','askSize','bid','lastTradeDate']}, function (er,data) {
      data.length.should.be.equal(1);
      data[0].length.should.be.equal(5);
      done();
    })
  });

});