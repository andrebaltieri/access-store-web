(function () {
    'use strict';
    angular.module('app').controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$http', '$rootScope', '$location', 'SETTINGS', 'dataService'];

    function loginCtrl($http, $rootScope, $location, SETTINGS, dataService) {
        var vm = this;
        vm.form = {};
        vm.submit = submit;

        activate();

        function activate() {

        }

        function submit() {
            $("#btn-submit").button("loading");

            dataService.login(vm.form)
                .then((result) => {
                    $rootScope.token = result.data.access_token;
                    $rootScope.user = { username: result.data.user };

                    localStorage.setItem(SETTINGS.TOKEN_PATH, result.data.access_token);
                    localStorage.setItem(SETTINGS.USER_PATH, angular.toJson($rootScope.user));

                    $location.path('/');
                })
                .catch((error) => {
                    toastr.error('Usuário ou Senha Inválidos', 'Falha no Login');
                })
                .finally(() => {
                    $("#btn-submit").button("reset");
                });
        }
    }
})();