import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import instructionsReducer from './instructionsReducer';
import welcomeMessageReducer from './welcomeMessageReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  instructions: instructionsReducer,
  welcomeMessage: welcomeMessageReducer,
});

export default rootReducer;
