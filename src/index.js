import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import rootReducer from './rootReducer';
import RootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
sagaMiddleware.run(function*() {
  /* eslint func-names: [0] */
  yield RootSaga();
});
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
