var weather = require('./weather.js');
var location = require('./location.js');
var currentLocation = '';

// var argv = require('yargs')
// 	.alias('l', 'location')
// 	.describe('l', 'The weather data location.')
// 	.alias('h', 'help')
// 	.help('help')
// 	.argv;

var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'The weather data location.',
		type: 'string'
	})
	.help('help')
	.argv;

try {
	
	if (!argv.location) {
		console.log('No location provided.');
		location(function (location) {
			if (!location) {
				console.log('Unable to guess location');
				return;
			}
			currentLocation = location.city;
			console.log('City: ' + location.city);
			weather(location.city, function (currentWeather) {
				console.log(currentWeather);
			});
			// console.log('Region: ' + location.region);
			// console.log('Long/Lat: ' + location.loc);
		});

	} else {
		console.log('Search Location: ' + argv.location);

		weather(argv.l, function (currentWeather) {
			console.log(currentWeather);
		});

	}

} catch (e) {
	console.log('error');
}


console.log(currentLocation);

// weather(function (currentLocation, currentWeather) {
// 	console.log(currentWeather);
// });




