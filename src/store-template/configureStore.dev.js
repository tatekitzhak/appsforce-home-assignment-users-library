import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '@/store-template/reducers/rootReducer';

/**
 * 
 
 let store;
export default initialState => {
    if (store) {
        return store;
    }
    const createdStore = createStore(
        rootReducer,
        initialState,
        compose(window.devToolsExtension())
    );
    store = createdStore;
    return store;
};

 */

let store;

export default (initialState, confType) => {
    if (store) {
        return store;
    }
    const createdStore = createStore(rootReducer,
        compose(
            applyMiddleware(
                thunk,
            )
        )
    );
    store = createdStore;
    return store;
};


/**
 *
 * https://gist.github.com/fguardiola/031d14e7aeed4a967b630a44234498a6

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

 */


/**
 * https://www.educative.io/courses/practical-redux/YQQ3WQYMk6M
 
 store/configureStore.js



from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    
    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    return store;
}

 */