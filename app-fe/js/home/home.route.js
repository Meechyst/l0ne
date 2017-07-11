(function () {
    'use strict';

    routes.$inject = ['$stateProvider'];
    function routes($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../templates/app-fe/js/home/home.html',
                controller: 'HomeController'
            });
    }

    angular.module('l0ne.home').config(routes);
})();