(function () {
    'use strict';

    angular.module('siteMod.common', [])
        .controller('MainController', MainController);

    MainController.$inject = ['$log'];

    function MainController($log) {
        this.userName = "Bob";
        this.$log = $log;
    }

    MainController.prototype.add2 = function (num) {
        this.$log.info('Adding', num);
        return num + 2;
    };

}());


