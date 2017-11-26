const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  // Making a request, request function has two arguments one is options object, second is callback function
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },
  // Callback
  (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));

    //Response object
    // console.log(JSON.stringify(response, undefined, 2));


    if(error) {
      callback('Unable to connect to Google server');
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
    } else if(body.status === 'OK') {

      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });

    }


  });

};

module.exports.geocodeAddress = geocodeAddress;
