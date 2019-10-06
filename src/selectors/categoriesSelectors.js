import { createSelector } from 'redux-starter-kit';

export const selectCategories = state => state.categories.data;

export const selectCurrentCategoryId = state =>
  state.categories.currentCategoryId;

export const selectCurrentCategory = createSelector(
  [selectCategories, selectCurrentCategoryId],
  (categories, categoryId) =>
    categories && categoryId
      ? categories.find(category => category.id === categoryId)
      : null
);
