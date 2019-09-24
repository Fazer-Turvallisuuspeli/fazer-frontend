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

export const setUser = data => {
  return {
    type: 'SET_USER',
    data,
  };
};

export const removeUser = () => {
  return {
    type: 'REMOVE_USER',
  };
};

export default userReducer;
