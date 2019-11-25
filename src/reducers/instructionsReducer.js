import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: null,
  isVisible: false,
};

const instructionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INSTRUCTIONS_REQUEST:
      return { ...state, isFetching: true, error: null, data: null };

    case types.FETCH_INSTRUCTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload.instructions,
      };

    case types.FETCH_INSTRUCTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        data: null,
      };

    case types.TOGGLE_INSTRUCTIONS_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };

    default:
      return state;
  }
};

export default instructionsReducer;
