const initialState = { ids: [] };

const completedCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMPLETED_CATEGORY':
      return { ...state, ids: [...state.ids, action.payload.categoryId] };
    case 'RESET_COMPLETED_CATEGORIES':
      return initialState;
    default:
      return state;
  }
};

export default completedCategoriesReducer;

export const setCompletedCategory = categoryId => {
  return async dispatch => {
    dispatch({
      type: 'SET_COMPLETED_CATEGORY',
      payload: { categoryId },
    });
  };
};
