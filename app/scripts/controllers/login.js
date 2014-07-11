'use strict';

angular.module('swFrontApp').controller('LoginController', function ($scope) {
  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      console.log("Ai caramba");
    } else {
      $scope.loginForm.submitted = true;
    }
  };
});
