import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureAppStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles/indexStyles';

ReactDOM.render(
  <Provider store={configureAppStore()}>
    <GlobalStyle />
    <RootContainer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
