import { combineReducers } from 'redux';

import welcomeMessageReducer from './welcomeMessageReducer';

const infoReducer = combineReducers({
  welcomeMessage: welcomeMessageReducer,
});

export default infoReducer;
