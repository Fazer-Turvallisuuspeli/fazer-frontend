import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureAppStore from '../store/configureStore';
import RootContainer from '../containers/RootContainer';

describe('App', () => {
  test('renders correctly', () => {
    render(
      <Provider store={configureAppStore()}>
        <RootContainer />
      </Provider>
    );
  });
});
