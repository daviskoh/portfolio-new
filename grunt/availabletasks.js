module.exports = {
    tasks: {
        options: {
            filter: 'include',
            tasks: [
                'clean',
                'jshint',
                'sass',
                'test:unit',
                'test:unit:watch',
                'serve',
                'docs',
                'dist'
            ],
            groups: {
                'Testing tasks': [
                    'test:unit',
                    'test:unit:watch'
                ]
            }
        }
    }
};
