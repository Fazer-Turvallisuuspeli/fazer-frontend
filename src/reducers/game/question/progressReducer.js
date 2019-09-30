const initialState = {
  nthQuestion: 0,
  isAnswering: false,
  isCompleted: false,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        nthQuestion: state.nthQuestion + 1,
        isAnswering: false,
      };
    case 'CHECK_ANSWER':
      return { ...state, isAnswering: true };
    case 'QUESTIONS_COMPLETED':
      return { ...state, isAnswering: false, isCompleted: true };
    case 'RESET_ANSWERS':
      return initialState;
    default:
      return state;
  }
};

export default progressReducer;

export const checkAnswer = () => {
  return async dispatch => {
    dispatch({
      type: 'CHECK_ANSWER',
    });
  };
};

export const nextQuestion = () => {
  return async dispatch => {
    dispatch({
      type: 'NEXT_QUESTION',
    });
  };
};

export const setCompleted = () => {
  return async dispatch => {
    dispatch({
      type: 'QUESTIONS_COMPLETED',
    });
  };
};

export const resetAnswers = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_ANSWERS',
    });
  };
};
