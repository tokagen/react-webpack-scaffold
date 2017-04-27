import Reducer from './base';

class LoginForm extends Reducer {

  constructor () {
    super();
    this.initialState = {
      email: '',
      password: ''
    }
  }

  onLoginFormChangeField (state, action) {
    let tmp = {};
    tmp[action.field] = action.value;
    return Object.assign({}, state, tmp);
  }

}

export default (new LoginForm()).reducerFunction();
