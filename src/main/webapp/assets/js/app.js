'use strict';
define([ 'angular', 'service/services', 'controller/controllers','filter/filters', 'directive/directives',
    'controller/user/LoginController', 'controller/user/SignupController',
    'service/user/SessionService'], function (angular, service, controller, filter, directive) {

    var module = angular.module('mainApp', ['app.filters', 'app.services', 'app.directives', 'app.controllers']).
        config(['$routeProvider' , function($routeProvider) {
        $routeProvider.when('/login', {template: 'template/user/login.xhtml', controller: 'LoginController'});
        $routeProvider.when('/signup', {template: 'template/user/signup.xhtml', controller: 'SignupController'});
        $routeProvider.when('/home', {template: 'template/user/home.xhtml'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);




});
