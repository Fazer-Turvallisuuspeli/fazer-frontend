import infoService from '../../services/infoService';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  isVisible: false,
};

const instructionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INSTRUCTIONS':
      return { ...state, isLoading: true };
    case 'FETCH_INSTRUCTIONS_SUCCESS':
      return {
        ...state,
        data: action.instructions,
        isLoading: false,
        error: null,
      };
    case 'FETCH_INSTRUCTIONS_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    case 'TOGGLE_INSTRUCTIONS_VISIBILITY':
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};

export default instructionReducer;

export const setInstructions = () => {
  return async dispatch => {
    // Init loading state
    dispatch({
      type: 'FETCH_INSTRUCTIONS',
    });

    try {
      // Call API
      const data = await infoService.getInfo();
      const { instructions } = data;

      // Update data on success
      dispatch({
        type: 'FETCH_INSTRUCTIONS_SUCCESS',
        instructions,
      });
    } catch (error) {
      // Update error on failure
      dispatch({
        type: 'FETCH_INSTRUCTIONS_FAILURE',
        error,
      });
    }
  };
};

export const toggleInstructionsVisibility = () => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_INSTRUCTIONS_VISIBILITY',
    });
  };
};
