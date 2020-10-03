import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './state/reducers/rootReducer';
import { register } from './ServiceWorkerSetup';

let devMiddleWare;

if (process.env.NODE_ENV === 'development') {
  devMiddleWare = composeWithDevTools(applyMiddleware(thunk));
}

const store = createStore(
  rootReducer,
  devMiddleWare || applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Custom service worker
register();
