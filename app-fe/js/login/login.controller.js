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