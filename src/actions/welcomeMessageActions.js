import * as types from '../constants/actionTypes';
import { selectWelcomeMessage } from '../selectors/welcomeMessageSelectors';
import { callApi } from '../utils/apiUtils';
import { WELCOME_MESSAGE_URL } from '../constants/apiConstants';

export const fetchWelcomeMessageSuccess = welcomeMessage => ({
  type: types.FETCH_WELCOME_MESSAGE_SUCCESS,
  payload: { welcomeMessage },
});

export const fetchWelcomeMessageError = error => ({
  type: types.FETCH_WELCOME_MESSAGE_ERROR,
  payload: { error },
});

export const fetchWelcomeMessageRequest = () => ({
  type: types.FETCH_WELCOME_MESSAGE_REQUEST,
});

export const fetchWelcomeMessage = () => async (dispatch, getState) => {
  const state = getState();
  const welcomeMessage = selectWelcomeMessage(state);

  // Abort early if categories are cached
  if (welcomeMessage) return;

  dispatch(fetchWelcomeMessageRequest());

  try {
    const welcomeMessage = await callApi(WELCOME_MESSAGE_URL);

    dispatch(fetchWelcomeMessageSuccess(welcomeMessage));
  } catch (error) {
    dispatch(fetchWelcomeMessageError(error));
  }
};
