var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res){
	res.pipe(bl(function (err, data) {
		if(err){
			return console.error(err);
		}
		var str = data.toString();
		console.log(str.length);
		console.log(str);
	}));
});