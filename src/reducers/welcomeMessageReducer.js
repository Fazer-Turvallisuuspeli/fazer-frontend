import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: null,
  isVisible: true,
};

const welcomeMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WELCOME_MESSAGE_REQUEST:
      return { ...state, isFetching: true, error: null, data: null };

    case types.FETCH_WELCOME_MESSAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload.welcomeMessage,
      };

    case types.FETCH_WELCOME_MESSAGE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        data: null,
      };

    case types.TOGGLE_WELCOME_MESSAGE_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };

    default:
      return state;
  }
};

export default welcomeMessageReducer;
