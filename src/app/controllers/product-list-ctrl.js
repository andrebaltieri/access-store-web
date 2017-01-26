(function () {
    'use strict';
    angular.module('app').controller('productListCtrl', productListCtrl);

    productListCtrl.$inject = ['$rootScope', 'dataService', 'SETTINGS'];

    function productListCtrl($rootScope, dataService, SETTINGS) {
        var vm = this;
        vm.products = null;
        vm.orderBy = '+title';

        vm.addItemToCart = addItemToCart;

        activate();

        function activate() {
            dataService.getProducts()
                .then((result) => {
                    vm.products = result.data.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {

                });
        }

        function addItemToCart(product) {
            $rootScope.cart.push({
                id: product.id,
                title: product.title,
                quantity: 1,
                price: product.price
            });

            localStorage.setItem(SETTINGS.CART_PATH, angular.toJson($rootScope.cart));
        }
    }
})();