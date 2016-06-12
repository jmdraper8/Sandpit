function doWork () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Done!');
			resolve();
		}, 1000);
	});
}

doWork().then(function () {
	return doWork();
}).then(function () {
	console.log('All Done!');
//This function will execute if there is a error in second promise
}, function () {

});