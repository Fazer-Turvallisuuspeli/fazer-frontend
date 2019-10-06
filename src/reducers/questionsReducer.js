import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: null,
  currentQuestionId: null,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_QUESTIONS_REQUEST:
      return { ...state, isFetching: true, error: null, data: null };

    case types.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload.questions,
      };

    case types.FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        data: null,
      };

    default:
      return state;
  }
};

export default questionsReducer;
