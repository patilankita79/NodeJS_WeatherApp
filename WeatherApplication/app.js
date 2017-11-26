const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    //console.log(JSON.stringify(results, undefined, 2));
    console.log(results.address);

    //lat, lng, callback
    weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage) {
        console.log(errorMessage);
      } else {
        //console.log(JSON.stringify(weatherResults, undefined, 2));
        console.log(`It's cuurently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
