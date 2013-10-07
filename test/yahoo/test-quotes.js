var yahoo_history = require("../../src/yahoo/history")
  , yahoo_quotes = require("../../src/yahoo/quotes")
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
    var result = yahoo_quotes.formatResponse("a,b,v,c,c\na,c,v,rt,a")
      , expected = [['a','b','v','c','c'],['a','c','v','rt','a']];
    result.toString().should.be.equal(expected.toString());
  });

});