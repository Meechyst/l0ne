(function () {  //god bless taner reyiz
    'use strict';

    angular.module('l0ne',
        [
            // Vendor dependencies
            'ngResource',
            'ngMessages',
            'ngAnimate',
            'toastr',
            'ui.router',
            'satellizer',
            'ngMaterial',
            'restangular',
            'angularMoment',

            // Application Modules
            'l0ne.home',
            'l0ne.services',
            'l0ne.directives',
            'l0ne.login',
            'l0ne.register',
            'l0ne.navbar',
            'l0ne.logout',
            'l0ne.profile'
        ]
    );
})();
(function () {
    'use strict';

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




    api.$inject = ['Restangular'];

    function api(Restangular) {
        Restangular.setBaseUrl('/api');
    }

    angular.module('l0ne').run(api);



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
(function(){
    'use strict';

    angular.module('l0ne.home', []);
    angular.module('l0ne.services', []);
    angular.module('l0ne.directives', []);
    angular.module('l0ne.login', []);
    angular.module('l0ne.register', []);
    angular.module('l0ne.navbar', []);
    angular.module('l0ne.logout', []);
    angular.module('l0ne.profile', []);

})();
(function(){
    'use strict';

    angular.module('l0ne.directives', []);

})();
angular.module('l0ne.directives')
    .directive('passwordMatch', function() {
        return {
            require: 'ngModel',
            scope: {
                otherModelValue: '=passwordMatch'
            },
            link: function(scope, element, attributes, ngModel) {
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue === scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ngModel.$validate();
                });
            }
        };
    });
angular.module('l0ne.directives')
    .directive('passwordStrength', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                var indicator = element.children();
                var dots = Array.prototype.slice.call(indicator.children());
                var weakest = dots.slice(-1)[0];
                var weak = dots.slice(-2);
                var strong = dots.slice(-3);
                var strongest = dots.slice(-4);

                element.after(indicator);

                element.bind('keyup', function() {
                    var matches = {
                            positive: {},
                            negative: {}
                        },
                        counts = {
                            positive: {},
                            negative: {}
                        },
                        tmp,
                        strength = 0,
                        letters = 'abcdefghijklmnopqrstuvwxyz',
                        numbers = '01234567890',
                        symbols = '\\!@#$%&/()=?¿',
                        strValue;

                    angular.forEach(dots, function(el) {
                        el.style.backgroundColor = '#ebeef1';
                    });

                    if (ngModel.$viewValue) {
                        // Increase strength level
                        matches.positive.lower = ngModel.$viewValue.match(/[a-z]/g);
                        matches.positive.upper = ngModel.$viewValue.match(/[A-Z]/g);
                        matches.positive.numbers = ngModel.$viewValue.match(/\d/g);
                        matches.positive.symbols = ngModel.$viewValue.match(/[$-/:-?{-~!^_`\[\]]/g);
                        matches.positive.middleNumber = ngModel.$viewValue.slice(1, -1).match(/\d/g);
                        matches.positive.middleSymbol = ngModel.$viewValue.slice(1, -1).match(/[$-/:-?{-~!^_`\[\]]/g);

                        counts.positive.lower = matches.positive.lower ? matches.positive.lower.length : 0;
                        counts.positive.upper = matches.positive.upper ? matches.positive.upper.length : 0;
                        counts.positive.numbers = matches.positive.numbers ? matches.positive.numbers.length : 0;
                        counts.positive.symbols = matches.positive.symbols ? matches.positive.symbols.length : 0;

                        counts.positive.numChars = ngModel.$viewValue.length;
                        tmp += (counts.positive.numChars >= 8) ? 1 : 0;

                        counts.positive.requirements = (tmp >= 3) ? tmp : 0;
                        counts.positive.middleNumber = matches.positive.middleNumber ? matches.positive.middleNumber.length : 0;
                        counts.positive.middleSymbol = matches.positive.middleSymbol ? matches.positive.middleSymbol.length : 0;

                        // Decrease strength level
                        matches.negative.consecLower = ngModel.$viewValue.match(/(?=([a-z]{2}))/g);
                        matches.negative.consecUpper = ngModel.$viewValue.match(/(?=([A-Z]{2}))/g);
                        matches.negative.consecNumbers = ngModel.$viewValue.match(/(?=(\d{2}))/g);
                        matches.negative.onlyNumbers = ngModel.$viewValue.match(/^[0-9]*$/g);
                        matches.negative.onlyLetters = ngModel.$viewValue.match(/^([a-z]|[A-Z])*$/g);

                        counts.negative.consecLower = matches.negative.consecLower ? matches.negative.consecLower.length : 0;
                        counts.negative.consecUpper = matches.negative.consecUpper ? matches.negative.consecUpper.length : 0;
                        counts.negative.consecNumbers = matches.negative.consecNumbers ? matches.negative.consecNumbers.length : 0;

                        // Calculations
                        strength += counts.positive.numChars * 4;
                        if (counts.positive.upper) {
                            strength += (counts.positive.numChars - counts.positive.upper) * 2;
                        }
                        if (counts.positive.lower) {
                            strength += (counts.positive.numChars - counts.positive.lower) * 2;
                        }
                        if (counts.positive.upper || counts.positive.lower) {
                            strength += counts.positive.numbers * 4;
                        }
                        strength += counts.positive.symbols * 6;
                        strength += (counts.positive.middleSymbol + counts.positive.middleNumber) * 2;
                        strength += counts.positive.requirements * 2;

                        strength -= counts.negative.consecLower * 2;
                        strength -= counts.negative.consecUpper * 2;
                        strength -= counts.negative.consecNumbers * 2;

                        if (matches.negative.onlyNumbers) {
                            strength -= counts.positive.numChars;
                        }
                        if (matches.negative.onlyLetters) {
                            strength -= counts.positive.numChars;
                        }

                        strength = Math.max(0, Math.min(100, Math.round(strength)));

                        if (strength > 85) {
                            angular.forEach(strongest, function(el) {
                                el.style.backgroundColor = '#008cdd';
                            });
                        } else if (strength > 65) {
                            angular.forEach(strong, function(el) {
                                el.style.backgroundColor = '#6ead09';
                            });
                        } else if (strength > 30) {
                            angular.forEach(weak, function(el) {
                                el.style.backgroundColor = '#e09115';
                            });
                        } else {
                            weakest.style.backgroundColor = '#e01414';
                        }
                    }
                });
            },
            template: '<span class="password-strength-indicator"><span></span><span></span><span></span><span></span></span>'
        };
    });
