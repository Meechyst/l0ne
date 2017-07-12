(function() {
    'use strict';

    angular.module('l0ne.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$auth', 'Account'];

    function HomeController($scope, $auth, Account) {

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
