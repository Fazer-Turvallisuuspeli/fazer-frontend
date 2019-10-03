import React from 'react';

import { connect } from 'react-redux';

import {
  nextQuestion,
  checkAnswer,
} from '../reducers/game/question/progressReducer';

const QuestionAnswerButton = ({ isAnswering, nextQuestion, checkAnswer }) => {
  return isAnswering ? (
    <button type="button" onClick={nextQuestion}>
      Eteenpäin
    </button>
  ) : (
    <button type="button" onClick={checkAnswer}>
      Tarkista vastaukset
    </button>
  );
};

const mapStateToProps = state => {
  return {
    isAnswering: state.game.questions.progress.isAnswering,
  };
};

const mapDispatchToProps = {
  nextQuestion,
  checkAnswer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswerButton);
