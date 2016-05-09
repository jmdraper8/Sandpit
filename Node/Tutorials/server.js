var http = require('http');

function onRequest(request, response) {
	console.log("A user made a request " + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("This is a test");
	response.end();	
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");

