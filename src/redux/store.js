import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';

export const history = createBrowserHistory();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
  });

export default createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history), thunk)
);