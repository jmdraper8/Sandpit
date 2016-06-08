var myGrades = [1, 2, 3, 4, 5, 6];
var i = 0;
var myAveGrade = 0;
var varGrade;

varGrade = myGrades.shift();
console.log(varGrade);

varGrade = myGrades.pop();
console.log(varGrade);

myGrades.push(7);
console.log(myGrades);

myGrades.forEach(function (grade) {
	console.log(grade);
	myAveGrade += grade;
});

myAveGrade = myAveGrade / myGrades.length;

console.log(parseFloat(myAveGrade).toFixed(1) + '%');