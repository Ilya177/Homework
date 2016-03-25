'use strict';

angular.module('myApp.cat', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cats', {
    templateUrl: 'cats/cats.html',
    controller: 'CatCtrl'
  });
}])

.controller('CatCtrl', function($scope) {
  function Cat(name, src) {
    this.name = name;
    this.src = src;
    this.countVotes = 0;
  }

  Cat.prototype.incVotes = function() { this.countVotes++; }
  Cat.prototype.decVotes = function() { this.countVotes--; }

  $scope.cats = [
    new Cat('cat1', 'cats/img/cat1.jpg'),
    new Cat('cat2', 'cats/img/cat2.jpg'),
    new Cat('cat3', 'cats/img/cat3.jpg'),
    new Cat('cat4', 'cats/img/cat4.jpg'),
    new Cat('cat5', 'cats/img/cat5.jpg')];
  $scope.cat = $scope.cats[0];

  $scope.selectCat = function (cat) {
    $scope.cat = cat;
    cat.wasSelected = true;
  }

  $scope.findCat = function() {
    $scope.filterExpression = $scope.searchText;
  }
});
