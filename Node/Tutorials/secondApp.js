var John = {
	favFood: "Bacon",
	favMovie: "Aliens"
};

//Only sets a reference, does not make a copy of the object
var Person = John;

Person.favMovie = "Alien";

console.log(John.favMovie);

// two equals signs compares values
console.log(19 == '19');

//three equales compares values and types
console.log(19 === '19');