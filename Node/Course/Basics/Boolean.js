var isValid = true;

isValid = !isValid;

console.log(isValid);

var isValid = true;
console.log(isValid);

if (!isValid) {
	console.log('True');
} else {
	console.log('False');
}

function toggleBoolean (booleanVar) {
	if (typeof booleanVar === 'boolean') {
		return !booleanVar;
	} else {
		return 'Error: Not a boolean variable';
	}
	
}

console.log(toggleBoolean('1'));
console.log(toggleBoolean(isValid));