function notEmpty(value) {
    return (angular.isDefined(value) && !angular.isNull(value))
}
/**
 * Helper auth functions
 */
var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
        deferred.reject();
    } else {
        deferred.resolve();
    }
    return deferred.promise;
}];

var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
        deferred.resolve();
    } else {
        $location.path('/login');
    }
    return deferred.promise;
}];
(function () {
    'use strict';

    angular.module('l0ne.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$http'];

    function HomeController($scope, $http) {

    }
})();
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
(function(){
    'use strict';

    angular.module('l0ne.login').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', '$auth', 'toastr'];

    function LoginController($scope, $location, $auth, toastr) {
        //login with normal credientals
        $scope.login = function() {
            $auth.login($scope.user)
                .then(function() {
                    toastr.success('You have successfully signed in!');
                    $location.path('/');
                })
                .catch(function(error) {
                    toastr.error(error.data.message, error.status);
                });
        };
        //login with social network provider
        $scope.authenticate = function(provider) {
            $auth.authenticate(provider)
                .then(function() {
                    toastr.success('You have successfully signed in with ' + provider + '!');
                    $location.path('/');
                })
                .catch(function(error) {
                    if (error.message) {
                        // Satellizer promise reject error.
                        toastr.error(error.message);
                    } else if (error.data) {
                        // HTTP response error from server
                        toastr.error(error.data.message, error.status);
                    } else {
                        toastr.error(error);
                    }
                });
        };
    }


})();
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
(function () {
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('logout', {
                url: '/logout',
                template: null,
                controller: 'LogoutController',
                controllerAs: 'LogoutCtrl'
            });
    }

    angular.module('l0ne.logout').config(routes);

})();
(function(){
    'use strict';

    angular.module('l0ne.logout').controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$location','$auth', 'toastr'];

    function LogoutController($location, $auth, toastr) {
        if (!$auth.isAuthenticated()) { return; }
        $auth.logout()
            .then(function() {
                toastr.info('You have been logged out');
                $location.path('/');
            });
    }
})();
(function() {
    'use strict';

    angular.module('l0ne.navbar').controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$auth', 'Account'];

    function NavbarController($scope, $auth, Account) {

        $scope.currentNavItem = 'page1';

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $scope.$watch(function () {
            return Account.user;
        }, function (user) {
            $scope.user = user;
        });

    }

})();

(function(){
    'use strict';

    angular.module('l0ne.profile').controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', '$auth','toastr','Account'];

    function ProfileController($scope, $auth, toastr, Account){
        $scope.getProfile = function() {
            Account.getProfile()
                .then(function(response) {
                    $scope.user = response.data;
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });
        };
        $scope.updateProfile = function() {
            Account.updateProfile($scope.user)
                .then(function() {
                    toastr.success('Profile has been updated');
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });
        };
        $scope.link = function(provider) {
            $auth.link(provider)
                .then(function() {
                    toastr.success('You have successfully linked a ' + provider + ' account');
                    $scope.getProfile();
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });
        };
        $scope.unlink = function(provider) {
            $auth.unlink(provider)
                .then(function() {
                    toastr.info('You have unlinked a ' + provider + ' account');
                    $scope.getProfile();
                })
                .catch(function(response) {
                    toastr.error(response.data ? response.data.message : 'Could not unlink ' + provider + ' account', response.status);
                });
        };

        $scope.getProfile();
    }

})();
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
(function () {
    'use strict';

    angular.module('l0ne.register').controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', '$location', '$auth', 'toastr'];

    function RegisterController($scope, $location, $auth, toastr) {
        $scope.signup = function () {
            $auth.signup($scope.user)
                .then(function (response) {
                    $auth.setToken(response);
                    $location.path('/');
                    toastr.info('You have successfully created a new account and have been signed-in');
                })
                .catch(function (response) {
                    toastr.error(response.data.message);
                });
        };
    }
})();
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
(function () {
    'use strict';

    angular.module('l0ne.services').factory('Account', Account);

    Account.$inject = ['$http'];

    function Account($http){

        var service = {
            user: null,
            getProfile: getProfile,
            updateProfile: updateProfile,
            //getCurrentUser: getCurrentUser
        };

        function getProfile() {
            return $http.get('/api/api/me');
        }

        function updateProfile(profileData) {
            return $http.put('/api/api/me', profileData);
        }

        //function getCurrentUser() {
        //    return $http.get('/api/user').then(function (result) {
        //        service.user = result.data;
        //        return result;
        //    });
        //}
        //
        //getCurrentUser();


        return service;
    }
})();
