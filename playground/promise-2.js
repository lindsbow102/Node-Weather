const request = require("request");

const geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    request(
      {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true //Will take string and convert to object for us
      },
      (error, response, body) => {
        if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        } else if (error || body.status === "ZERO_RESULTS") {
          reject("Sorry, search failed");
        }
      }
    );
  });
};

geocodeAddress('gilbert az')
  .then(location => {
    console.log(JSON.stringify(location, undefined, 2));
  })
  .catch(error => {
    console.log(error);
  });
