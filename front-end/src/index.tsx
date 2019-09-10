import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
// Could not find types for react-snapshot
// @ts-ignore
// import { render } from 'react-snapshot';
import { render } from 'react-dom';
import './betterwebsite.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchUsers, requestUsers } from './state_management/reducers';
import thunkMiddleware from 'redux-thunk';


let middleware = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
    let logger = require('redux-logger')
    middleware = [...middleware, logger.createLogger()]
}

const store = createStore(
    combineReducers({ searchUsers, requestUsers }),
    applyMiddleware(...middleware)
)

// if (process.env.NODE_ENV === 'development') {
//     store = createStore(
//         combineReducers({ searchUsers, requestUsers }),
//         applyMiddleware(thunkMiddleware, createLogger())
//     );
// } else {
//     console.log(process.env.NODE_ENV)
//     store = createStore(
//         combineReducers({ searchUsers, requestUsers }),
//         applyMiddleware(thunkMiddleware));
// }

render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();