var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, files){
		var i, response;

		if(err){
			callback(err);
			return;
		}

		response = [];
		for(i=0; i<files.length; i++){
			if(path.extname(files[i])===('.' + ext)){
				response.push(files[i]);
			}
		}
		callback(null, response);
	});
};