var rest_client = require("../core/rest_client")
  , _ = require("underscore");

//http://ichart.finance.yahoo.com/table.csv?s=GE&a=00&b=2&c=1962&d=08&e=30&f=2013&g=d&ignore=.csv
//?s=MSFT&a=00&b=2&c=2012&d=08&e=30&f=2013&g=d&ignore=.csv

YahooHistory = module.exports = _.clone(rest_client);

YahooHistory.url("ichart.finance.yahoo.com/table.csv");

