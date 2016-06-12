//Module exports can be set to aything
var request = require('request');

module.exports =  function (currentLocation, callback) {
	//console.log('Got weather!');
	var encodedLocation = encodeURIComponent(currentLocation);
	var API = 'c44fe3b3a4c515159944e2647d258e5d';
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=' 
				+ API 
				+ '&q='
				+ encodedLocation 
				+ '&units=metric';

	return new Promise(function (resolve, reject) {
		console.log(encodedLocation);
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			console.log(body);
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				//console.log(JSON.stringify(body, null, 4));
				resolve('It\'s currently ' + body.main.temp + 'C in '+ body.name + ' ' + body.sys.country + '.');
			}
		});

	});
}