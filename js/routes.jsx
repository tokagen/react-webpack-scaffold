import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import LoginForm from './components/login_form'
import Main from './components/main'
import { Provider } from 'react-redux';
import store from './store';
import history from './history'

let routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LoginForm} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default routes;
