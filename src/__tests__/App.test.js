import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '../redux/store';
import App from '../components/App';

describe('App', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
