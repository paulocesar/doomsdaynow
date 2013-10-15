
function monthSavings(base,tax,times,val) {
  val = val || 0;
  if (!times) return val;
  return monthSavings(base,tax,--times,val*tax+base);
}

function calculateSavings(value,years,tax_percent) {
  var tax = 1.0 + (tax_percent / 100.0);
  return monthSavings(value,tax,12*years);
}

console.log(calculateSavings(4000,5,0.51));