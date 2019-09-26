import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import loginReducer from '../reducers/loginReducer';
import infoReducer from '../reducers/infoReducer';
import categoryReducer from '../reducers/categoryReducer';

export const history = createBrowserHistory();

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    info: infoReducer,
    categories: categoryReducer,
  });

export default createStore(
  rootReducer(history),
  applyMiddleware(routerMiddleware(history), thunk)
);
