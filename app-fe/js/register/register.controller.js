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