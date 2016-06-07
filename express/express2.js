var express = require('express');
var app = express();

app.get('/blocks', function(request, response) {
	//var blocks = ['Fixed', 'Movable', 'Rotating'];
	var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
	response.send(blocks);

	// Status code makes it a permernant redirect
	//response.redirect(301, '/parts');
});

app.listen(3000, function() {
	console.log('Listening on Port 3000');
});