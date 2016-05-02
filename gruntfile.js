module.exports = function(grunt) {
	var path = require('path');
	require('load-grunt-config')(grunt, {
		init: true,
		configPath: path.join(process.cwd(), 'source/tasks'),
		data: {
			projectDir  : 'public',
			projectDev  : 'source/assets',
			pkg: grunt.file.readJSON('package.json')
		}
	});
};
