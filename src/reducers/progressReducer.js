import * as types from '../constants/actionTypes';

const initialState = { perCategory: {}, isInitialized: false };

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_PROGRESS:
      return {
        ...state,
        perCategory: action.payload.perCategory,
        isInitialized: true,
      };

    case types.SELECT_QUESTION_CHOICE:
      return {
        ...state,
        perCategory: {
          ...state.perCategory,
          [action.payload.categoryId]: {
            ...state.perCategory[action.payload.categoryId],
            perQuestion: {
              ...state.perCategory[action.payload.categoryId].perQuestion,
              [action.payload.questionId]: {
                ...state.perCategory[action.payload.categoryId].perQuestion[
                  action.payload.questionId
                ],
                checkedChoices: state.perCategory[
                  action.payload.categoryId
                ].perQuestion[
                  action.payload.questionId
                ].checkedChoices.includes(action.payload.choiceId)
                  ? state.perCategory[action.payload.categoryId].perQuestion[
                      action.payload.questionId
                    ].checkedChoices.filter(
                      choiceId => choiceId !== action.payload.choiceId
                    )
                  : state.perCategory[action.payload.categoryId].perQuestion[
                      action.payload.questionId
                    ].checkedChoices.concat(action.payload.choiceId),
              },
            },
          },
        },
      };

    case types.SUBMIT_QUESTION_ANSWER:
      return {
        ...state,
        perCategory: {
          ...state.perCategory,
          [action.payload.categoryId]: {
            ...state.perCategory[action.payload.categoryId],
            isSubmitting: true,
            perQuestion: {
              ...state.perCategory[action.payload.categoryId].perQuestion,
              [action.payload.questionId]: {
                ...state.perCategory[action.payload.categoryId].perQuestion[
                  action.payload.questionId
                ],
                isCompleted: true,
                isCorrect: action.payload.isCorrect,
              },
            },
          },
        },
      };

    case types.SET_NEXT_QUESTION:
      return {
        ...state,
        perCategory: {
          ...state.perCategory,
          [action.payload.categoryId]: {
            ...state.perCategory[action.payload.categoryId],
            isSubmitting: false,
            nthQuestion:
              state.perCategory[action.payload.categoryId].nthQuestion + 1,
          },
        },
      };

    case types.CATEGORY_COMPLETED:
      return {
        ...state,
        perCategory: {
          ...state.perCategory,
          [action.payload.categoryId]: {
            ...state.perCategory[action.payload.categoryId],
            isSubmitting: false,
            isCompleted: true,
          },
        },
      };
    default:
      return state;
  }
};

export default progressReducer;
