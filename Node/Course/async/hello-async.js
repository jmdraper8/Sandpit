/*
setTimeout(function() {
	console.log('0');
}, 2000);

console.log('1');
console.log('2');

setTimeout(function() {
	console.log('3');
}, 1000);
*/

function printInTwoSeconds (message) {
	setTimeout( function() {
		console.log(message);
	}, 2000);
}

printInTwoSeconds('Hello World!');	