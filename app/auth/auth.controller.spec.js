describe('AuthController', function() {
  beforeEach(module('mutantApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    var $scope = {};
    $controller = _$controller_('AuthController', { $scope: $scope});
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      console.log($controller)
    });
  });
});
