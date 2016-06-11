function doWork () {
	throw new Error('Unable to do any work!');
}

try {
	doWork();
} catch (e) {
	console.log(e.message);
} finally {
	console.log('Finally block executed!');
}

console.log('Try Catch ended');