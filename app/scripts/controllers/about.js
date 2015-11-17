'use strict';

/**
 * @ngdoc function
 * @name webappsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webappsApp
 */
angular.module('webappsApp')
  .controller('AboutCtrl', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.htmlReady();
  });