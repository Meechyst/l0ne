(function () {
    'use strict';

    angular.module('l0ne.services').factory('Account', Account);

    Account.$inject = ['$http'];

    function Account($http){

        var service = {
            user: null,
            getProfile: getProfile,
            updateProfile: updateProfile,
            getCurrentUser: getCurrentUser
        };

        function getProfile() {
            return $http.get('api/api/me');
        }

        function updateProfile(profileData) {
            return $http.put('api/api/me', profileData);
        }

        function getCurrentUser() {
            return $http.get('/api/user').then(function (result) {
                service.user = result.data;
                return result;
            });
        }

        getCurrentUser();


        return service;
    }
})();
