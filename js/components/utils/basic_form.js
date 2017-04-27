import React from 'react';

class BasicForm extends React.Component {

  detectReturn (e) {
    if (e.keyCode === 13 && e.target.tagName !== 'TEXTAREA')  {
      this.props.handleSubmit();
    }
  }

  render () {
    return (
      <div
        className={this.props.className}
        onKeyUp={this.detectReturn.bind(this)}
      >
        {this.props.children}
      </div>
    );
  }

}

export default BasicForm;
