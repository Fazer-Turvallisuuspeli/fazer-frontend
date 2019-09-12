import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './indexStyles';
import App from './components/App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
