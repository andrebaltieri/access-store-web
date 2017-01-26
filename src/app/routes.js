(function(){
    'use strict';
     angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/home.html',
                authorize: false
            })
            .when('/login', {
                controller: 'loginCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/login.html',
                authorize: false
            })
            .when('/logout', {
                controller: 'logoutCtrl',
                controllerAs: 'vm',
                template: '',                
                authorize: false
            })
            .when('/products', {
                controller: 'productListCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/product-list.html',                
                authorize: false
            })
            .when('/cart', {
                controller: 'cartCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/cart.html',                
                authorize: false
            })
            .when('/checkout', {
                controller: 'checkoutCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/checkout.html',                
                authorize: true
            })
            .when('/orders', {
                controller: 'ordersCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/orders.html',                
                authorize: true
            });
     });
})();