import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCurrentQuestions } from '../selectors/questionsSelectors';
import {
  selectIsSubmitting,
  selectIsCompleted,
} from '../selectors/progressSelectors';
import { selectQuestionChoice } from '../actions/progressActions';
import Questions from '../components/Questions';

const mapState = state => ({
  questions: selectCurrentQuestions(state),
  isSubmitting: selectIsSubmitting(state),
  isCompleted: selectIsCompleted(state),
});

const mapDispatch = { selectQuestionChoice };

const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({})),
  selectQuestionChoice: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  isCompleted: PropTypes.bool,
};

const QuestionsContainer = ({
  questions,
  selectQuestionChoice,
  isSubmitting,
  isCompleted,
}) => {
  const handleQuestionOnChange = (questionId, choiceId) => {
    selectQuestionChoice(questionId, choiceId);
  };

  const handleSubmitAnswer = event => {
    event.preventDefault();

    console.log('... TODO : submit answer');
  };

  return questions ? (
    <Questions
      questions={questions}
      handleOnChange={handleQuestionOnChange}
      handleSubmitAnswer={handleSubmitAnswer}
      isSubmitting={isSubmitting}
      isCompleted={isCompleted}
    />
  ) : null;
};

QuestionsContainer.propTypes = propTypes;

export default connect(
  mapState,
  mapDispatch
)(QuestionsContainer);
