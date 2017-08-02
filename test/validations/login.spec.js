import loginValidation from '../../js/validations/login';

let passingLogin = {
  email: 'email',
  password: 'password'
};
let noEmail = {
  password: 'password'
};
let noPassword = {
  email: 'email'
};

describe('loginValidation', function() {

  it('passes at valid login object', function() {
    expect(loginValidation(passingLogin)).toBeNull();
  });

  it('fails without email', function() {
    expect(loginValidation(noEmail)).not.toBeNull();
  });

  it('fails without password', function() {
    expect(loginValidation(noPassword)).not.toBeNull();
  });

});
