(function() {
    'use strict';

    angular.module('doto.navbar').controller('NavbarController', NavbarController);

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
