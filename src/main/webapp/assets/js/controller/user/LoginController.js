'use strict';
define(['angular', 'controller/controllers', 'service/user/SessionService'], function(angular, controllers) {
    'use strict';
    return controllers.controller('LoginController', [
        '$scope', '$location', 'SessionService', function($scope , $location,  sessionService) {
            var session = sessionService.session();
            var user = {};
            $scope.login = function(){
                if (($scope.user.username != "") && ($scope.user.password == "angular"))
                {
                    session.authenticated = true;
                    session.username = $scope.user.username;
                    $location.path('/home');
                }
            }

        }
    ]);
});
