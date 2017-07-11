(function(){
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider){
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../templates/app-fe/js/login/login.html',
                controller: 'LoginController',
                controllerAs: 'LoginCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            });
    }

    angular.module('l0ne.login').config(routes);

})();