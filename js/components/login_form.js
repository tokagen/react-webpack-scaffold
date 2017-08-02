import React from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm, setErrors } from '../actions/login_form';
import BasicForm from './utils/basic_form';
import { unauthenticated } from './utils/authentication_helper';
import loginValidation from '../validations/login';

class LoginForm extends React.Component {

  constructor (props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount () {
    unauthenticated(this.props);
  }

  componentWillReceiveProps (nextProps) {
    unauthenticated(nextProps);
  }

  onEmailChange (e) {
    this.props.dispatch(changeField('email', e.target.value));
  }

  onPasswordChange (e) {
    this.props.dispatch(changeField('password', e.target.value));
  }

  submitForm () {
    let validationErrors = loginValidation({
      email: this.props.email,
      password: this.props.password
    });
    if (validationErrors) {
      this.props.dispatch(setErrors(validationErrors));
    } else {
      this.props.dispatch(submitForm(this.props.email, this.props.password));
    }
  }

  render () {
    return (
      <BasicForm
        className='container'
        handleSubmit={this.submitForm}
      >
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
            <BasicForm.TextInput
              autoFocus={true}
              value={this.props.email}
              onChange={this.onEmailChange}
              id='login_email'
              errors={this.props.errors.email}
              label='Login'
            />
            <BasicForm.TextInput
              type='password'
              value={this.props.password}
              onChange={this.onPasswordChange}
              id='login_password'
              label='Password'
              errors={this.props.errors.password}
            />
            <div className='form-group'>
              <button
                className='btn btn-primary'
                onClick={this.submitForm}
              >
                {'Login'}
              </button>
            </div>
          </div>
        </div>
      </BasicForm>
    );
  }

}

let mapStateToProps = state => {
  return {
    email: state.loginForm.email,
    password: state.loginForm.password,
    errors: state.loginForm.errors,
    session: state.session
  };
};

export default connect(mapStateToProps)(LoginForm);
