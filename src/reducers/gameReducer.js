const initialState = {};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const setData = data => {
  return {
    type: 'SET_DATA',
    data,
  };
};

export default gameReducer;
