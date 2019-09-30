import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import loginReducer from '../reducers/login';
import infoReducer from '../reducers/info';
import gameReducer from '../reducers/game';

export const history = createBrowserHistory();

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    info: infoReducer,
    game: gameReducer,
  });

export default createStore(
  rootReducer(history),
  applyMiddleware(routerMiddleware(history), thunk)
);
