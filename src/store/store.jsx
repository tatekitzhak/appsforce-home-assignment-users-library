import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session'
import { PersistGate } from 'redux-persist/integration/react'
//import rootReducers from '@/store/reducer/index';
import { userReducers } from "@/store/reducer/reducer";

/// store holds the state of the application
/* 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
 */
const userPersistConfig = {
    key: 'user',
    storage: sessionStorage,
}

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    //storage:storageSession,
    // blacklist: ['apiProductSlice'],
    whitelist: ['users'],
    /* debug: true,
   whitelist: ['activity', 'user'] */
}
const rootReducers = combineReducers({
    user: persistReducer(userPersistConfig, userReducers),
    // notes: notesReducer
});


const persistedReducer = persistReducer(rootPersistConfig, rootReducers)


const store = createStore(persistedReducer,
    compose(
        applyMiddleware(
            thunk,
        )
    )
);
const persistor = persistStore(store);

function ReduxWrapper(props) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxWrapper;