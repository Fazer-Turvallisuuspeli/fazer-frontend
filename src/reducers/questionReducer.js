const initialState = null;

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.data;
    default:
      return state;
  }
};

export const setQuestions = data => {
  return {
    type: 'SET_QUESTIONS',
    data,
  };
};

export default questionReducer;
