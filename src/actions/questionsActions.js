/* eslint-disable no-use-before-define */
import * as types from '../constants/actionTypes';
import { callApi } from '../utils/apiUtils';
import { QUESTIONS_URL } from '../constants/apiConstants';
import { selectQuestions } from '../selectors/questionsSelectors';

export const fetchQuestionsSuccess = questions => ({
  type: types.FETCH_QUESTIONS_SUCCESS,
  payload: { questions },
});

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

  // Abort early if already cached
  if (questions) return;

  // Init fetching request
  dispatch(fetchQuestionsRequest());

  try {
    const questions = await callApi(QUESTIONS_URL);

    dispatch(fetchQuestionsSuccess(questions));
  } catch (error) {
    dispatch(fetchQuestionsError(error.message));
  }
};
