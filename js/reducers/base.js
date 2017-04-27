import _ from 'underscore';
import _string from 'underscore.string';

class Reducer {

  constructor () {
    let keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    this.conf = {};
    _.each(keys, (key) => {
      //TODO add check if 'on' is at the beginning of the method name
      if (key.match(/on[A-Z](.*)/)) {
        let actionType = _string.underscored(key.replace('on', '')).toUpperCase();
        this.conf[actionType] = this[key];
      }
    });
  }

  reducerFunction () {
    return (state = this.initialState, action) => {
      let callback = this.conf[action.type];
      if (_.isUndefined(callback)) {
        return state;
      } else {
        return callback.call(this, state, action);
      }
    }
  }

}

export default Reducer;
