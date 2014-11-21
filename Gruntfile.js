module.exports = function (grunt) {
    /**
     * Import Task Packages
     */

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt);

    /**
     * Build & serve tasks
     */

    grunt.registerTask('serve', 'builds dev Sass, and runs a dev server on localhost:3333', [
        'concurrent:dev',
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
        'uglify:dist'
    ]);

    grunt.registerTask('default', ['availabletasks']);

};
