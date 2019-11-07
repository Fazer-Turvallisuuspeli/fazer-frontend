import React from 'react';
import PropTypes from 'prop-types';

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
  isCorrect: PropTypes.bool.isRequired,
  setNextQuestion: PropTypes.func.isRequired,
};

const QuestionCompleted = ({ isCorrect, question, setNextQuestion }) => {
  const { correctChoiceId, explanation } = question;

  // Render a different element depending on the amount of correct choices
  const correctChoicesToShow = () => {
    if (correctChoiceId.length === 1) {
      return <p>Oikea vastaus: ({correctChoiceId[0]})</p>;
    }

    return <p>Oikeat vastaukset: ({correctChoiceId.join(', ')})</p>;
  };

  return (
    <div>
      {isCorrect ? <p>Oikein.</p> : <p>Väärin.</p>}

      {correctChoicesToShow()}

      {explanation && <p>{explanation}</p>}

      <button onClick={() => setNextQuestion()} type="button">
        Eteenpäin
      </button>
    </div>
  );
};

QuestionCompleted.propTypes = propTypes;

export default QuestionCompleted;
