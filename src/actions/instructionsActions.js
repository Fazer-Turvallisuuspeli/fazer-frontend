import * as types from '../constants/actionTypes';
import { selectInstructions } from '../selectors/instructionsSelectors';
import { callApi } from '../utils/apiUtils';
import { INSTRUCTIONS_URL } from '../constants/apiConstants';

export const fetchInstructionsSuccess = instructions => ({
  type: types.FETCH_INSTRUCTIONS_SUCCESS,
  payload: { instructions },
});

export const fetchInstructionsError = error => ({
  type: types.FETCH_INSTRUCTIONS_ERROR,
  payload: { error },
});

export const fetchInstructionsRequest = () => ({
  type: types.FETCH_INSTRUCTIONS_REQUEST,
});

export const fetchInstructions = () => async (dispatch, getState) => {
  const state = getState();
  const instructions = selectInstructions(state);

  // Abort early if categories are cached
  if (instructions) return;

  // Init fetching request
  dispatch(fetchInstructionsRequest());

  try {
    const instructions = await callApi(INSTRUCTIONS_URL);

    dispatch(fetchInstructionsSuccess(instructions));
  } catch (error) {
    dispatch(fetchInstructionsError(error));
  }
};

export const toggleInstructionsVisibility = () => ({
  type: types.TOGGLE_INSTRUCTIONS_VISIBILITY,
});
