var rest_client = require("../rest_client")
  , _ = require("underscore");

//http://ichart.finance.yahoo.com/table.csv?s=GE&a=00&b=2&c=1962&d=08&e=30&f=2013&g=d&ignore=.csv
//?s=MSFT&a=00&b=2&c=2012&d=08&e=30&f=2013&g=d&ignore=.csv

YahooHistory = module.exports = _.extend(rest_client);

YahooHistory.host = "ichart.finance.yahoo.com";
YahooHistory.path = "/table.csv";

