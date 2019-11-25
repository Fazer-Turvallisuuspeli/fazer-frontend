import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  data: null,
  currentCategoryId: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_REQUEST:
      return { ...state, isFetching: true, error: null };

    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.payload.categories,
      };

    case types.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        data: null,
      };

    case types.SET_CURRENT_CATEGORY_ID:
      return {
        ...state,
        currentCategoryId: action.payload.categoryId,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
