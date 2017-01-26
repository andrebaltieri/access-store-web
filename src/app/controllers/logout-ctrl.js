(function () {
    'use strict';
    angular.module('app').controller('logoutCtrl', logoutCtrl);

    logoutCtrl.$inject = ['$rootScope', '$location'];

    function logoutCtrl($rootScope, $location) {
        var vm = this;

        activate();

        function activate() {
            
            $rootScope.token = '';
            $rootScope.user = { };

            localStorage.clear();
            $location.path('/login');
        }
    }
})();