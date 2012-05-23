'use strict';

define([ 'angular' , 'angularResource' ], function (angular) {
    var module = angular.module('app.services', ['ngResource']);
    module.value('version', '0.1');
    return module;
});

