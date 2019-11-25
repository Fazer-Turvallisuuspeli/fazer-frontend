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

export const selectCurrentQuestionId = createSelector(
  [selectQuestions],
  questions =>
    questions && questions.currentQuestionId
      ? questions.currentQuestionId
      : null
);

export const selectCurrentQuestion = createSelector(
  [selectQuestionsData, selectCurrentCategoryId, selectCurrentQuestionId],
  (questions, categoryId, questionId) =>
    questions && categoryId
      ? questions.find(question => question.id === questionId)
      : null
);
