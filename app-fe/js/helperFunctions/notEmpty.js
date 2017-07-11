function notEmpty(value) {
    return (angular.isDefined(value) && !angular.isNull(value))
}
/**
 * Helper auth functions
 */
var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
        deferred.reject();
    } else {
        deferred.resolve();
    }
    return deferred.promise;
}];

var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
        deferred.resolve();
    } else {
        $location.path('/login');
    }
    return deferred.promise;
}];