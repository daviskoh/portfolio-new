module.exports = function (grunt) {
    /**
     * Import Task Packages
     */

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);


    /**
     * Testing tasks
     */
    grunt.registerTask('test:unit', 'run unit tests', [
        'html2js',
        'karma:unit'
    ]);

    grunt.registerTask('test:unit:watch', 'run unit tests continuously, watching for changes', [
        'html2js',
        'karma:watch'
    ]);

    grunt.registerTask('test:reports', 'run unit & coverage tests and output results to ./reports', [
        'html2js',
        'karma:reports'
    ]);

    // add e2e test here

    /**
     * Build & serve tasks
     */

    grunt.registerTask('serve', 'builds dev Sass, and runs a dev server on localhost:3333', [
        'concurrent:dev',
        'jshint',
        'test:unit',
        'connect:app',
        'watch'
    ]);

    grunt.registerTask('dist', 'builds dist folder with fully optimised files', [
        'clean:dist',
        'concurrent:dist',
        'autoprefixer:dist',
        'useminPrepare',
        'concat:generated',
        'filerev:dist',
        'usemin',
        'htmlmin',
        'ngAnnotate:dist',
        'ngie',
        'uglify:dist'
    ]);

    grunt.registerTask('default', ['availabletasks']);

};
