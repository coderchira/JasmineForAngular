/// <reference path="../../index.html" />


(function () {
    var appRoutes = angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', { templateUrl: '../../index.html' })
        .when('/admin', { templateUrl: '../view/admin.html' })
        .otherwise({ reDirectTo: '/' });
    }]);
})();