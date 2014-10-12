var bl = require('bl');
var http = require('http');

var count = 0;
var strings = [];
var i;

var getUrl = function(url, index){
	http.get(url, function(res){
		res.pipe(bl(function (err, data) {
			if(err){
				strings[index] = console.error(err);
			}
			strings[index] = data.toString();
			count++;
			print();
		}));
	});
};

var print = function(){
	var j;
	if(count>2){
		for(j=0; j<strings.length; j++){
			console.log(strings[j]);
		}
	}
};

for(i=2; i<5; i++){
	getUrl(process.argv[i], i-2);
}