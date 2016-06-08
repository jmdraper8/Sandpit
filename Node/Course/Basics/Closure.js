function createAdder (baseNumber) {
	return function adder (numberToAdd) {
			return baseNumber + numberToAdd;
	}
}


function greetMaker (name) {
	//closure is a function created within another funciton
	function greet () {
		console.log('Hello ' + name + '!');
	}

	return greet;
}


var greetJohn = greetMaker('John');

greetJohn();
greetJohn();

var greetWorld = greetMaker('World');

greetWorld();

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(10));