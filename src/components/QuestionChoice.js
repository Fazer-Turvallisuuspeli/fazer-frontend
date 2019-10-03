import React from 'react';

import { connect } from 'react-redux';

const QuestionChoice = ({ id, isAnswering, option }) => {
  return (
    <div>
      <input
        disabled={isAnswering}
        type="checkbox"
        name="question-choice"
        id={`question-choice-${id}`}
      />
      <label htmlFor={`question-choice-${id}`}>{option}</label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAnswering: state.game.questions.progress.isAnswering,
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionChoice);
