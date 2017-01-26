(function () {
    'use strict';
    angular.module('app').controller('ordersCtrl', ordersCtrl);

    ordersCtrl.$inject = ['dataService'];

    function ordersCtrl(dataService) {
        var vm = this;
        vm.orders = null;

        activate();

        function activate() {
            dataService.getOrders().then((result) => { vm.orders = result.data.data });
        }
    }
})();