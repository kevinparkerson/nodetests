var fs = require('fs');

var fileString = fs.readFileSync(process.argv[2]).toString();
var newLines = fileString.split('\n');

console.log(newLines.length-1);