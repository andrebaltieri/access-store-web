(function () {
    'use strict';
    angular.module('app').controller('checkoutCtrl', checkoutCtrl);

    checkoutCtrl.$inject = ['$rootScope', '$location', 'SETTINGS', 'dataService'];

    function checkoutCtrl($rootScope, $location, SETTINGS, dataService) {
        var vm = this;
        vm.total = 0;
        vm.data = {
            customer: '7DF8D847-2D75-4799-A944-135C8285378C',
            discount: 0,
            deliveryFee: 0,
            items: []
        };

        vm.submit = submit;

        activate();

        function activate() {
            angular.forEach($rootScope.cart, function (item) {
                vm.data.items.push({ product: item.id, quantity: item.quantity });
            });
            getTotal();
        }

        function getTotal() {
            var result = 0;
            angular.forEach($rootScope.cart, function (item) {
                result += (item.price * item.quantity);
            });
            vm.total = result;
        }

        function submit() {
            $("#btn-submit").button("loading");
            dataService.postOrder(vm.data)
                .then((result) => {
                    toastr.success('Seu pedido foi realizado com sucesso!', 'Opa, tudo certo :)');
                    localStorage.removeItem(SETTINGS.CART_PATH);
                    $rootScope.cart = [];
                    $location.path('/');
                })
                .catch((error) => {
                    console.log(error);
                    toastr.error('Seu pedido não pode ser processado', 'Falha');
                })
                .finally(() => {
                    $("#btn-submit").button("reset");
                });
        }
    }
})();