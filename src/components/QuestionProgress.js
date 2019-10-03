import React from 'react';

import { connect } from 'react-redux';

const QuestionProgress = ({ currentQuestionNumber, totalQuestionsAmount }) => {
  return (
    <p>
      (Kysymys {currentQuestionNumber} / {totalQuestionsAmount})
    </p>
  );
};

const getTotalQuestionsAmount = ({ game }) => {
  const { data } = game.questions.currentQuestions;

  return data ? data.length : 0;
};

const mapStateToProps = state => {
  return {
    currentQuestionNumber: state.game.questions.progress.nthQuestion + 1,
    totalQuestionsAmount: getTotalQuestionsAmount(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionProgress);
