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
            //'satellizer',
            'ngMaterial',
            'restangular',
            'angularMoment',

            // Application Modules
            'doto.home',
            'doto.services',
            'doto.directives',
            'doto.login',
            'doto.register',
            'doto.logout',
            'doto.profile'
        ]
    );
})();