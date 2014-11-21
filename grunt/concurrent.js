'use strict';

module.exports = {
    dev: [
        'newer:sass:dev'
    ],

    dist: [
        'newer:sass:dist',
        'newer:copy:dist'
    ]
};
