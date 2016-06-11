var person = {
	name: 'John',
	age: 38
};

//convert an object into JSON
var personJSON = JSON.stringify (person);

console.log(personJSON);
console.log(typeof personJSON);
console.log(typeof person);

//convert JSON to a Javascript object
var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);


var animal = '{"Name": "Sierra", "Year": 2011}';


var animalOBJ = JSON.parse(animal);

animalOBJ.age = 4.5;

console.log(animalOBJ);

animal = JSON.stringify(animalOBJ);

console.log(animal);
