var connect = require('connect');
var http = require('http');

function getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' +
            (now.getDate()) + '/' +
             now.getFullYear() + " " +
             now.getHours() + ':' +
             ((now.getMinutes() < 10)
                 ? ("0" + now.getMinutes())
                 : (now.getMinutes())) + ':' +
             ((now.getSeconds() < 10)
                 ? ("0" + now.getSeconds())
                 : (now.getSeconds())));
}



var app = connect();

function doFirst(request, response, next) {
	console.log(getTimeStamp() + ": User has made a request")
	// next();
}

function doSecond(request, response, next) {
	console.log(getTimeStamp() + ": User has made another request")
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);

console.log(getTimeStamp() + ": Server is running on port: 8888");