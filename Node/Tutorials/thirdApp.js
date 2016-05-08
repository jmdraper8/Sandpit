var John = {
	printFirstName: function() {
		console.log("My Name is John");
		console.log(this == John); //this is a refrence to whatever object is calling it
	}
};

John.printFirstName();

//The default caling context is global
function doSomethingWorthless () {
	console.log("My Name is Worthless");
	console.log(this == global); //this is a refrence to whatever object is calling it
}

doSomethingWorthless();