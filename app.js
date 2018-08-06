const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});

// to find encoded URI, enter 'node'
// Then enter 'encodeURIComponent('6 burnbrae lane, sparta')'
// or can enter 'decodeURIComponent('Lindsey%20Bowen')'

//console.log('Argv:', argv);

