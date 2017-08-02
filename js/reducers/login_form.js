import Reducer from './base';

class LoginForm extends Reducer {

  constructor () {
    super();
    this.initialState = {
      email: '',
      password: '',
      errors: {}
    };
  }

  onLoginFormChangeField (state, action) {
    let tmp = {};
    tmp[action.field] = action.value;
    return Object.assign({}, state, tmp);
  }

  onLoginFormSubmitSuccess (state, action) {
    return this.initialState;
  }

  onLoginFormSubmitFailed (state, action) {
    return Object.assign({}, state, {errors: action.response.payload.login});
  }

  onLoginFormSetErrors (state, action) {
    return Object.assign({}, state, {errors: action.errors});
  }

}

export default (new LoginForm()).reducerFunction();
