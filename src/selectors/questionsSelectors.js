import { createSelector } from 'redux-starter-kit';
import { selectCurrentCategoryId } from './categoriesSelectors';

export const selectQuestions = state => state.questions.data;

export const selectCurrentQuestions = createSelector(
  [selectQuestions, selectCurrentCategoryId],
  (questions, categoryId) =>
    questions && categoryId
      ? questions.filter(question => question.categoryId === categoryId)
      : null
);
