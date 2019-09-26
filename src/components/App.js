import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../redux/store';
import LoginContainer from '../pages/LoginContainer';
import MainMenuContainer from '../pages/MainMenuContainer';
import GameMenuContainer from '../pages/GameMenuContainer';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/game-menu" component={GameMenuContainer} />
        <Route exact path="/" component={MainMenuContainer} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
