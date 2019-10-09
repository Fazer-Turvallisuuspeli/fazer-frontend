import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCurrentQuestions } from '../selectors/questionsSelectors';
import {
  selectIsSubmitting,
  selectIsCompleted,
} from '../selectors/progressSelectors';
import {
  setQuestionChoice,
  submitQuestionAnswer,
} from '../actions/progressActions';
import Questions from '../components/Questions';

const mapState = state => ({
  questions: selectCurrentQuestions(state),
  isSubmitting: selectIsSubmitting(state),
  isCompleted: selectIsCompleted(state),
});

const mapDispatch = { setQuestionChoice, submitQuestionAnswer };

const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({})),
  setQuestionChoice: PropTypes.func.isRequired,
  submitQuestionAnswer: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  isCompleted: PropTypes.bool,
};

const QuestionsContainer = ({
  questions,
  setQuestionChoice,
  submitQuestionAnswer,
  isSubmitting,
  isCompleted,
}) => {
  const handleQuestionOnChange = (questionId, choiceId) => {
    setQuestionChoice(questionId, choiceId);
  };

  const handleSubmitAnswer = (event, questionId) => {
    event.preventDefault();

    console.log('questionId', questionId);
    submitQuestionAnswer(questionId);
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
