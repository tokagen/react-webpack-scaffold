import loginFormReducer from '../../js/reducers/login_form';

let initialState ={
  email: '',
  password: '',
  errors: {}
};

let errors = {
  login: {
    email: 'not_exist'
  }
};

describe('loginFormReducer', function() {

  it('returns initial state', function() {
    expect(loginFormReducer(undefined, {})).toEqual(initialState);
  });

  it('assigns field to state', function() {
    expect(loginFormReducer({}, {
      type: 'LOGIN_FORM_CHANGE_FIELD',
      field: 'email',
      value: 'email'
    })).toEqual({email: 'email'});
  });

  it('returns to initial state after successful login', function() {
    expect(loginFormReducer({}, {
      type: 'LOGIN_FORM_SUBMIT_SUCCESS'
    })).toEqual(initialState);
  });

  it('assigns errors on create failed', function() {
    expect(loginFormReducer({}, {
      type: 'LOGIN_FORM_SUBMIT_FAILED',
      response: {
        payload: errors
      }
    })).toEqual({errors: errors.login});
  });

  it('assigns errors', function() {
    expect(loginFormReducer({}, {
      type: 'LOGIN_FORM_SET_ERRORS',
      errors: errors.login
    })).toEqual({errors: errors.login});
  });

});
