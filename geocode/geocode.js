const request = require("request");

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true //Will take string and convert to object for us
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to Google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        //Find this by typing error in browser URL to view API
        callback("Unable to find that address.");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
