'use strict';
define(['angular', 'service/services'], function(angular, service) {
    'use strict';
    return service.service('SessionService', [ '$rootScope',
         function($rootScope) {

            var session = {
                username      : "",
                authenticated  : false
            };
            $rootScope.session = session;
            // Expose service accessor functions
            return {
                session : function () {
                    return session;
                },
                logout : function () {
                    session.authenticated = false;
                }
            };
        }
    ]);
});