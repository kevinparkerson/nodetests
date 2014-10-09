var fs = require('fs');

//using 'utf8' here as the second parameter to get a string back as data
var fileString = fs.readFile(process.argv[2], 'utf8', function(err, data){
	var newLines = data.split('\n');
	console.log(newLines.length-1);
});