(function() {
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: '../templates/app-fe/js/profile/profile.html',
                controller: 'ProfileController',
                controllerAs: 'ProfileCtrl',
                resolve: {
                    loginRequired: loginRequired
                }
            });
    }

    angular.module('l0ne.profile').config(routes);
})();