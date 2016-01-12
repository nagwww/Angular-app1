'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function ($scope) {

    var firstnames = ['1', '2', '3', '4','32', '44'];
    var lastnames = ['2', '6', '9', '10','9', '12'];
    var dates = ['2', '6', '9', '10','9', '12'];
      var ball4s = ['2', '6', '9', '10','9', '12'];
        var ball5s = ['2', '6', '9', '10','9', '12'];
          var powerball = ['2', '6', '9', '10','9', '12'];



    var id = 1;

    function generateRandomItem(id) {

        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = lastnames[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2);
        var ball4 = ball4s[Math.floor(Math.random() * 3)];
        var ball5 = ball5s[Math.floor(Math.random() * 3)];



        return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: birthdate,
            balance: balance,
            ball4: ball4,
            ball5: ball5

        }
    }

  $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }

}]);