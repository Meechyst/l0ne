(function(){
    'use strict';

    angular.module('l0ne.panel').controller('PanelController', PanelController);

    PanelController.$inject = ['$auth', 'toastr', 'Account', '$mdSidenav'];


    function PanelController($auth, toastr, Account, $mdSidenav){
        var vm = this;

        vm.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
        vm.getProfile = function() {
            Account.getProfile()
                .then(function(response) {
                    vm.user = response.data;
                })
                .catch(function(response) {
                    toastr.error(response.data.message, response.status);
                });
        };

        vm.getProfile();

    }



})();