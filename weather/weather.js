const request = require("request");

const getWeather = (latitude, longitude, callback) => {
  
  request({
      url: `https://api.darksky.net/forecast/18fffdd30b60ef516257e7b9e61f0fdf/${latitude},${longitude}`,
      json: true
    },
    (error, response, body) => {
        if (error) {
            callback("unable to fetch weather");
        } else if (!error && response.statusCode === 200) {
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });  
    };    
    });
};

module.exports.getWeather = getWeather;
