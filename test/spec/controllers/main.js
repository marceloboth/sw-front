'use strict';

describe('Controller: MainCtrl', function () {

  var location, scope;

  // Our module
  beforeEach(module('swFrontApp'));

  // Inject all the dependecies which we need, if necessary mock, stub dependecies
  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    $controller('NavigationController', {
      $scope: scope
    });
  }));

  // Testing is active property
  describe('isActive', function() {
    it('returns true when paths are the same', function() {
      location.path("/test");
      expect(scope.isActive('/test')).toBeTruthy();
    });
    it('returns false when paths are the different', function() {
      location.path("/different");
      expect(scope.isActive('/test')).toBeFalsy();
    });
    it('returns true when starts with the same word', function() {
      location.path("/test/1/show");
      expect(scope.isActive('/test')).toBeTruthy();
    });
    it('returns true if it starts with the same word followed by query string', function() {
      location.path("/test?pg=1");
      expect(scope.isActive('/test')).toBeTruthy();
    });
  });

});
