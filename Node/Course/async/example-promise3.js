// function doWork (shouldFail) {
// 	return new Promise(function (resolve, reject) {
// 		if (shouldFail) {
// 			setTimeout(function () {
// 				//console.log('Success!');
// 				resolve('Success!');
// 			}, 1000);
// 		} else {
// 			reject('Error message');
// 		}
// 	});
// }

// doWork(true).then(function (message) {
// 	console.log(message);
// 	return doWork(false);
// }).then(function (message) {
// 	console.log(message);
// }).catch(function (error) {
// 	console.log(error);
// });


function getLocation () {
	//return a promise
	//	resolve London

	return new Promise(function (resolve, reject) {
		resolve('London');
	});

}

function getWeather (location) {
	// return promise
		// resolve('its is')
	return new Promise(function (resolve, reject) {
		resolve('It\'s 25c in ' + location + ' at the moment.');
	});
}

getLocation().then(function (location) {
	return getWeather(location);
}).then( function (message) {
	console.log(message);
}).catch(function (error) {
	console.log(error);
});