import * as types from '../constants/actionTypes';

const initialState = { perCategory: {} };

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_PROGRESS:
      return { ...state, perCategory: action.payload.perCategory };
    default:
      return state;
  }
};

export default progressReducer;
