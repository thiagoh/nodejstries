
var http = require('http');
var bl = require('bl');
var map = require('through2-map')
var port = process.argv[2];

var server = http.createServer(function (request, response) {
	var b = new bl();
	request.pipe(b));
	
	response.writeHead(200, 'success', {'Content-Type': 'text/plain'});
	response.write(b.toString().toUpperCase());
	response.end();
});

server.listen(Number(port));
