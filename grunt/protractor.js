'use strict';

module.exports = {
    options: {
        configFile: "config/protractor.conf.js",
        keepAlive: true,
        noColor: false,
        includeStackTrace: false
    },

    "e2e-local": {
        options: {
            args: {
                seleniumServerJar: 'test/support/selenium-server-standalone.jar',
                chromeDriver: './node_modules/chromedriver/bin/chromedriver'
            }
        }
    }
};
