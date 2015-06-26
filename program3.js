
var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var s = buf.toString();

/*
var jsonObj = {name: 'thiago andrade', age: 30};

fs.openSync('test.json', 'a+', function(err, fd) {
	fs.write(fd, JSON.stringify(jsonObj), 
		function(err, written, string) {

		});
});
*/
console.log(s.split('\n').length-1);