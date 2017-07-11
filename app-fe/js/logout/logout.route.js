(function () {
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('l0ne.logout', {
                url: '/logout',
                template: null,
                controller: 'LogoutController',
                controllerAs: 'LogoutCtrl'
            });
    }

    angular.module('l0ne.logout').config(routes);

})();