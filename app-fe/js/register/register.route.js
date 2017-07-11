(function(){
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider){
        $stateProvider
            .state('l0ne.signup', {
                url: '/signup',
                templateUrl: 'templates/register.html',
                controller: 'RegisterController',
                controllerAs: 'RegisterCtrl',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            });
    }

    angular.module('l0ne.register').config(routes);

})();