import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store';
import { GlobalStyle } from './indexStyles';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
