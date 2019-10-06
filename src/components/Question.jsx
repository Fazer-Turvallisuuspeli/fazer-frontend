import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    categoryId: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    isSingleChoice: PropTypes.bool.isRequired,
    correctChoiceId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        option: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleSubmitAnswer: PropTypes.func.isRequired,
  nthQuestion: PropTypes.number.isRequired,
  amountOfQuestions: PropTypes.number.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

const Question = ({
  question,
  handleSubmitAnswer,
  nthQuestion,
  amountOfQuestions,
  isSubmitting,
  isCompleted,
}) => {
  return (
    <div>
      <h2>{question.question}</h2>

      <h3>
        (Kysymys {nthQuestion} / {amountOfQuestions})
      </h3>

      <form onSubmit={handleSubmitAnswer}>
        {question.choices.map(choice => (
          <div key={choice.id}>
            <input
              type="checkbox"
              id={`question-${question.id}-choice-${choice.id}`}
            />
            <label htmlFor={`question-${question.id}-choice-${choice.id}`}>
              {choice.option}
            </label>
          </div>
        ))}

        <input
          disabled={isSubmitting || isCompleted}
          type="submit"
          value="Tarkista vastaukset"
        />
      </form>
    </div>
  );
};

Question.propTypes = propTypes;

export default Question;
