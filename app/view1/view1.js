'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {

    $scope.rowCollection = [];

    $http.get('data/smalldata.json').success(function (accounts) {
      $scope.rowCollection = accounts.data;
        console.log(accounts.data)
    });


    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);

});