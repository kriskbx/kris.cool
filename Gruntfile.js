module.exports = function (grunt) {

    // Require helpers, load npm modules and config
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt);

    // Register some tasks
    grunt.registerTask('default', [
        'imagemin'
    ]);
    grunt.registerTask('deploy', [
        'rsync'
    ]);


};