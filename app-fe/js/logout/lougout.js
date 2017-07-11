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