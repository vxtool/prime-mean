module.exports = function(grunt, options){

  var projectDir = options.projectDir;

  return {
    site: {
      files: [{
        expand: true,
        cwd: '<%= projectDir %>/site/css/',
        src: ['*.css'],
        dest: '<%= projectDir %>/site/css/'
      }]
    },
    admin: {
      files: [{
        expand: true,
        cwd: '<%= projectDir %>/admin/css/',
        src: ['*.css'],
        dest: '<%= projectDir %>/admin/css/'
      }]
    }
  };
};
