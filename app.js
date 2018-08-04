const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%201259%20granito%20dr%20laramie',
    json: true //Will take string and convert to object for us
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2)); // 2nd argument filters out properties, 3rd arg shows how many spaces to indent to make string more readable
});