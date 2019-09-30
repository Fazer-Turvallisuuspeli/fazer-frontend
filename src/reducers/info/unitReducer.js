import infoService from '../../services/infoService';

const initialState = { data: null, isLoading: false, error: null };

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_UNITS_REQUEST':
      return { ...state, isLoading: true };
    case 'FETCH_UNITS_SUCCESS':
      return {
        ...state,
        data: action.payload.units,
        isLoading: false,
        error: null,
      };
    case 'FETCH_UNITS_FAILURE':
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default unitReducer;

export const setUnits = () => {
  return async (dispatch, getState) => {
    // Abort if cached
    const { info } = getState();
    if (info.units.data) {
      return;
    }

    // Init loading state
    dispatch({
      type: 'FETCH_UNITS_REQUEST',
    });

    try {
      // Call API
      const data = await infoService.getInfo();
      const { units } = data;

      // Update data on success
      dispatch({
        type: 'FETCH_UNITS_SUCCESS',
        payload: { units },
      });
    } catch (error) {
      // Update error on failure
      dispatch({
        type: 'FETCH_UNITS_FAILURE',
        payload: { error },
      });
    }
  };
};
