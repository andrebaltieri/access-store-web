(function () {
    'use strict';
    angular.module('app').directive('status', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/status.html',
            scope: {
                code: '='
            }
        };
    });
})();