export const selectQuestions = state => state.questions.data;

export const selectCurrentQuestions = state =>
  state.questions.data.filter(
    question => question.categoryId === state.questions.currentQuestionsId
  );

export const selectCurrentQuestionsId = state =>
  state.questions.currentQuestionsId;
