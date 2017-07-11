(function () {
    'use strict';

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('l0ne.home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            });
    }

    angular.module('l0ne.home').config(routes);
})();