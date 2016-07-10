'use strict';

/**
 * @ngdoc function
 * @name sampleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAngularAppApp
 */
angular.module('sampleAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    
	$scope.accountList = [
			{firstName: "john", lastName: "smith", accountNumber: '1111222201'}, 
			{firstName: "Samuels", lastName: "Mark", accountNumber: '1111222202'}
		];

  });
