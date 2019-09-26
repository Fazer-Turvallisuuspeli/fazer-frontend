import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import loginReducer from '../reducers/loginReducer';
import infoReducer from '../reducers/infoReducer';

export const history = createBrowserHistory();

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    info: infoReducer,
  });

export default createStore(
  rootReducer(history),
  applyMiddleware(routerMiddleware(history), thunk)
);
