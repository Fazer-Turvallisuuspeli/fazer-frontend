import { createSelector } from 'redux-starter-kit';

export const selectWelcomeMessage = state => state.welcomeMessage;

export const selectWelcomeMessageData = createSelector(
  [selectWelcomeMessage],
  welcomeMessage => welcomeMessage.data
);
