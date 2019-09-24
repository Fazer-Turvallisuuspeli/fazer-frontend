import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';
import gameReducer from '../reducers/gameReducer';

export const history = createBrowserHistory();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    game: gameReducer,
  });

export default createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history), thunk)
);
