
var http = require('http');
var bl = require('bl');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (request, response) {
	fs.createReadStream(path)
		.pipe(bl(function(err, data) {
			if (err) throw err;
			
			response.write(data);
			response.end();
		}));
});

server.listen(Number(port));
