import { combineReducers } from 'redux';

import welcomeMessageReducer from './welcomeMessageReducer';
import unitReducer from './unitReducer';
import instructionReducer from './instructionReducer';

const infoReducer = combineReducers({
  welcomeMessage: welcomeMessageReducer,
  units: unitReducer,
  instructions: instructionReducer,
});

export default infoReducer;
