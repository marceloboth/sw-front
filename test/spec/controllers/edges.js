'use strict';

describe('EdgesController', function () {

  var scope;

  beforeEach(module('swFrontApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('EdgesController', {
      $scope: scope
    });
  }));

  describe('displayRequirements', function() {
    var reqs;

    it('concatenates name and value of the requirement', function() {
      reqs = [{ name: 'Agility', value: 'd6' }];
      expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
    });

    it('ignores name if it is null', function() {
      reqs = [{ name: null, value: 'Novice' }];
      expect(scope.displayRequirements(reqs)).toEqual('Novice');
    });

    it('requirements are delimited by comma', function() {
      reqs = [{ name: 'Agility', value: 'd6' },{ name: null, value: 'Novice' }];
      expect(scope.displayRequirements(reqs)).toEqual('Agility d6, Novice');
    });

  });
});
