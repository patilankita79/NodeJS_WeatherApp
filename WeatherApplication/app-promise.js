const yargs = require('yargs');
const axios = require('axios');


// Object that stores the final parsed output [Takes input from process variable, passes through yargs and parses it]
const argv = yargs
            .options({
              a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
              }
            })
            .help()
            .alias('help', 'h')
            .argv;

console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// http GET request
axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
   var lat = response.data.results[0].geometry.location.lat;
   var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/11cd46d8f6c5ecbc4fb40c0b34d5413b/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  var summary= response.data.currently.summary;

  console.log(`It's cuurently ${temperature}. It feels like ${apparentTemperature}.`);
  console.log(`Summary: ${summary}.`);
}).catch((e) => {
  if(e.code === 'ECONNREFUSED') {
    console.log('Unable to connect to API Servers');
  } else {
    console.log(e.message);
  }
  console.log(e);
});
