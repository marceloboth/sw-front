'use strict'

angular.module('swFrontApp').service('categories', function() {

  this.query = function() {
    return [
      { name: 'All' },
      { name: 'Background' },
      { name: 'Combat' },
      { name: 'Leadership' }
    ];
  };
});
