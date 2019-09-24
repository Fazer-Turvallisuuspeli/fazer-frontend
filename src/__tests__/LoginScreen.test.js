import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '../redux/store';
import LoginScreen from '../pages/LoginScreen';

describe('Login', () => {
  test('should render login text', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const loginTextElement = await waitForElement(() =>
      getByText('Kirjaudu sisään')
    );

    expect(loginTextElement).toHaveTextContent('Kirjaudu sisään');
  });
});
