import React from 'react';
import PropTypes from 'prop-types';
import { StyledRight, StyledWrong } from '../styles/answerStyle';
import { StyledRoundButton } from '../styles/indexStyles';

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
      {isCorrect ? (
        <StyledRight>Oikein.</StyledRight>
      ) : (
        <StyledWrong>Väärin.</StyledWrong>
      )}

      {correctChoicesToShow()}

      {explanation && <p>{explanation}</p>}

      <StyledRoundButton
        className="fwdbutton"
        onClick={() => setNextQuestion()}
        type="button">
        Eteenpäin
      </StyledRoundButton>
    </div>
  );
};

QuestionCompleted.propTypes = propTypes;

export default QuestionCompleted;
