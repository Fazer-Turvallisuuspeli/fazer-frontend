export const selectIsSubmitting = state =>
  state.progress.perCategory[state.categories.currentCategoryId].isSubmitting;

export const selectIsCompleted = state => {
  if (!state.categories.currentCategoryId) return false;

  return state.progress.perCategory[state.categories.currentCategoryId]
    .isCompleted;
};
