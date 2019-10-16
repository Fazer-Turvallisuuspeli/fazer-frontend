import { createSelector } from 'redux-starter-kit';
import {
  selectCurrentCategoryId,
  selectCategoriesData,
} from './categoriesSelectors';
import { selectCurrentQuestionId } from './questionsSelectors';

export const selectProgress = state => state.progress;

export const selectProgressPerCategory = createSelector(
  [selectProgress],
  progress => progress.perCategory
);

export const selectCurrectUncompletedQuestions = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId],
  (perCategory, categoryId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].perQuestion
      ? Object.entries(perCategory[categoryId].perQuestion).filter(
          question => question[1].isCompleted === false
        )
      : []
);

export const selectNthQuestion = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId],
  (perCategory, categoryId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].nthQuestion
      ? perCategory[categoryId].nthQuestion
      : 0
);

export const selectAmountOfQuestions = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId],
  (perCategory, categoryId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].totalQuestions
      ? perCategory[categoryId].totalQuestions
      : 0
);

export const selectIsSubmitting = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId, selectCurrentQuestionId],
  (perCategory, categoryId, questionId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].isSubmitting &&
    perCategory[categoryId].perQuestion[questionId].isSubmitting
      ? perCategory[categoryId].perQuestion[questionId].isSubmitting
      : false
);

export const selectIsCategoryCompleted = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId],
  (perCategory, categoryId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].isCompleted
      ? perCategory[categoryId].isCompleted
      : false
);

export const selectProgressInitializationStatus = createSelector(
  [selectProgress],
  progress => progress.isInitialized
);

export const selectCheckedChoicesByQuestionId = (
  state,
  categoryId,
  questionId
) =>
  state.progress.perCategory[categoryId].perQuestion[questionId].checkedChoices;

export const selectCorrectAnswersByQuestionId = (state, questionId) =>
  state.questions.data.find(question => question.id === questionId)
    .correctChoiceId;

export const selectIsQuestionCompleted = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId, selectCurrentQuestionId],
  (perCategory, categoryId, questionId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].perQuestion[questionId] &&
    perCategory[categoryId].perQuestion[questionId].isCompleted
      ? perCategory[categoryId].perQuestion[questionId].isCompleted
      : false
);

export const selectIsQuestionCorrect = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId, selectCurrentQuestionId],
  (perCategory, categoryId, questionId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].perQuestion[questionId] &&
    perCategory[categoryId].perQuestion[questionId].isCorrect
      ? perCategory[categoryId].perQuestion[questionId].isCorrect
      : false
);

export const selectCurrentCheckedChoices = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId, selectCurrentQuestionId],
  (perCategory, categoryId, questionId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].perQuestion[questionId] &&
    perCategory[categoryId].perQuestion[questionId].checkedChoices
      ? perCategory[categoryId].perQuestion[questionId].checkedChoices
      : []
);

export const selectNextCategoryId = createSelector(
  [selectCategoriesData, selectCurrentCategoryId],
  (categories, categoryId) =>
    categories &&
    categoryId &&
    categories[
      categories.indexOf(
        categories.find(category => category.id === categoryId)
      ) + 1
    ]
      ? categories[
          categories.indexOf(
            categories.find(category => category.id === categoryId)
          ) + 1
        ].id
      : categories[0].id
);

export const selectCompletedCategories = createSelector(
  [selectProgressPerCategory],
  perCategory =>
    perCategory &&
    Object.keys(perCategory)
      .filter(categoryId => perCategory[categoryId].isCompleted)
      .map(id => Number(id))
);

export const selectUncompletedCategories = createSelector(
  [selectProgressPerCategory],
  perCategory =>
    perCategory &&
    Object.keys(perCategory)
      .filter(categoryId => perCategory[categoryId].isCompleted === false)
      .map(id => Number(id))
);
