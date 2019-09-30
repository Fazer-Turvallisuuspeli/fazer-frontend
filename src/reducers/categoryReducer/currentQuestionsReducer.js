import questionService from '../../services/questionService';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  nthQuestion: 0,
  isAnswering: false,
  isCompleted: false,
};

const currentQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      return { ...state, isLoading: true };
    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        ...state,
        data: action.questions,
        isLoading: false,
        error: null,
      };
    case 'FETCH_QUESTIONS_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    case 'NEXT_QUESTION':
      return {
        ...state,
        nthQuestion: state.nthQuestion + 1,
        isAnswering: false,
      };
    case 'CHECK_ANSWER':
      return { ...state, isAnswering: true };
    case 'CHECK_ANSWER_SUCCESS':
      return { ...state, isAnswering: true };
    case 'CHECK_ANSWER_FAILURE':
      return { ...state, isAnswering: true };
    case 'QUESTIONS_COMPLETED':
      return { ...state, isAnswering: false, isCompleted: true };
    case 'RESET_CURRENT_QUESTIONS':
      return initialState;
    default:
      return state;
  }
};

export default currentQuestionsReducer;

export const setCurrentQuestions = args => {
  return async dispatch => {
    // Init loading state
    dispatch({
      type: 'FETCH_QUESTIONS',
    });

    try {
      // Call API
      const questions = await questionService.getQuestions(args.categoryId);

      // Update data on success
      dispatch({
        type: 'FETCH_QUESTIONS_SUCCESS',
        questions,
      });
    } catch (error) {
      // Update error on failure
      dispatch({
        type: 'FETCH_QUESTIONS_FAILURE',
        error,
      });
    }
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

export const resetCurrentQuestions = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_CURRENT_QUESTIONS',
    });
  };
};
