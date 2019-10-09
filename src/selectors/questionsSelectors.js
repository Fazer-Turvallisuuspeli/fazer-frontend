import { createSelector } from 'redux-starter-kit';
import { selectCurrentCategoryId } from './categoriesSelectors';

export const selectQuestions = state => state.questions;

export const selectQuestionsData = createSelector(
  [selectQuestions],
  questions => questions.data
);

export const selectCurrentQuestions = createSelector(
  [selectQuestionsData, selectCurrentCategoryId],
  (questions, categoryId) =>
    questions && categoryId
      ? questions.filter(question => question.categoryId === categoryId)
      : null
);

export const selectQuestionsByCategoryId = (state, categoryId) =>
  state.questions.data.filter(question => question.categoryId === categoryId);
