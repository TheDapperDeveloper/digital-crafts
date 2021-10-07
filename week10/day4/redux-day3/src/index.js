import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/rootReducer';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

