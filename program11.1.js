
var http = require('http');
var bl = require('bl');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (request, response) {
	response.writeHead(200, 'success', {'Content-Type': 'text/plain'});
	fs.createReadStream(path).pipe(response);
});

server.listen(Number(port));
