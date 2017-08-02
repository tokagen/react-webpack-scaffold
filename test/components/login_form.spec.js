import React from 'react';
import { mount } from 'enzyme';
import ConnectedLoginForm from '../../js/components/login_form';
import BasicForm from '../../js/components/utils/basic_form';
import loginValidation from '../../js/validations/login';
import { submitForm } from '../../js/actions/login_form';

let LoginForm = ConnectedLoginForm.WrappedComponent;

describe('LoginForm', () => {
  let props;
  let mountedLoginForm;
  let dispatch;
  const loginForm = () => {
    if (!mountedLoginForm) {
      mountedLoginForm = mount(
        <LoginForm {...props} />
      );
    }
    return mountedLoginForm;
  };

  const loginFormNode = () => {
    return loginForm().node;
  };

  beforeEach(() => {
    dispatch = jest.fn();
    props = {
      email: 'email',
      password: 'password',
      errors: {},
      dispatch: dispatch
    };
    mountedLoginForm = undefined;
  });

  it('renders BasicForm', () => {
    expect(loginForm().find(BasicForm).length).toEqual(1);
  });

  it('renders two inputs', () => {
    expect(loginForm().find(BasicForm.TextInput).length).toEqual(2);
  });

  it('renders button', () => {
    expect(loginForm().find('button').length).toEqual(1);
  });

  it('passes the handleSubmit to BasicForm', () => {
    expect(loginForm().find(BasicForm).props().handleSubmit).toEqual(loginFormNode().submitForm);
  });

  it('passes the handleSubmit to button', () => {
    expect(loginForm().find('button').props().onClick).toEqual(loginFormNode().submitForm);
  });

  it('passes correct props to login TextInput', () => {
    let loginInput = loginForm().find(BasicForm.TextInput).nodes[0];
    expect(loginInput.props.onChange).toEqual(loginFormNode().onEmailChange);
    expect(loginInput.props.value).toEqual(props.email);
    expect(loginInput.props.errors).toEqual(props.errors.email);
  });

  it('passes correct props to password TextInput', () => {
    let passwordInput = loginForm().find(BasicForm.TextInput).nodes[1];
    expect(passwordInput.props.onChange).toEqual(loginFormNode().onPasswordChange);
    expect(passwordInput.props.value).toEqual(props.password);
    expect(passwordInput.props.errors).toEqual(props.errors.password);
  });

  describe('onEmailChange', () => {

    it('calls dispatch with correct parameters', () => {
      loginFormNode().onEmailChange({target: {value: 'test'}});
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOGIN_FORM_CHANGE_FIELD',
        value: 'test',
        field: 'email'
      });
    });

  });
  
  describe('onPasswordChange', () => {

    it('calls dispatch with correct parameters', () => {
      loginFormNode().onPasswordChange({target: {value: 'test'}});
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOGIN_FORM_CHANGE_FIELD',
        value: 'test',
        field: 'password'
      });
    });

  });
  
  describe('submitForm', () => {

    describe('with invalid props', () => {

      beforeEach(() => {
        props = {
          email: '',
          password: '',
          dispatch: dispatch,
          errors: {}
        };
      });

      it('calls dispatch with correct parameters', () => {
        loginFormNode().submitForm();
        expect(dispatch).toHaveBeenCalledWith({
          type: 'LOGIN_FORM_SET_ERRORS',
          errors: loginValidation({
            email: props.email,
            password: props.password
          })
        });
      });

    });

    describe('with valid props', () => {

      it('calls dispatch with correct parameters', () => {
        loginFormNode().submitForm();
        //It takes first argument of first call of dispatch
        expect(dispatch.mock.calls[0][0].type).toEqual(submitForm(props.email, props.password).type);
        expect(dispatch.mock.calls[0][0].payload).toEqual(submitForm(props.email, props.password).payload);
      });

    });

  });

});
