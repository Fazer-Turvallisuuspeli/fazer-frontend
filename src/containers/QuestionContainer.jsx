import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectCurrentQuestion,
  selectCurrentQuestionId,
} from '../selectors/questionsSelectors';
import {
  selectNthQuestion,
  selectAmountOfQuestions,
  selectIsSubmitting,
  selectIsCategoryCompleted,
  selectIsQuestionCompleted,
  selectIsQuestionCorrect,
  selectCurrentCheckedChoices,
} from '../selectors/progressSelectors';
import {
  setQuestionChoice,
  submitQuestionAnswer,
  setNextQuestion,
} from '../actions/progressActions';
import Question from '../components/Question';

const mapState = state => ({
  question: selectCurrentQuestion(state),
  checkedChoices: selectCurrentCheckedChoices(state),
  nthQuestion: selectNthQuestion(state),
  amountOfQuestions: selectAmountOfQuestions(state),
  isSubmitting: selectIsSubmitting(state),
  isCategoryCompleted: selectIsCategoryCompleted(state),
  isQuestionCompleted: selectIsQuestionCompleted(state),
  currentQuestionId: selectCurrentQuestionId(state),
  isCorrect: selectIsQuestionCorrect(state),
});

const mapDispatch = {
  setQuestionChoice,
  submitQuestionAnswer,
  setNextQuestion,
};

const propTypes = {
  question: PropTypes.shape({}),
  checkedChoices: PropTypes.arrayOf(PropTypes.number),
  nthQuestion: PropTypes.number,
  amountOfQuestions: PropTypes.number,
  setQuestionChoice: PropTypes.func.isRequired,
  submitQuestionAnswer: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  isCategoryCompleted: PropTypes.bool,
  isQuestionCompleted: PropTypes.bool,
  currentQuestionId: PropTypes.number,
  isCorrect: PropTypes.bool,
  setNextQuestion: PropTypes.func,
};

const QuestionContainer = ({
  question,
  checkedChoices,
  nthQuestion,
  amountOfQuestions,
  setQuestionChoice,
  submitQuestionAnswer,
  isSubmitting,
  isCategoryCompleted,
  isQuestionCompleted,
  currentQuestionId,
  isCorrect,
  setNextQuestion,
}) => {
  const handleQuestionOnChange = (questionId, choiceId) => {
    setQuestionChoice(questionId, choiceId);
  };

  const handleSubmitAnswer = (event, questionId) => {
    event.preventDefault();

    submitQuestionAnswer(questionId);
  };

  return question ? (
    <Question
      question={question}
      checkedChoices={checkedChoices}
      handleOnChange={handleQuestionOnChange}
      handleSubmitAnswer={handleSubmitAnswer}
      nthQuestion={nthQuestion}
      amountOfQuestions={amountOfQuestions}
      isSubmitting={isSubmitting}
      isCategoryCompleted={isCategoryCompleted}
      isQuestionCompleted={isQuestionCompleted}
      currentQuestionId={currentQuestionId}
      isCorrect={isCorrect}
      setNextQuestion={setNextQuestion}
    />
  ) : null;
};

QuestionContainer.propTypes = propTypes;

export default connect(
  mapState,
  mapDispatch
)(QuestionContainer);
