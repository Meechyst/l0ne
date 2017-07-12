(function(){
    'use strict';

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider){
        $stateProvider
            .state('panel', {
               url: '/panel',
               templateUrl: '../templates/app-fe/js/panel/panel.html',
               controller: 'PanelController',
               controllerAs: 'PanelCtrl',
               resolve: {
                   loginRequired:loginRequired
               }
            });
    }

    angular.module('l0ne.panel').config(routes)


})();