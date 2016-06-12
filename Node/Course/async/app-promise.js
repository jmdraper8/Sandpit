var weather = require('./weather-promise.js');
var location = require('./location-promise.js');
var currentLocation = '';

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

		location().then(function (location) {
			console.log(location.city);
			return weather (location.city);
		}).then( function (message) {
			console.log(message);
		}).catch(function (error) {
			console.log(error);
		});
	} else {
		console.log('Search Location: ' + argv.location);


		weather(argv.location).then(function (message) {
			console.log(message);
		}).catch(function (error) {
			console.log(error);
		});
	}
} catch (e) {
		console.log('error');
}


console.log(currentLocation);

// weather(function (currentLocation, currentWeather) {
// 	console.log(currentWeather);
// });




