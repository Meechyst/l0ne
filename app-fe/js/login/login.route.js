(function(){
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider){
        $stateProvider
            .state('l0ne.login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController',
                controllerAs: 'LoginCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            });
    }

    angular.module('l0ne.login').config(routes);

})();