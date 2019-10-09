/* eslint-disable no-param-reassign */
import * as types from '../constants/actionTypes';
import {
  selectCategoriesData,
  selectCurrentCategoryId,
} from '../selectors/categoriesSelectors';
import { selectQuestionsByCategoryId } from '../selectors/questionsSelectors';
import { selectProgressInitializationStatus } from '../selectors/progressSelectors';
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

export const selectQuestionChoice = (questionId, choiceId) => async (
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
