const initialState = null;

const selectedCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CATEGORY':
      return action.data;
    default:
      return state;
  }
};

export const setSelectedCategory = data => {
  return {
    type: 'SET_SELECTED_CATEGORY',
    data,
  };
};

export default selectedCategoryReducer;
