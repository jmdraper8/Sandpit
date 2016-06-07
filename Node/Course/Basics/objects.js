var person = {
	gender: 'Male',
	'Job': 'Manager'
};

//adding a property to an Object and assigning the property a value
person['firstName'] = 'John';
person.lastName = 'Draper';
person.age = '38';

//delete a property from an object
delete person.age;

console.log(person);

function greetUser (person) {
	console.log('Hello ' + person.firstName + ' ' + person.lastName + '!');	
}

greetUser(person);


var pet = {
	type: 'Dog',
	name: 'Sierra'
};

function yourPet (pet) {
	console.log('You own a ' + pet.type + ', who\'s name is ' + pet.name + '.');
}

yourPet(pet);