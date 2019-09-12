import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './indexStyles';
import App from './components/App';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
