import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCurrentQuestions } from '../selectors/questionsSelectors';
import {
  selectIsSubmitting,
  selectIsCompleted,
} from '../selectors/progressSelectors';
import Questions from '../components/Questions';

const mapState = state => ({
  questions: selectCurrentQuestions(state),
  isSubmitting: selectIsSubmitting(state),
  isCompleted: selectIsCompleted(state),
});

const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({})),
  isSubmitting: PropTypes.bool,
  isCompleted: PropTypes.bool,
};

const QuestionsContainer = ({ questions, isSubmitting, isCompleted }) => {
  const handleSubmitAnswer = event => {
    event.preventDefault();

    console.log('... TODO : submit answer');
  };

  return questions ? (
    <Questions
      questions={questions}
      handleSubmitAnswer={handleSubmitAnswer}
      isSubmitting={isSubmitting}
      isCompleted={isCompleted}
    />
  ) : null;
};

QuestionsContainer.propTypes = propTypes;

export default connect(
  mapState,
  null
)(QuestionsContainer);
