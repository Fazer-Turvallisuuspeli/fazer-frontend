const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const setCategories = data => {
  return {
    type: 'SET_CATEGORIES',
    data,
  };
};

export default categoryReducer;
