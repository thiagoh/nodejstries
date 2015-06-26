
var fs = require('fs');
var path = require('path');

var ext = process.argv[3];
var print1 = function(err, list) {
	if (err) 
		throw err;

	for (var i = 0; i < list.length; i++) {
		if (list[i].indexOf("." + ext, list[i].length - (ext.length + 1)) >= 0)
			console.log(list[i]);
	}
};
var print2 = function(err, list) {
	if (err) 
		throw err;

	list.forEach(function(filename) {
		if (path.extname(filename) === '.' + process.argv[3])
			console.log(filename);
	});
};
fs.readdir(process.argv[2], print2);

/*
var jsonObj = {name: 'thiago andrade', age: 30};

fs.openSync('test.json', 'a+', function(err, fd) {
	fs.write(fd, JSON.stringify(jsonObj), 
		function(err, written, string) {

		});
});
*/
