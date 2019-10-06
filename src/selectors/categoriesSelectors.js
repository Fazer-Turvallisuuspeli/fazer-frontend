import { createSelector } from 'redux-starter-kit';

export const selectCategories = state => state.categories.data;

export const selectCurrentCategoryId = state =>
  state.categories.currentCategoryId;

export const selectCurrentCategory = createSelector(
  [selectCategories, selectCurrentCategoryId],
  (selectCategories, selectCurrentCategoryId) =>
    selectCategories !== null
      ? selectCategories.find(
          category => category.id === selectCurrentCategoryId
        )
      : null
);
