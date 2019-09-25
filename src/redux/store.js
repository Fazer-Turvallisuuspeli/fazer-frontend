import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';
import infoReducer from '../reducers/infoReducer';
import categoryReducer from '../reducers/categoryReducer';
import selectedCategoryReducer from '../reducers/selectedCategoryReducer';
import questionReducer from '../reducers/questionReducer';
import currentQuestionReducer from '../reducers/currentQuestionReducer';

export const history = createBrowserHistory();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    info: infoReducer,
    categories: categoryReducer,
    selectedCategory: selectedCategoryReducer,
    questions: questionReducer,
    currentQuestion: currentQuestionReducer,
  });

export default createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history), thunk)
);
