(function(){
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider){
        $stateProvider
            .state('register', {
                url: '/signup',
                templateUrl: '../templates/app-fe/js/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'RegisterCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            });
    }

    angular.module('l0ne.register').config(routes);

})();