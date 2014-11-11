'use strict';

module.exports = {
    dev: [
        'newer:sass:dev'
    ],

    dist: [
		'test:unit',
        'newer:sass:dist',
        'newer:copy:dist',
        'newer:html2js:app'
    ]
};
