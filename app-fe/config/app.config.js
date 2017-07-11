(function () {
    'use strict';

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    //base routing
    function routing($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('l0ne', {
            abstract: true,
            views: {
                'side': {
                    templateUrl: 'templates/sidebar.html',
                    controller: 'SideBarController'
                },
                'content': {
                    template: '<ui-view></ui-view>'
                }
            }
        });
    }

    angular.module('l0ne').config(routing);



    //access a unrestangularized element
    restangularConfig.$inject = ['RestangularProvider'];
    function restangularConfig(RestangularProvider) {
        RestangularProvider.setResponseExtractor(function (response) {
            var newResponse = response;
            if (angular.isArray(response)) {
                angular.forEach(newResponse, function (value, key) {
                    newResponse[key].original = angular.copy(value);
                });
            } else if (angular.isObject(response)) {
                newResponse.original = angular.copy(response);
            }

            return newResponse;
        });
    }

    angular.module('l0ne').config(restangularConfig);



    theme.$inject = ['$mdThemingProvider'];

    //configure theme hues
    function theme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '900'
            })
            .accentPalette('purple', {
                'default': '200'
            });
    }

    angular.module('l0ne').config(theme);


})();