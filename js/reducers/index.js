import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginForm from './login_form';
import session from './session';

let gameinnAdmin = combineReducers({
  loginForm,
  session,
  routing: routerReducer
});

export default gameinnAdmin;
