import { createSelector } from 'redux-starter-kit';

export const selectCategories = state => state.categories;

export const selectCategoriesData = createSelector(
  [selectCategories],
  categories => categories.data
);

export const selectCurrentCategoryId = createSelector(
  [selectCategories],
  categories => categories.currentCategoryId
);

export const selectCurrentCategory = createSelector(
  [selectCategoriesData, selectCurrentCategoryId],
  (categories, categoryId) =>
    categories && categoryId
      ? categories.find(category => category.id === categoryId)
      : null
);
