var fs = require("fs");

var data = fs.readFileSync("Text.txt");

console.log(data.toString());

console.log("Program has ended");