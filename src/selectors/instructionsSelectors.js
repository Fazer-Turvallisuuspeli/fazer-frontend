import { createSelector } from 'redux-starter-kit';

export const selectInstructions = state => state.instructions;

export const selectInstructionsData = createSelector(
  [selectInstructions],
  instructions => instructions.data
);

export const selectInstructionsVisibility = createSelector(
  [selectInstructions],
  instructions => instructions.isVisible
);
