var patientApp = angular.module('patientApp', []);
patientApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('Hello from controller');
}])