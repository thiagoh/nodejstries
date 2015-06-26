
var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var res = {s : ''};

var gets = function(url, o, callback) {
		http.get(url, function(response) {
			response.pipe(bl(function(err, data) {
				if (err) throw err;
				if (o.s.length > 0) o.s += "\n";
				o.s += data.toString();
				callback();
			}));
		});
	};
gets(url1, res, 
	function() {
		gets(url2, res, 
			function() {
				gets(url3, res, function() {
					console.log(res.s);
				})
		})
	});
