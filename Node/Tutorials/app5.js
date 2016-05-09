//core modules do not require the ./ as a prefix
var fs = require('fs');

fs.writeFileSync("textFile.txt", "This is a test file");
console.log(fs.readFileSync("textFile.txt").toString());