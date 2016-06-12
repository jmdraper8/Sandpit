var weather = require('./weather.js');

// weather();

weather(function (currentWeather) {
	console.log(currentWeather);
});

/*
request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Unable to fetch weather.');
	} else {
		//console.log(JSON.stringify(body, null, 4));
		console.log('It\'s currently ' + body.main.temp + 'F in '+ body.name + ' ' + body.sys.country + '.');

	}

}); */

// console.log('After Request');