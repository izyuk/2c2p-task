import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from "redux-promise";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from './store';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import {PersistGate} from "redux-persist/integration/react";

const loggerMiddleware = createLogger();
const persistConfig = {
    key: 'paymentData',
    storage: storage,
    whitelist: ['paymentData']
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    pReducer,
    composeWithDevTools(
        applyMiddleware(
            ReduxPromise,
            thunkMiddleware,
            loggerMiddleware
        )
    ));

const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
