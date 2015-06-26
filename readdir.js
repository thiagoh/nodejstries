
module.exports = function(directory, extension, callback) {

	var fs = require('fs');
	var path = require('path');

	fs.readdir(directory, function(err, list) {
		if (err) {
			return callback(err);
		}

		list = list.filter(function(filename) {
			return path.extname(filename) === '.' + extension;
		});

		callback(null, list);
	});
}