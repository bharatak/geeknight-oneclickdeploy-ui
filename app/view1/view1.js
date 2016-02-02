'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$templateCache',function($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = 'http-hello.html';

  $scope.fetch = function() {
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    then(function(response) {
      $scope.status = response.status;
      $scope.data = response.data;
    }, function(response) {
      $scope.data = response.data || "Request failed";
      $scope.status = response.status;
    });
  };

  $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
  };
}]);
