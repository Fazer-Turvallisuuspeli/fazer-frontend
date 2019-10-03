import React from 'react';

import { connect } from 'react-redux';

import CategoryCompletedContainer from './CategoryCompletedContainer';
import QuestionProgress from './QuestionProgress';
import QuestionName from './QuestionName';
import QuestionSolution from './QuestionSolution';
import QuestionAnswerButton from './QuestionAnswerButton';
import QuestionList from './QuestionList';

const QuestionContainer = ({ currentQuestions, isCompleted }) => {
  if (!currentQuestions.data) return null;

  if (isCompleted) {
    return <CategoryCompletedContainer />;
  }

  return (
    <div>
      <QuestionProgress />
      <QuestionName />
      <QuestionList />
      <QuestionSolution />
      <QuestionAnswerButton />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentQuestions: state.game.questions.currentQuestions,
    isCompleted: state.game.questions.progress.isCompleted,
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionContainer);
