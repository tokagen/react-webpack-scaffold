import React from 'react';
import { connect } from 'react-redux';
import { changeField, submitForm } from '../actions/login_form';
import BasicForm from './utils/basic_form';
import { unauthenticated } from './utils/authentication_helper';

class LoginForm extends React.Component {

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
    this.props.dispatch(submitForm(this.props.email, this.props.password));
  }

  render () {
    return (
      <BasicForm
        className='container'
        handleSubmit={this.submitForm.bind(this)}
      >
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className='form-group'>
              <label htmlFor='login_email'>{'Email'}</label>
              <input
                className='form-control'
                autoFocus={true}
                value={this.props.email}
                onChange={this.onEmailChange.bind(this)}
                id='login_email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='login_password'>{'Password'}</label>
              <input
                className='form-control'
                type='password'
                value={this.props.password}
                onChange={this.onPasswordChange.bind(this)}
                id='login_password'
              />
            </div>
            <div className='form-group'>
              <button
                className='btn btn-primary'
                onClick={this.submitForm.bind(this)}
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
    session: state.session
  };
};

export default connect(mapStateToProps)(LoginForm);
