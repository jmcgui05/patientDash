var patientApp = angular.module('patientApp', []);

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
  }

}]);