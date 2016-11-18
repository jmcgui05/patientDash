var patientApp = angular.module('patientApp', []);

patientApp.filter('offset', function() {
  return function(input, start) {
    if(input === undefined) {
      input = 'Loading'; //TODO hack to avoid console error while data is loading
    }
    start = parseInt(start, 10);
    return input.slice(start);
  };
});

patientApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('Hello from controller');

  //set default sortType to name
  $scope.sortType = 'patient.meta.name.sortable';
  //set the default sort order
  $scope.sortReverse = false;
  //set the default search/filter term
  $scope.searchTrial = 'PCSK9 for Statin resistant patients with high cholesterol';

  $http.get('/patientList').success(function(response) {
    $scope.patientList = response;
  });

  $scope.updatePatient = function(){
    console.log('scope function called')
    $http.post('/patientList', $scope.patient);
  };

  $scope.itemsPerPage = 5;
  $scope.currentPage = 0;
  $scope.items = [];

  for (var i=0; i<50; i++) {
    $scope.items.push({
      id: i, name: "name "+ i, description: "description " + i
    });
  }

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

}]);