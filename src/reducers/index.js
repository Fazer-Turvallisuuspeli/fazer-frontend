import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import instructionsReducer from './instructionsReducer';
import welcomeMessageReducer from './welcomeMessageReducer';
import questionsReducer from './questionsReducer';
import progressReducer from './progressReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  instructions: instructionsReducer,
  welcomeMessage: welcomeMessageReducer,
  questions: questionsReducer,
  progress: progressReducer,
});

export default rootReducer;
