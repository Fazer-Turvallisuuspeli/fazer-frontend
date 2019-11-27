/* eslint-disable no-param-reassign */
import deepEqual from 'deep-equal';
import * as types from '../constants/actionTypes';
import {
  selectCategoriesData,
  selectCurrentCategoryId,
} from '../selectors/categoriesSelectors';
import { selectQuestionsByCategoryId } from '../selectors/questionsSelectors';
import {
  selectProgressInitializationStatus,
  selectCorrectAnswersByQuestionId,
  selectCheckedChoicesByQuestionId,
  selectCurrectUncompletedQuestions,
} from '../selectors/progressSelectors';
import { fetchCategories } from './categoriesActions';
import { fetchQuestions } from './questionsActions';

export const initProgress = () => async (dispatch, getState) => {
  // Wait until categories and questions are in state
  await dispatch(fetchCategories());
  await dispatch(fetchQuestions());

  const state = getState();

  // Abort if already cached
  const isProgressInitialized = selectProgressInitializationStatus(state);
  if (isProgressInitialized) return;

  const categories = selectCategoriesData(state);

  const perCategory = categories.reduce((categories, category) => {
    const categoryQuestions = selectQuestionsByCategoryId(state, category.id);

    const perQuestion = categoryQuestions.reduce((questions, question) => {
      questions[question.id] = {
        checkedChoices: [],
        isCompleted: false,
        isCorrect: false,
      };

      return questions;
    }, {});

    categories[category.id] = {
      isSubmitting: false,
      isCompleted: categoryQuestions.length < 1,
      totalQuestions: categoryQuestions.length,
      nthQuestion: 1,
      isLastQuestion: categoryQuestions.length === 1,
      correctAnswers: 0,
      wrongAnswers: 0,
      perQuestion,
    };
    return categories;
  }, {});

  dispatch({
    type: types.INIT_PROGRESS,
    payload: {
      perCategory,
    },
  });
};

export const setQuestionChoice = (questionId, choiceId) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const categoryId = selectCurrentCategoryId(state);

  dispatch({
    type: types.SELECT_QUESTION_CHOICE,
    payload: { categoryId, questionId, choiceId },
  });
};

export const submitQuestionAnswer = questionId => async (
  dispatch,
  getState
) => {
  const state = getState();
  const categoryId = selectCurrentCategoryId(state);

  const checkedChoices = selectCheckedChoicesByQuestionId(
    state,
    categoryId,
    questionId
  );
  const correctAnswers = selectCorrectAnswersByQuestionId(state, questionId);

  // TODO: Choice order shouldn't matter, e.g. checkedChoices [1, 3, 2] should be correct when correctAnswers is [1, 2, 3]
  let isCorrect = false;
  if (deepEqual(checkedChoices, correctAnswers)) {
    isCorrect = true;
  }

  dispatch({
    type: types.SUBMIT_QUESTION_ANSWER,
    payload: { categoryId, questionId, isCorrect },
  });
};

export const setNextQuestion = () => async (dispatch, getState) => {
  const state = getState();
  const uncompletedQuestions = selectCurrectUncompletedQuestions(state);

  const uncompletedQuestionIds = uncompletedQuestions.map(
    question => question[0]
  );

  let questionId;
  const categoryId = selectCurrentCategoryId(state);

  if (uncompletedQuestionIds.length === 0) {
    dispatch({
      type: types.CATEGORY_COMPLETED,
      payload: { categoryId },
    });

    return;
  }

  if (uncompletedQuestionIds.length === 1) {
    [questionId] = uncompletedQuestionIds;
  } else {
    questionId =
      uncompletedQuestionIds[
        Math.floor(Math.random() * uncompletedQuestionIds.length)
      ];
  }

  dispatch({
    type: types.SET_NEXT_QUESTION,
    payload: { categoryId },
  });

  dispatch({
    type: types.SET_CURRENT_QUESTION_ID,
    payload: { questionId },
  });
};
