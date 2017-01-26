(function () {
    'use strict';

    angular.module('app').run(function ($rootScope, $location, SETTINGS) {
        $rootScope.token = '';
        $rootScope.user = {};
        $rootScope.cart = [];

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.authorize && !$rootScope.token) {
                $location.path("/login");
            }
        });

        loadInfo();
        
        function loadInfo() {
            var token = localStorage.getItem(SETTINGS.TOKEN_PATH);
            var user = angular.fromJson(localStorage.getItem(SETTINGS.USER_PATH));
            $rootScope.cart = angular.fromJson(localStorage.getItem(SETTINGS.CART_PATH));

            if (token != null && token != '' && user != null && user != '') {
                $rootScope.token = token;
                $rootScope.user = user;
                $location.path('/');
            }
        }
    });
})();