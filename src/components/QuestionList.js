/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { connect } from 'react-redux';

import QuestionChoice from './QuestionChoice';

const QuestionList = ({ visibleQuestionChoices }) => {
  return (
    <div>
      {visibleQuestionChoices.map(({ id, option }) => (
        <QuestionChoice key={id} id={id} option={option} />
      ))}
    </div>
  );
};

const questionChoicesToShow = ({ game }) => {
  const { currentQuestions } = game.questions;
  const { nthQuestion } = game.questions.progress;

  return currentQuestions.data[nthQuestion].choices;
};

const mapStateToProps = state => {
  return {
    visibleQuestionChoices: questionChoicesToShow(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionList);
