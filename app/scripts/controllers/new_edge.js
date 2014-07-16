'use strict';

angular.module('swFrontApp').controller('NewEdgeController', function(edges, $scope, categories, ranks) {
  $scope.categories = categories.query();
  $scope.ranks = ranks.query().slice(1);



  $scope.$watch('newEdge', function(newVal, oldVal) {
    if (newVal.id) {
      var lookup = {};
      for (var i = 0, len = $scope.categories.length; i < len; i++) {
        lookup[$scope.categories[i].id] = $scope.categories[i];
      }
      newVal.category = lookup[newVal.category.id];

      lookup = {};
      for (var i = 0, len = $scope.ranks.length; i < len; i++) {
        lookup[$scope.ranks[i].name] = $scope.ranks[i];
      }
      newVal.rank = lookup[newVal.requirements[0].value];
    }
  });

  $scope.createEdge = function() {
    if ($scope.newEdge.id) {
      var edge = edges.update({id: $scope.newEdge.id}, $scope.newEdge);
      edge.$promise.then(function() {
        $scope.newEdge = new edges;
      });
    } else {
      var edge = $scope.newEdge.$save();
      edge.then(function(response) {
        $scope.edges.push(response);
        $scope.newEdge = new edges;
      });
    }
  };
});
