import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import Login from '../components/Login';

describe('Login', () => {
  test('should render login text', async () => {
    const { getByText } = render(<Login />);
    const loginTextElement = await waitForElement(() =>
      getByText('Kirjaudu sisään')
    );

    expect(loginTextElement).toHaveTextContent('Kirjaudu sisään');
  });
});
