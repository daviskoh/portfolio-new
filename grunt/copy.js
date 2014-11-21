'use strict';

module.exports = {
    dist: {
        expand: true,
        cwd: '<%= meta.src %>',
        src: [
            '{,*/}*.html',
            'assets/**/*',
            'styles/fonts/**/*'
        ],
        dest: '<%= meta.dist %>'
    }
};
