//var _appContextPath = '${contextPath}';
require.config({
    baseUrl: 'js/',
    paths: {
        jquery: 'lib/jquery/jquery.min',
        angular: 'lib/angular/angular-module',
        angularResource: 'lib/angular/angular-resource',
        bootstrap: 'lib/bootstrap/bootstrap',
        console:'lib/console/console',
        underscore:'lib/underscore/underscore'
    }
    , priority: [
        "jquery"
    ]
    , urlArgs: 'v=1.0'
});
require( ['bootstrap', 'angular', 'app'],
    function( bootstrap, angular, app) {
        //This function will be called when all the dependencies
        //listed above are loaded. Note that this function could
        //be called before the page is loaded.
        //This callback is optional.
    }
);