/* eslint-disable no-param-reassign */
import * as types from '../constants/actionTypes';
import { selectCategories } from '../selectors/categoriesSelectors';
import { selectQuestions } from '../selectors/questionsSelectors';
import { selectProgressInitializationStatus } from '../selectors/progressSelectors';
import { fetchCategories } from './categoriesActions';
import { fetchQuestions } from './questionsActions';

export const initProgress = () => async (dispatch, getState) => {
  // Wait until categories and questions are in state
  await dispatch(fetchCategories());
  await dispatch(fetchQuestions());

  const state = getState();
  const categories = selectCategories(state);
  const questions = selectQuestions(state);
  const isProgressInitialized = selectProgressInitializationStatus(state);

  // Abort if already cached
  if (isProgressInitialized) return;

  const perCategory = categories.reduce((categories, category) => {
    categories[category.id] = {
      isSubmitting: false,
      isCompleted:
        questions.filter(question => question.categoryId === category.id)
          .length < 1,
      totalQuestions: questions.filter(
        question => question.categoryId === category.id
      ).length,
      currentQuestion: 1,
      isLastQuestion:
        questions.filter(question => question.categoryId === category.id)
          .length === 1,
      correctAnswers: 0,
      wrongAnswers: 0,
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
