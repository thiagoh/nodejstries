
var mod = require('./readdir');

mod(process.argv[2], process.argv[3], function(err, list) {
	list.forEach(function(filename) {
		console.log(filename);
	});
});