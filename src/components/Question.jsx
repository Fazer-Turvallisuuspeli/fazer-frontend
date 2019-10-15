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
  handleOnChange: PropTypes.func.isRequired,
  handleSubmitAnswer: PropTypes.func.isRequired,
  nthQuestion: PropTypes.number.isRequired,
  amountOfQuestions: PropTypes.number.isRequired,
  checkedChoices: PropTypes.arrayOf(PropTypes.number),
  isSubmitting: PropTypes.bool.isRequired,
  isCategoryCompleted: PropTypes.bool.isRequired,
  isQuestionCompleted: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  setNextQuestion: PropTypes.func.isRequired,
};

const Question = ({
  question,
  handleOnChange,
  handleSubmitAnswer,
  nthQuestion,
  amountOfQuestions,
  checkedChoices,
  isSubmitting,
  isCategoryCompleted,
  isQuestionCompleted,
  isCorrect,
  setNextQuestion,
}) => {
  return (
    <div>
      <h2>{question.question}</h2>

      <h3>
        (Kysymys {nthQuestion} / {amountOfQuestions})
      </h3>

      <h1>{JSON.stringify(checkedChoices)}</h1>

      <form onSubmit={event => handleSubmitAnswer(event, question.id)}>
        {question.choices.map(choice => (
          <div key={choice.id}>
            <input
              disabled={
                isSubmitting || isCategoryCompleted || isQuestionCompleted
              }
              type="checkbox"
              id={`question-${question.id}-choice-${choice.id}`}
              onChange={() => handleOnChange(question.id, choice.id)}
            />
            <label htmlFor={`question-${question.id}-choice-${choice.id}`}>
              {choice.option}
            </label>
          </div>
        ))}

        <input
          disabled={isSubmitting || isCategoryCompleted || isQuestionCompleted}
          type="submit"
          value="Tarkista vastaukset"
        />

        {isQuestionCompleted && (
          <>
            {isCorrect ? <p>Oikein.</p> : <p>Väärin.</p>}
            {question.correctChoiceId.length === 1 ? (
              <p>Oikea vastaus: ({question.correctChoiceId[0]})</p>
            ) : (
              <p>Oikeat vastaukset: ({question.correctChoiceId.join(', ')})</p>
            )}
            {question.explanation && <p>{question.explanation}</p>}
            <button onClick={() => setNextQuestion()} type="button">
              Eteenpäin
            </button>
          </>
        )}
      </form>
    </div>
  );
};

Question.propTypes = propTypes;

export default Question;
