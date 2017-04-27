import React from 'react';
import { connect } from 'react-redux';
import { authenticated } from './utils/authentication_helper';

class Main extends React.Component {

  componentWillMount () {
    authenticated(this.props);
  }

  componentWillReceiveProps (nextProps) {
    authenticated(nextProps);
  }

  render () {
    return (
      <div></div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    session: state.session
  }
};

export default connect(mapStateToProps)(Main);
