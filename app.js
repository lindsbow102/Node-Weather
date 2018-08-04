const request = require('request');
const yargs = require('yargs');

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
    .alias('help', 'h') // command would be 'node app.js --help' or 'node app.js --h'
    .argv;

// to find encoded URI, enter 'node'
// Then enter 'encodeURIComponent('6 burnbrae lane, sparta')'
// or can enter 'decodeURIComponent('Lindsey%20Bowen')'

console.log('Argv:', argv);

const encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true //Will take string and convert to object for us
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`); 
    console.log(`Location--latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Location--longitude: ${body.results[0].geometry.location.lng}`);
});