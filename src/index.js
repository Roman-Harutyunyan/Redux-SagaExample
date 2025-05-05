import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import watchers from './store/sagaWatchers';
import reducer from './store/reducers/reducer';
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(saga)));
const root = ReactDOM.createRoot(document.getElementById('root'));

saga.run(watchers);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
