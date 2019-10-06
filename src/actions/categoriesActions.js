import * as types from '../constants/actionTypes';
import { selectCategories } from '../selectors/categoriesSelectors';
import { callApi } from '../utils/apiUtils';
import { CATEGORIES_URL } from '../constants/apiConstants';

export const fetchCategoriesSuccess = categories => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  payload: { categories },
});

export const fetchCategoriesError = error => ({
  type: types.FETCH_CATEGORIES_ERROR,
  payload: { error },
});

export const fetchCategoriesRequest = () => ({
  type: types.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategories = () => async (dispatch, getState) => {
  const state = getState();
  const categories = selectCategories(state);

  // Abort early if categories are cached
  if (categories) return;

  dispatch(fetchCategoriesRequest());

  try {
    const categories = await callApi(CATEGORIES_URL);

    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export const setCurrentCategory = categoryId => async (dispatch, getState) => {
  // Wait until categories are in state
  await dispatch(fetchCategories());

  const {
    categories: { currentCategoryId },
  } = getState();

  const categoryIdNumber = Number(categoryId);

  // Abort early if same category
  if (currentCategoryId === categoryIdNumber) return;

  dispatch({
    type: types.SET_CURRENT_CATEGORY,
    payload: { categoryId: categoryIdNumber },
  });
};
