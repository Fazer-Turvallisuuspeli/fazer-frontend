import { combineReducers } from 'redux';

import welcomeMessageReducer from './welcomeMessageReducer';
import unitReducer from './unitReducer';

const infoReducer = combineReducers({
  welcomeMessage: welcomeMessageReducer,
  units: unitReducer,
});

export default infoReducer;
