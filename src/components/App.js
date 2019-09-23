import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from '../pages/LoginScreen';
import MainMenuScreen from '../pages/MainMenuScreen';
import GameMenuScreen from '../pages/GameMenuScreen';
import GameCategoryScreen from '../pages/GameCategoryScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mainMenu" component={MainMenuScreen} />
        <Route path="/gameMenu" component={GameMenuScreen} />
        <Route
          path="/gameCategory/:categoryId"
          component={GameCategoryScreen}
        />
        <Route component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default App;
