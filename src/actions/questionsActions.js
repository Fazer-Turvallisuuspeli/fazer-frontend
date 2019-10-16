/* eslint-disable no-use-before-define */
import * as types from '../constants/actionTypes';
import { callApi } from '../utils/apiUtils';
import { QUESTIONS_URL } from '../constants/apiConstants';
import { selectQuestionsData } from '../selectors/questionsSelectors';
import { fetchCategories } from './categoriesActions';
import { selectCurrectUncompletedQuestions } from '../selectors/progressSelectors';

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
  const questions = selectQuestionsData(state);

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

export const setCurrentQuestionId = () => async (dispatch, getState) => {
  // Wait until categories and questions are in state
  await dispatch(fetchCategories());
  await dispatch(fetchQuestions());

  const state = getState();
  const uncompletedQuestions = selectCurrectUncompletedQuestions(state);

  const uncompletedQuestionIds = uncompletedQuestions.map(question =>
    Number(question[0])
  );

  let questionId;

  // Abort early if all questions completed
  if (uncompletedQuestionIds.length === 0) {
    return;
  }

  // Select the last remaining uncompleted question
  if (uncompletedQuestionIds.length === 1) {
    [questionId] = uncompletedQuestionIds;
  }

  // Select random uncompleted question
  if (uncompletedQuestionIds.length > 1) {
    questionId =
      uncompletedQuestionIds[
        Math.floor(Math.random() * uncompletedQuestionIds.length)
      ];
  }

  dispatch({
    type: types.SET_CURRENT_QUESTION_ID,
    payload: {
      questionId,
    },
  });
};
