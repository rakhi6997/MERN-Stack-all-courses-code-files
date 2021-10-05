const cities = require("cities");

var myCity = cities.zip_lookup("10016");

console.log(myCity);

// The resulting data from that ZIP code 
// is printed to console.
// The zip_lookup method returns a JavaScript object 
// with coordinates.