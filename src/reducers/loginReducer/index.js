import { combineReducers } from 'redux';

import userReducer from './userReducer';
import isAuthenticatedReducer from './isAuthenticatedReducer';

const loginReducer = combineReducers({
  user: userReducer,
  isAuthenticated: isAuthenticatedReducer,
});

export default loginReducer;
