var path = require('path');

var websiteHome = "Users/johndraper//Sandpit/Node/index.html";
var websiteAbout = "Users/johndraper/Sandpit/Node/about.html";

//removes the error of the double back slash
console.log(path.normalize(websiteHome));

console.log(path.dirname(websiteAbout)); // Users/johndraper/Sandpit/Node/
console.log(path.basename(websiteAbout)); //about.html
console.log(path.extname(websiteAbout)); // .html