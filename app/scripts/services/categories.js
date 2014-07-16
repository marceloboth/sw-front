'use strict'

angular.module('swFrontApp').factory ('categories', function($resource) {
  return $resource('/api/categories');
});
