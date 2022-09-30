import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from '@/store/reducer/index';

/// store holds the state of the application
/* 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
 */

const store = createStore(rootReducers,
    compose(
        applyMiddleware(
            thunk,
        )
    )
);


function ReduxWrapper(props) {
    return (
      <Provider store={store}>
          {props.children}
      </Provider>
    )
  }
  
  export default ReduxWrapper;