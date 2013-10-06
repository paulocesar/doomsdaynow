var yahoo_quotes = require("../../src/yahoo/quotes")
  , should = require("should");

describe("YahooQuotes", function () {

  it("should format correctly", function () {
    var result = yahoo_quotes.formatResponse("a,b,v,c,c")
      , expected = "a-b-v-c-c";

      result.should.be.equal(expected);
  });

});