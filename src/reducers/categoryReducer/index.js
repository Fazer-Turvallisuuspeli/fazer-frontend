import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';
import currentCategoryReducer from './currentCategoryReducer';

const categoryReducer = combineReducers({
  allCategories: allCategoriesReducer,
  currentCategory: currentCategoryReducer,
});

export default categoryReducer;
