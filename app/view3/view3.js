'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl',

    function($scope, $http) {
    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
//    $scope.displayedCollection = [].concat($scope.rowCollection);

        $scope.list = [];
    $scope.save = function() {
        $scope.list.push(angular.copy($scope.person))

    }

    }



);