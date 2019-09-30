import questionService from '../../../services/questionService';
import { resetAnswers } from './progressReducer';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const currentQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_REQUEST':
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
    case 'RESET_CURRENT_QUESTIONS':
      return initialState;
    default:
      return state;
  }
};

export default currentQuestionsReducer;

export const setCurrentQuestions = () => {
  return async (dispatch, getState) => {
    // Init loading state
    dispatch({
      type: 'FETCH_QUESTIONS_REQUEST',
    });

    try {
      const { game } = getState();
      const categoryId = game.categories.currentCategory.data.id;

      // Call API
      const questions = await questionService.getQuestions(categoryId);

      // Update data on success
      dispatch({
        type: 'FETCH_QUESTIONS_SUCCESS',
        questions,
      });

      dispatch(resetAnswers());
    } catch (error) {
      // Update error on failure
      dispatch({
        type: 'FETCH_QUESTIONS_FAILURE',
        error,
      });
    }
  };
};

export const resetCurrentQuestions = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_CURRENT_QUESTIONS',
    });
  };
};
