import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import asyncCall from './middleware/async_call';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

let store = createStore(reducers,
  applyMiddleware(thunkMiddleware,
    createLogger(),
    routerMiddleware(history),
    asyncCall
  )
);

export default store;
