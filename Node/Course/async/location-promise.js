var request = require('request');
var url = 'http://ipinfo.io';

module.exports =  function (callback) {

	return new Promise(function (resolve, reject) {

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to location data.');
			} else {
				//console.log(JSON.stringify(body, null, 4));
				//console.log(body);
				resolve(body);
			}
		});
	});
}