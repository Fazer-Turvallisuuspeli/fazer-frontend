import * as types from '../constants/actionTypes';
import {
  selectCategories,
  selectCurrentCategoryId,
} from '../selectors/categoriesSelectors';
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

  // Abort early if already cached
  if (categories) return;

  // Init fetching request
  dispatch(fetchCategoriesRequest());

  try {
    const categories = await callApi(CATEGORIES_URL);

    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesError(error));
  }
};

export const setCurrentCategoryId = categoryIdStr => async (
  dispatch,
  getState
) => {
  // Wait until categories are in state
  await dispatch(fetchCategories());

  const state = getState();
  const categoryIdInState = selectCurrentCategoryId(state);

  const categoryId = Number(categoryIdStr);

  // Abort early if same category
  if (categoryIdInState === categoryId) return;

  dispatch({
    type: types.SET_CURRENT_CATEGORY_ID,
    payload: { categoryId },
  });
};
