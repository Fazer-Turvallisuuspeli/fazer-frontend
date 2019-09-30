const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data;
    case 'REMOVE_USER':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

export const setUser = args => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data: args,
    });
  };
};
