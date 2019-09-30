import { combineReducers } from 'redux';

import currentQuestionsReducer from './currentQuestionsReducer';
import answersReducer from './answersReducer';

const questionReducer = combineReducers({
  currentQuestions: currentQuestionsReducer,
  answers: answersReducer,
});

export default questionReducer;
