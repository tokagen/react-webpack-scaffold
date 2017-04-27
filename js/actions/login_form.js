import { Login } from '../repositories';

let prefix = 'LOGIN_FORM';

export function changeField (field, value) {
  return {
    type: `${prefix}_CHANGE_FIELD`,
    field,
    value
  };
}

export function submitForm (email, password) {
  return {
    type: `${prefix}_SUBMIT`,
    //async: true,
    //payload: {
    //  user: {
    //    email,
    //    password
    //  }
    //},
    //repository: Login
  };
}
