const initialState = { data: null, error: null };

const currentCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      return { ...state, data: action.category, error: null };
    case 'SET_CURRENT_CATEGORY_FAILURE':
      return { ...state, error: action.error };
    case 'RESET_CURRENT_CATEGORY':
      return initialState;
    default:
      return state;
  }
};

export default currentCategoryReducer;

export const setCurrentCategory = args => {
  return async dispatch => {
    dispatch({
      type: 'SET_CURRENT_CATEGORY',
      category: args.category,
    });
  };
};

export const setCurrentCategoryError = args => {
  return async dispatch => {
    dispatch({
      type: 'SET_CURRENT_CATEGORY_FAILURE',
      error: args.error,
    });
  };
};

export const resetCurrentCategory = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_CURRENT_CATEGORY',
    });
  };
};
