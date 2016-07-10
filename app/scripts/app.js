'use strict';

/**
 * @ngdoc overview
 * @name sampleAngularAppApp
 * @description
 * # sampleAngularAppApp
 *
 * Main module of the application.
 */
angular
  .module('sampleAngularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
