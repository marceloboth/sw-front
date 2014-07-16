'use strict';

angular.module('swFrontApp').controller('FiltersController', function($scope, ranks, categories, filterBy) {
  $scope.ranks = ranks.query();
  filterBy.rank = $scope.ranks[0];

  $scope.categories = categories.query(function() {
    $scope.categories.unshift({name: 'All'});
    filterBy.category = $scope.categories[0];
  });
});
