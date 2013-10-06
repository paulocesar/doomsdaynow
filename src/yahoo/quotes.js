var rest_client = require("../rest_client")
  , _ = require("underscore");

//http://www.gummy-stuff.org/Yahoo-data.htm

YahooQuotes = module.exports = _.extend(rest_client);

YahooQuotes.url("download.finance.yahoo.com/d/quotes.csv");
 
YahooQuotes.formatResponse = function (response) {
  return response.replace(/,/g,"-");
}
