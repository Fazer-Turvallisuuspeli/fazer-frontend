import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryId: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired,
      isSingleChoice: PropTypes.bool.isRequired,
      correctChoiceId: PropTypes.arrayOf(PropTypes.number.isRequired)
        .isRequired,
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          option: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleSubmitAnswer: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isCategoryCompleted: PropTypes.bool.isRequired,
  isQuestionCompleted: PropTypes.bool.isRequired,
  currentQuestionId: PropTypes.number.isRequired,
};

const Questions = ({
  questions,
  handleOnChange,
  handleSubmitAnswer,
  isSubmitting,
  isCategoryCompleted,
  isQuestionCompleted,
  currentQuestionId,
}) => {
  return questions
    ? questions
        .map((question, index) => (
          <Question
            key={question.id}
            question={question}
            handleOnChange={handleOnChange}
            handleSubmitAnswer={handleSubmitAnswer}
            nthQuestion={index + 1}
            amountOfQuestions={questions.length}
            isSubmitting={isSubmitting}
            isCategoryCompleted={isCategoryCompleted}
            isQuestionCompleted={isQuestionCompleted}
          />
        ))
        .filter(question => question.id === currentQuestionId)
    : null;
};

Questions.propTypes = propTypes;

export default Questions;
