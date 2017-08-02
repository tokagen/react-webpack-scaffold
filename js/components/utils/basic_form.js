import React from 'react';
import ClassNames from 'classnames';

class BasicForm extends React.Component {

  constructor (props) {
    super(props);
    this.detectReturn = this.detectReturn.bind(this);
  }

  detectReturn (e) {
    if (e.keyCode === 13 && e.target.tagName !== 'TEXTAREA')  {
      this.props.handleSubmit();
    }
  }

  render () {
    return (
      <div
        className={this.props.className}
        onKeyUp={this.detectReturn}
      >
        {this.props.children}
      </div>
    );
  }

}

class TextInput extends React.Component {

  groupClassName () {
    return ClassNames('form-group', {
      'has-danger': this.props.errors
    });
  }

  inputClassName () {
    return ClassNames('form-control', {
      'form-control-danger': this.props.errors
    });
  }

  renderErrors () {
    if (this.props.errors) {
      return this.props.errors.map((item, index) => {
        return (
          <div className='form-control-feedback' key={index}>{item}</div>
        );
      });
    }
  }

  render () {
    return (
      <div className={this.groupClassName()}>
        <label className='form-control-label' htmlFor={this.props.id}>{this.props.label}</label>
        <input
          autoFocus={this.props.autoFocus}
          type={this.props.type ? this.props.type : 'text'}
          className={this.inputClassName()}
          value={this.props.value}
          onChange={this.props.onChange}
          id={this.props.id}
        />
        {this.renderErrors()}
      </div>
    );
  }

}

class Select extends React.Component {

  groupClassName () {
    return ClassNames('form-group', {
      'has-danger': this.props.errors
    });
  }

  inputClassName () {
    return ClassNames('form-control', {
      'form-control-danger': this.props.errors
    });
  }

  renderOptions () {
    return this.props.collection.map((el, index) => {
      return (
        <option
          key={index}
          value={el.id}
        >
          {el[this.props.name_field]}
        </option>
      );
    });
  }

  renderErrors () {
    if (this.props.errors) {
      return this.props.errors.map((item, index) => {
        return (
          <div className='form-control-feedback' key={index}>{item}</div>
        );
      });
    }
  }

  render () {
    return (
      <div className={this.groupClassName()}>
        <label className='form-control-label' htmlFor={this.props.id}>{this.props.label}</label>
        <select
          autoFocus={this.props.autoFocus}
          className={this.inputClassName()}
          onChange={this.props.onChange}
          id={this.props.id}
          value={this.props.value}
        >
          <option value={null} />
          {this.renderOptions()}
        </select>
        {this.renderErrors()}
      </div>
    );
  }

}

BasicForm.TextInput = TextInput;
BasicForm.Select = Select;

export default BasicForm;
