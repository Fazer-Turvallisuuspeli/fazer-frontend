import { combineReducers } from 'redux';

import currentQuestionsReducer from './currentQuestionsReducer';
import progressReducer from './progressReducer';

const questionReducer = combineReducers({
  currentQuestions: currentQuestionsReducer,
  progress: progressReducer,
});

export default questionReducer;
