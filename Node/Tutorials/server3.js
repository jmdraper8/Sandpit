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

function profile(request, response) {
	console.log('User requested profile');
}

function forum(request, response) {
	console.log('User requested forum');
}


app.use('/profile', profile);
app.use('/forum', forum);


http.createServer(app).listen(8888);

console.log(getTimeStamp() + ": Server is running on port: 8888");