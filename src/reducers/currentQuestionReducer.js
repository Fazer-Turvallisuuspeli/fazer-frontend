const initialState = null;

const currentQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return action.data;
    default:
      return state;
  }
};

export const setCurrentQuestion = data => {
  return {
    type: 'SET_CURRENT_QUESTION',
    data,
  };
};

export default currentQuestionReducer;
