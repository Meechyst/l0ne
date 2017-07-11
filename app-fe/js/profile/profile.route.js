(function() {
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('l0ne.profile', {
                url: '/settings',
                templateUrl: 'templates/profile.html',
                controller: 'ProfileController',
                controllerAs: 'ProfileCtrl',
                resolve: {
                    loginRequired: loginRequired
                }
            });
    }

    angular.module('l0ne.profile').config(routes);
})();