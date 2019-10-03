import React from 'react';

import { connect } from 'react-redux';

const QuestionName = ({ questionName }) => {
  return <h3>{questionName}</h3>;
};

const questionNameToShow = ({ game }) => {
  const { data } = game.questions.currentQuestions;
  const { nthQuestion } = game.questions.progress;

  return data[nthQuestion].question;
};

const mapStateToProps = state => {
  return {
    questionName: questionNameToShow(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionName);
