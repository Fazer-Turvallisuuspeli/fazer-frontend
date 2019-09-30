const initialState = {
  isVisible: false,
  isRead: false,
};

const infobankReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_INFOBANK_VISIBILITY':
      return { ...state, isVisible: !state.isVisible, isRead: true };
    default:
      return state;
  }
};

export default infobankReducer;

export const toggleInfobankVisibility = () => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_INFOBANK_VISIBILITY',
    });
  };
};
