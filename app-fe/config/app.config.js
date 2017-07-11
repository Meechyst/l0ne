(function () {
    'use strict';

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    //base routing
    function routing($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('l0ne', {
            abstract: true,
            views: {
                'top': {
                    templateUrl: 'templates/navbar.html',
                    controller: 'NavBarController'
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




    satellizr.$inject = ['$authProvider'];
    //credientals for login/registration
    function satellizr($authProvider) {

        $authProvider.facebook({
            clientId: '757867174376517'
        });

        $authProvider.google({
            clientId: '143939498224-8lp6k2em87gjpvj5ef1h0kl9ool68of5.apps.googleusercontent.com'
        });

        $authProvider.instagram({
            clientId: 'e1e1089a1b4646fa9298169af95fd93a'
        });

        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'Foursquare Client ID',
            redirectUri: window.location.origin,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });
    }

    angular.module('l0ne').config(satellizr);




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