import errorParse from '../../js/validations/base';

let input = {
  details: [{
    path: 'login',
    type: 'invalid'
  }]
};

let output = {
  login: ['invalid']
};

describe('errorParse', function() {

  it('passes when no errors', function() {
    expect(errorParse(null)).toBeNull();
  });

  it('parses errors correctly', function() {
    expect(errorParse(input)).toEqual(output);
  });

});
