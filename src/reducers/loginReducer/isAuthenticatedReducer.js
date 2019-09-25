const initialState = false;

const isAuthenticatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AUTHENTICATED':
      return action.data;
    default:
      return state;
  }
};

export default isAuthenticatedReducer;

export const setIsAuthenticated = args => {
  return async dispatch => {
    dispatch({
      type: 'SET_IS_AUTHENTICATED',
      data: args,
    });
  };
};
