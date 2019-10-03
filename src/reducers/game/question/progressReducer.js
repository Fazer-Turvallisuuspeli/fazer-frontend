const initialState = {
  nthQuestion: 0,
  isAnswering: false,
  isCompleted: false,
  selectedAnswerIds: [],
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        nthQuestion: state.nthQuestion + 1,
        isAnswering: false,
        selectedAnswerIds: [],
      };
    case 'SET_ANSWER':
      return {
        ...state,
        selectedAnswerIds: [
          ...state.selectedAnswerIds,
          ...action.payload.selectedAnswerIds,
        ],
      };
    case 'REMOVE_ANSWER':
      return {
        ...state,
        selectedAnswerIds: state.selectedAnswerIds.filter(
          answerId => answerId !== action.payload.choiceId
        ),
      };
    case 'CHECK_ANSWER':
      return { ...state, isAnswering: true };
    case 'QUESTIONS_COMPLETED':
      return {
        ...state,
        isAnswering: false,
        isCompleted: true,
        selectedAnswerIds: [],
      };
    case 'RESET_ANSWERS':
      return initialState;
    default:
      return state;
  }
};

export default progressReducer;

export const setAnswer = choiceIdsArr => {
  return async dispatch => {
    dispatch({
      type: 'SET_ANSWER',
      payload: { selectedAnswerIds: choiceIdsArr },
    });
  };
};

export const removeAnswer = choiceId => {
  return async dispatch => {
    dispatch({
      type: 'REMOVE_ANSWER',
      payload: { choiceId },
    });
  };
};

export const checkAnswer = () => {
  return async dispatch => {
    dispatch({
      type: 'CHECK_ANSWER',
    });
  };
};

export const nextQuestion = () => {
  return async (dispatch, getState) => {
    const { game } = getState();
    const { nthQuestion } = game.questions.progress;
    const totalAmountOfQuestions = game.questions.currentQuestions.data.length;

    // Last question has been answered
    if (nthQuestion + 1 === totalAmountOfQuestions) {
      dispatch({
        type: 'QUESTIONS_COMPLETED',
      });

      return;
    }

    dispatch({
      type: 'NEXT_QUESTION',
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
