import { combineReducers } from 'redux';

import categoryReducer from './category';
import questionReducer from './question';
import infobankReducer from './infobankReducer';

const gameReducer = combineReducers({
  categories: categoryReducer,
  questions: questionReducer,
  infobank: infobankReducer,
});

export default gameReducer;
