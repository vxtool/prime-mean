module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      outputStyle: 'compressed'
    },
    site: {
      files: [{
        expand: true,
        cwd: '<%= projectDev %>/scss/site',
        src: ['*.scss'],
        dest: '<%= projectDir %>/site/css/',
        ext: '.css'
      }]
    },
    admin: {
      files: [{
        expand: true,
        cwd: '<%= projectDev %>/scss/admin',
        src: ['*.scss'],
        dest: '<%= projectDir %>/admin/css/',
        ext: '.css'
      }]
    }
  };
};
