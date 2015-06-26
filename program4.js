
var fs = require('fs');
var path = process.argv[2];
var print = function() {
	return function(err, data) {
		if (err) 
			throw err;
		var s = data.toString();
		console.log(s.split('\n').length-1);
	};
}
fs.readFile(path, print());

/*
var jsonObj = {name: 'thiago andrade', age: 30};

fs.openSync('test.json', 'a+', function(err, fd) {
	fs.write(fd, JSON.stringify(jsonObj), 
		function(err, written, string) {

		});
});
*/
