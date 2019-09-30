import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import currentCategoryReducer from './currentCategoryReducer';
import infobankReducer from './infobankReducer';
import currentQuestionsReducer from './currentQuestionsReducer';

const categoryReducer = combineReducers({
  allCategories: allCategoriesReducer,
  currentCategory: currentCategoryReducer,
  infobank: infobankReducer,
  currentQuestions: currentQuestionsReducer,
});

export default categoryReducer;
