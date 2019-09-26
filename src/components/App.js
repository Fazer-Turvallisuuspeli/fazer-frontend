import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../redux/store';
import LoginContainer from '../pages/LoginContainer';
import MainMenuContainer from '../pages/MainMenuContainer';
import GameMenuContainer from '../pages/GameMenuContainer';
import CategoryContainer from '../pages/CategoryContainer';
import NotFoundContainer from '../pages/NotFoundContainer';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={MainMenuContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/game-menu" component={GameMenuContainer} />
        <Route path="/categories/:categoryId" component={CategoryContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
