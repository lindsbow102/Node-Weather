const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help() // command 'node app.js --help' for info on options above
    .alias('help', 'h') // command would be 'node app.js --help' or 'node app.js --h'
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It is currently ${weatherResults.temperature} degrees, but it feels like ${weatherResults.apparentTemperature}!`);
            }
        });
    }
});


// to find encoded URI, enter 'node'
// Then enter 'encodeURIComponent('6 burnbrae lane, sparta')'
// or can enter 'decodeURIComponent('Lindsey%20Bowen')'

//console.log('Argv:', argv);




