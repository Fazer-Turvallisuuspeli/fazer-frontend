/* eslint-disable no-param-reassign */
import * as types from '../constants/actionTypes';
import { selectCategories } from '../selectors/categoriesSelectors';
import { selectQuestions } from '../selectors/questionsSelectors';

export const initProgress = () => async (dispatch, getState) => {
  const state = getState();
  const categories = selectCategories(state);
  const questions = selectQuestions(state);

  if (!categories) return;

  /* const perCategory = {
    categoryId: {
      isSubmitting: false,
      isCompleted: false,
      totalQuestions: 0,
      currentQuestion: 0,
      isLastQuestion: false,
      correctAnswers: 0,
      wrongAnswers: 0,
    },
  }; */

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

  dispatch({ type: types.INIT_PROGRESS, payload: { perCategory } });
};
