import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
//amazon moving in and building a warehouse on some land
import { Provider } from "react-redux";
// is the land that amazon is building it's warehouse on
import logger from "redux-logger";

import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));
//amazon now fills the store with employees. Reducers are the employees. They get you the state you want.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
