// ... src/middleware/crash.js
import { createError } from '../actions/error';
export default store => next => action => {
    try {
        if (action.error) {
            console.error(action.error);
            console.error(action.info);
        }
        return next(action);
    } catch (err) {
        const { user } = store.getState();
        console.error(err);
        window.Raven.setUserContext(user);
        window.Raven.captureException(err);
        return store.dispatch(createError(err));
    }
};


//... src/store/configureStore.prod.js

import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers/root';
import crashReporting from '../middleware/crash';

let store;
export default function configureStore(initialState) {
  if (store) {
    return store;
  }
  store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, crashReporting)
  ));
  return store;
}

