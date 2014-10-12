var myModule = require('./module');

myModule(process.argv[2], process.argv[3], function(err, data){
	if(err){
		console.log('Error occurred: ', err);
		return;
	}

	for(var i=0; i<data.length; i++){
		console.log(data[i]);
	}
});