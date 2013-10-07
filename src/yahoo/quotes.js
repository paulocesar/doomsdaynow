var rest_client = require("../rest_client")
  , _ = require("underscore")
  , utils = require("../utils");

//http://www.gummy-stuff.org/Yahoo-data.htm

YahooQuotes = module.exports = _.clone(rest_client);

YahooQuotes.url("download.finance.yahoo.com/d/quotes.csv");

YahooQuotes.TAG = {
  ask: "a",
  averageDailyVolume: "a2",
  askSize: "a5",
  bid: "b",
  askRealTime: "b2",
  bidRealTime: "b3",
  bookValue: "b4",
  bidSize: "b6",
  changeAndPercentChange: "c",
  change: "c1",
  commission: "c3",
  changeRealTime: "c6",
  afterHoursChangeRealTime: "c8",
  dividendShare: "d",
  lastTradeDate: "d1"
}
 
YahooQuotes.formatResponse = function (response) {
  return response
    .split(/\n/g)
    .map(function(item){return item.split(',');});
}

YahooQuotes.parseTag = function (options) {
  var keys = options || []
    , self = this;

  return _.reduce(keys,function (tag,option) {
    if(!self.TAG[option]) throw new Error("Tag not found");
    return tag + self.TAG[option]; 
  },'');
}

YahooQuotes.parseSymbols = function (symbols) {
  return symbols.join("+");
}

YahooQuotes.buildParams = function (params) {
  var stocks = params.stock || []
    , tags = params.tag || []
    , self = this;
  return utils.objectToGETParams({s: self.parseSymbols(stocks), f: self.parseTag(tags)});
}