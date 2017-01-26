(function () {
    'use strict';
    angular.module('app').controller('cartCtrl', cartCtrl);

    cartCtrl.$inject = ['$rootScope', 'SETTINGS'];

    function cartCtrl($rootScope, SETTINGS) {
        var vm = this;
        vm.total = 0;

        vm.getTotal = getTotal;

        activate();

        function activate() {
            getTotal();
        }

        function getTotal() {
            var result = 0;
            angular.forEach($rootScope.cart, function (item) {
                result += (item.price * item.quantity);
            });
            vm.total = result;

            localStorage.setItem(SETTINGS.CART_PATH, angular.toJson($rootScope.cart));
        }
    }
})();