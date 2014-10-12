var net = require('net');

var fillZeros = function(val){
	if(val<10){
		val = '0' + val;
	}
	return val;
};

var server = net.createServer(function (socket) {
	var date = new Date();
	var dateStr = '';

	dateStr += date.getFullYear() + '-'
		+ fillZeros(date.getMonth()+1) + '-'
		+ fillZeros(date.getDate()) + ' '
		+ fillZeros(date.getHours()) + ':'
		+ fillZeros(date.getMinutes()) + '\n';

	socket.write(dateStr);
	socket.end();
});

server.listen(process.argv[2]);