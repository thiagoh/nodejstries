
var http = require('http');

http.get(process.argv[2], function(response) {

	var o = {buf : ''};
	var concat = function(o) { 
		return function(v) {o.buf += v;}
	}(o);

	response.setEncoding('utf8')
		.on("data", concat)
		.on("error", console.error)
		.on('end', function() {
			console.log(o.buf.length);
			console.log(o.buf);
		});

});