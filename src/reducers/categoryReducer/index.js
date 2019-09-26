import { combineReducers } from 'redux';

import allCategoriesReducer from './allCategoriesReducer';

const categoryReducer = combineReducers({
  allCategories: allCategoriesReducer,
});

export default categoryReducer;
