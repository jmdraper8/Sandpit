var name = 'John';

//name = undefined;

//console.log(name);

function doesNothing (age) {
	console.log(age);
}

//console.log(doesNothing());
//doesNothing();

if (name === undefined) {
	console.log('name is undefined');
}

if (typeof x === 'undefined') {
	console.log('x is undefined');
}



function greetUser (name) {
	if (typeof name ==='undefined') {
		console.log('Hello World!');
	} else if (typeof name === 'string') {
		console.log('Hello ' + name + '!');
	} else {
		console.log('Hello World!');
	}
}

greetUser(name);
greetUser(1);