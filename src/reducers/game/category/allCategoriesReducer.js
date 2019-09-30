import categoryService from '../../../services/categoryService';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return { ...state, isLoading: true };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        data: action.categories,
        isLoading: false,
        error: null,
      };
    case 'FETCH_CATEGORIES_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default allCategoriesReducer;

export const setAllCategories = () => {
  return async dispatch => {
    // Init loading state
    dispatch({
      type: 'FETCH_CATEGORIES',
    });

    try {
      // Call API
      const categories = await categoryService.getCategories();

      // Update data on success
      dispatch({
        type: 'FETCH_CATEGORIES_SUCCESS',
        categories,
      });
    } catch (error) {
      // Update error on failure
      dispatch({
        type: 'FETCH_CATEGORIES_FAILURE',
        error,
      });
    }
  };
};
