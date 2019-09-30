import infoService from '../../services/infoService';

const initialState = { data: null, isLoading: false, error: null };

const welcomeMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WELCOME_MESSAGE':
      return { ...state, isLoading: true };
    case 'FETCH_WELCOME_MESSAGE_SUCCESS':
      return {
        ...state,
        data: action.welcomeMessage,
        isLoading: false,
        error: null,
      };
    case 'FETCH_WELCOME_MESSAGE_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default welcomeMessageReducer;

export const setWelcomeMessage = () => {
  return async (dispatch, getState) => {
    // Abort if cached
    const { info } = getState();
    if (info.welcomeMessage.data) {
      return;
    }

    // Init loading state
    dispatch({
      type: 'FETCH_WELCOME_MESSAGE',
    });

    try {
      // Call API
      const data = await infoService.getInfo();
      const { welcomeMessage } = data;

      // Update data on success
      dispatch({
        type: 'FETCH_WELCOME_MESSAGE_SUCCESS',
        welcomeMessage,
      });
    } catch (error) {
      // Update error on failure
      dispatch({
        type: 'FETCH_WELCOME_MESSAGE_FAILURE',
        error,
      });
    }
  };
};
