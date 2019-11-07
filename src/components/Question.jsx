/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionCompleted from './QuestionCompleted';

const propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    isSingleChoice: PropTypes.bool.isRequired,
    correctChoiceId: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  checkedChoices: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleSubmitAnswer: PropTypes.func.isRequired,
  nthQuestion: PropTypes.number.isRequired,
  amountOfQuestions: PropTypes.number.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isCategoryCompleted: PropTypes.bool.isRequired,
  isQuestionCompleted: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  setNextQuestion: PropTypes.func.isRequired,
};

const Question = ({
  question,
  checkedChoices,
  handleOnChange,
  handleSubmitAnswer,
  nthQuestion,
  amountOfQuestions,
  isSubmitting,
  isCategoryCompleted,
  isQuestionCompleted,
  isCorrect,
  setNextQuestion,
}) => {
  const isAnsweringDisabled =
    isSubmitting || isCategoryCompleted || isQuestionCompleted;

  return (
    <div>
      <h2>{question.question}</h2>

      <h3>
        (Kysymys {nthQuestion} / {amountOfQuestions})
      </h3>

      <form onSubmit={event => handleSubmitAnswer(event, question.id)}>
        {question.choices.map((choice, index) => (
          <div key={choice.id}>
            {index + 1})
            <input
              checked={checkedChoices.includes(choice.id)}
              disabled={isAnsweringDisabled}
              type="checkbox"
              id={`question-${question.id}-choice-${choice.id}`}
              onChange={() => handleOnChange(question.id, choice.id)}
            />
            <label htmlFor={`question-${question.id}-choice-${choice.id}`}>
              {choice.option}
            </label>
          </div>
        ))}

        {!isQuestionCompleted && (
          <input
            disabled={isAnsweringDisabled}
            type="submit"
            value="Tarkista vastaukset"
          />
        )}

        {isQuestionCompleted && (
          <QuestionCompleted
            isCorrect={isCorrect}
            question={question}
            setNextQuestion={setNextQuestion}
          />
        )}
      </form>
    </div>
  );
};

Question.propTypes = propTypes;

export default Question;
