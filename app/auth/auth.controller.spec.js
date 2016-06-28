describe('AuthController', function() {
  beforeEach(module('mutantApp'));

  var $controller, AuthController;

  beforeEach(inject(function($controller){
    AuthController = $controller('AuthController', { });
  }));

  // http://jasmine.github.io/2.4/introduction.html#section-Included_Matchers
  it('should have set up a user to be defined', function() {
    expect(AuthController.user).toBeDefined();
  });

  it('should have a register function', function() {
    expect(AuthController.register).toBeDefined();
  });

  it('should have a login function', function() {
    expect(AuthController.login).toBeDefined();
  });

  describe('AuthController.register', function() {
    it('registers a valid user on firebase', function() {
      console.log('figure out how to test functions');
      console.log(AuthController);
    });
  });

  describe('AuthController.login', function() {
    it('registers a valid user on firebase', function() {
      console.log('figure out how to test functions');
      console.log(AuthController);
    });
  });
});
