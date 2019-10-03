import React from 'react';

import { connect } from 'react-redux';

const QuestionSolution = ({ isAnswering }) => {
  if (!isAnswering) return null;

  return <p>Oikea vastaus (x): TODO EXPLANATION HERE</p>;
};

const mapStateToProps = state => {
  return {
    isAnswering: state.game.questions.progress.isAnswering,
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionSolution);
