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