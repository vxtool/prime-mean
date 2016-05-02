module.exports = function(grunt, options) {

  var mozjpeg = require('imagemin-mozjpeg');
  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    site: {
      options: {
      	optimizationLevel: 7,
      	svgoPlugins: [{
      		removeViewBox: false
      	}],
      	use: [mozjpeg()]
      },
      files: [{
      	optimizationLevel: 7,
      	expand: true,
      	cwd: '<%= projectDev %>img/site/',
      	src: [
      		'{*/,**/,**/*,**/**}*.{png,jpg,gif,svg}'
      	],
      	dest: '<%= projectDir %>/site/css/img/'
      }]
    },
    admin: {
      options: {
        optimizationLevel: 7,
        svgoPlugins: [{
          removeViewBox: false
        }],
        use: [mozjpeg()]
      },
      files: [{
        optimizationLevel: 7,
        expand: true,
        cwd: '<%= projectDev %>img/admin/',
        src: [
          '{*/,**/,**/*,**/**}*.{png,jpg,gif,svg}'
        ],
        dest: '<%= projectDir %>/admin/css/img/'
      }]
    }
  };
};
