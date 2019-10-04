import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import currentCategoryReducer from './currentCategoryReducer';
import completedCategoriesReducer from './completedCategoriesReducer';

const categoryReducer = combineReducers({
  allCategories: allCategoriesReducer,
  currentCategory: currentCategoryReducer,
  completedCategories: completedCategoriesReducer,
});

export default categoryReducer;
