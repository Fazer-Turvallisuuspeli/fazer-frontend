import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../redux/store';
import LoginScreen from '../pages/LoginScreen';
import MainMenuScreen from '../pages/MainMenuScreen';
import GameMenuScreen from '../pages/GameMenuScreen';
import GameCategoryScreen from '../pages/GameCategoryScreen';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/mainMenu" component={MainMenuScreen} />
        <Route path="/gameMenu" component={GameMenuScreen} />
        <Route
          path="/gameCategory/:categoryId"
          component={GameCategoryScreen}
        />
        <Route component={LoginScreen} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
