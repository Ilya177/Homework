'use strict';

angular.module('myApp.task2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task2', {
    templateUrl: 'task2/task2.html',
    controller: 'Task2Ctrl'
  });
}])

.controller('Task2Ctrl', [function() {

}]);
