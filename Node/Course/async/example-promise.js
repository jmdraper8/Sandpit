// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			reject('Everything is broken.');
// 		}, 1000);
// 		// reject({
// 		// 	error: 'Something bad happened.'
// 		// });
// 	})
// }

// doWorkPromise('Somehting').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });


var request = require('request');


function getWeather (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var API = 'c44fe3b3a4c515159944e2647d258e5d';
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=' 
				+ API 
				+ '&q='
				+ encodedLocation 
				+ '&units=imperial';

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				//console.log(JSON.stringify(body, null, 4));
				resolve('It\'s currently ' + body.main.temp + 'c in '+ body.name + ' ' + body.sys.country + '.');
			}
		});
	})
}

getWeather('London').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});