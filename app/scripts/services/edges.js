'use strict'

angular.module('swFrontApp').factory('edges', function($resource) {
  return $resource('/api/edges');
});
