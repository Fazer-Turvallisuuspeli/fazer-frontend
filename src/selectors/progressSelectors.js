import { createSelector } from 'redux-starter-kit';
import { selectCurrentCategoryId } from './categoriesSelectors';

export const selectProgressPerCategory = state => state.progress.perCategory;

export const selectIsSubmitting = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId],
  (perCategory, categoryId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].isSubmitting
      ? perCategory[categoryId].isSubmitting
      : false
);

export const selectIsCompleted = createSelector(
  [selectProgressPerCategory, selectCurrentCategoryId],
  (perCategory, categoryId) =>
    perCategory &&
    perCategory[categoryId] &&
    perCategory[categoryId].isCompleted
      ? perCategory[categoryId].isCompleted
      : false
);

export const selectProgressInitializationStatus = state =>
  state.progress.isInitialized;
