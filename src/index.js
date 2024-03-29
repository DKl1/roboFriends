import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {thunk} from 'redux-thunk';
import {createLogger} from "redux-logger/src";
import 'tachyons';

import './index.css';
import App from "./containers/App"
import {searchRobots, getRobotsReducer} from "./reducers";

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, getRobotsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>
);
