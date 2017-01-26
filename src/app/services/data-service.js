(function () {
    'use strict';
    angular.module('app').factory('dataService', dataService);

    dataService.$inject = ['$rootScope', '$http', 'SETTINGS'];

    function dataService($rootScope, $http, SETTINGS) {
        return {
            login: login,
            getProducts: getProducts,
            postOrder: postOrder,
            getOrders: getOrders
        };

        function login(data) {
            var dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
            return $http.post(SETTINGS.SERVICE_URL + 'account/v1', dt, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        }

        function getProducts() {
            return $http.get(SETTINGS.SERVICE_URL + 'products/v1');
        }

        function getOrders() {
            var headers = { headers: { 'Authorization': 'Bearer ' + $rootScope.token } };
            return $http.get(SETTINGS.SERVICE_URL + 'orders/v1', headers);
        }

        function postOrder(data) {
            var headers = { headers: { 'Authorization': 'Bearer ' + $rootScope.token } };
            return $http.post(SETTINGS.SERVICE_URL + 'orders/v1', data, headers);
        }
    }
})();