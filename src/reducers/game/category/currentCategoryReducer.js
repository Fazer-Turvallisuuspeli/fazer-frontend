import { setCurrentQuestions } from '../question/currentQuestionsReducer';

const initialState = { data: null, error: null };

const currentCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      return { ...state, data: action.currentCategory, error: null };
    case 'RESET_CURRENT_CATEGORY':
      return initialState;
    default:
      return state;
  }
};

export default currentCategoryReducer;

export const setCurrentCategory = () => {
  return async (dispatch, getState) => {
    // Get category id from url
    const { router, game } = getState();
    const pathnameArr = router.location.pathname.split('/');
    const pathnameId = Number(pathnameArr[pathnameArr.length - 1]);

    // Find category by id
    const currentCategory = game.categories.allCategories.data.find(
      category => category.id === pathnameId
    );

    // Set current category
    dispatch({
      type: 'SET_CURRENT_CATEGORY',
      currentCategory,
    });

    // Set current questions
    dispatch(setCurrentQuestions());
  };
};

export const resetCurrentCategory = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_CURRENT_CATEGORY',
    });
  };
};
