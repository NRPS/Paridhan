
define(['angularAMD'], function (angularAMD) {
    var app = angular.module("paridhan", []);
    app.controller('IndexCtrl', ['$scope', function ($scope) {
        $scope.data = 'Hello Prem';
    }])
    return angularAMD.bootstrap(app);
});