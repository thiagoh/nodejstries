
var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (request, response) {

	var obj = url.parse(request.url, true);

	if (obj.pathname === '/api/parsetime') {

		var d = new Date(obj.query.iso);
		var result = {
			'hour': d.getHours(),
			'minute': d.getMinutes(),
			'second': d.getSeconds()
		};
		response.writeHead(200, 'success', {'Content-Type': 'application/json'});
		response.end(JSON.stringify(result));

	} else if (obj.pathname === '/api/unixtime') {

		var d = new Date(obj.query.iso);
		var result = {
			'unixtime': d.getTime()
		};

		response.writeHead(200, 'success', {'Content-Type': 'application/json'});
		response.end(JSON.stringify(result));
		
	} else {

		response.writeHead(404)
		response.end()
	}
});

server.listen(Number(port));

