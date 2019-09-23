import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import LoginScreen from '../pages/LoginScreen';

describe('Login', () => {
  test('should render login text', async () => {
    const { getByText } = render(<LoginScreen />);
    const loginTextElement = await waitForElement(() =>
      getByText('Kirjaudu sisään')
    );

    expect(loginTextElement).toHaveTextContent('Kirjaudu sisään');
  });
});
