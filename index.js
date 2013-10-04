var http = require('http')
  // , options = { host: "download.finance.yahoo.com" }
  , options = { host: "ichart.finance.yahoo.com" };

//http://www.gummy-stuff.org/Yahoo-data.htm
//http://ichart.finance.yahoo.com/table.csv?s=GE&a=00&b=2&c=1962&d=08&e=30&f=2013&g=d&ignore=.csv
//http://finance.yahoo.com/q/hp?s=GE&a=00&b=2&c=1962&d=08&e=30&f=2013&g=d
//read about Yahoo finance API http://www.gummy-stuff.org/Yahoo-data.htm
// options.path = "/d/quotes.csv?s=XOM+BBDb.TO+JNJ+MSFT&f=snd1l1yr"; 
options.path = "/table.csv?s=MSFT&a=00&b=2&c=2012&d=08&e=30&f=2013&g=d&ignore=.csv"; 

function response(res) {
  var result = '';
  res.on('data',function (chunk) { result += chunk; });
  res.on('end',function () { console.log(result); });
}

var req = http.request(options,response);

req.end();