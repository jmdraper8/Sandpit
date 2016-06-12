var express = require('express');
var app = express();
var port = 3000;


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log(new Date().toString() + ' WARN: Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		;
		console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

//Specify middleware up the top of the file
//app.use(middleware.requireAuthentication);

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function () {
	console.log('Express Server started on port: ' + port + '!');
});