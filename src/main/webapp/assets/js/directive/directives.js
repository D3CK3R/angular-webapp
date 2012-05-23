'use strict';

/* Directives */

define([ 'angular'], function (angular) {

    var module = angular.module('app.directives', []);
    module.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
    return module;
});
