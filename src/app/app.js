'use strict';

angular.module('siteMod', [
    'ui.router',
    'siteMod.templates',
    'siteMod.common'
])

// Configure states
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/views/main.tpl.html',
            controller: 'MainController',
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
});
