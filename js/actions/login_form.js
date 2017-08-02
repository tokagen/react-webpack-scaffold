import repo from '../repositories';

let { Login } = repo;

let PREFIX = 'LOGIN_FORM';

export function changeField (field, value) {
  return {
    type: `${PREFIX}_CHANGE_FIELD`,
    field,
    value
  };
}

export function submitForm (email, password) {
  return {
    type: `${PREFIX}_SUBMIT`,
    async: true,
    payload: {
      login: {
        email,
        password
      }
    },
    repository: Login()
  };
}

export function setErrors (errors) {
  return {
    type: `${PREFIX}_SET_ERRORS`,
    errors
  };
}
