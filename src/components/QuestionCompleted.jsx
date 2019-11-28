import React from 'react';
import PropTypes from 'prop-types';
import { StyledRight, StyledWrong } from '../styles/answerStyle';
import { StyledRoundButton } from '../styles/indexStyles';

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
    const { choices } = question;

    // In case of only one correct choice
    if (correctChoiceId.length === 1) {
      const choiceIndex = choices.findIndex(
        choice => choice.id === correctChoiceId[0]
      );

      return <p>Oikea vastaus: ({choiceIndex + 1})</p>;
    }

    // In case of multiple correct choices
    const choiceIndices = correctChoiceId.map(correctChoiceId =>
      choices.findIndex(choice => choice.id === correctChoiceId)
    );

    return (
      <p>
        Oikeat vastaukset: ({choiceIndices.map(index => index + 1).join(', ')})
      </p>
    );
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
