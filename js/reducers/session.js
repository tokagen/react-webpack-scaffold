import Reducer from './base';

class Session extends Reducer {

  constructor () {
    super();
    this.initialState = null
  }

  onLoginFormSubmit (state, action) {
    return true;
  }

}

export default (new Session()).reducerFunction();
