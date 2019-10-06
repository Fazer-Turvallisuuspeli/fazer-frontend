/* eslint-disable no-use-before-define */
import * as types from '../constants/actionTypes';
import { callApi } from '../utils/apiUtils';
import { QUESTIONS_URL } from '../constants/apiConstants';
import { selectQuestions } from '../selectors/questionsSelectors';
import { selectCurrentCategoryId } from '../selectors/categoriesSelectors';

export const fetchQuestionsSuccess = questions => async (
  dispatch,
  getState
) => {
  const state = getState();
  const categoryId = selectCurrentCategoryId(state);

  dispatch({
    type: types.FETCH_QUESTIONS_SUCCESS,
    payload: { questions },
  });

  dispatch(setCurrentQuestions(categoryId));
};

export const fetchQuestionsError = error => ({
  type: types.FETCH_QUESTIONS_ERROR,
  payload: { error },
});

export const fetchQuestionsRequest = () => ({
  type: types.FETCH_QUESTIONS_REQUEST,
});

export const fetchQuestions = () => async (dispatch, getState) => {
  const state = getState();
  const questions = selectQuestions(state);

  if (questions) return;

  dispatch(fetchQuestionsRequest());

  // Abort early if questions are cached

  try {
    const questions = await callApi(QUESTIONS_URL);

    dispatch(fetchQuestionsSuccess(questions));
  } catch (error) {
    dispatch(fetchQuestionsError(error.message));
  }
};

export const setCurrentQuestions = categoryId => async dispatch => {
  dispatch({ type: types.SET_CURRENT_QUESTIONS, payload: { categoryId } });
  dispatch(fetchQuestions());
};
