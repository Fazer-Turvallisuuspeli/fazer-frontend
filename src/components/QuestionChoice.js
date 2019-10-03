import React from 'react';

import { connect } from 'react-redux';

import {
  setAnswer,
  removeAnswer,
} from '../reducers/game/question/progressReducer';

const QuestionChoice = ({
  id,
  setAnswer,
  removeAnswer,
  isAnswering,
  option,
  selectedAnswerIds,
}) => {
  const handleChoiceClick = (event, choiceId) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setAnswer([choiceId]);
    } else {
      removeAnswer(choiceId);
    }
  };

  const isChecked = id => {
    const checkedId = selectedAnswerIds.find(answerId => answerId === id);

    if (checkedId === id) return true;

    return false;
  };

  return (
    <div>
      <input
        disabled={isAnswering}
        checked={isChecked(id)}
        type="checkbox"
        name="question-choice"
        id={`question-choice-${id}`}
        onChange={event => handleChoiceClick(event, id)}
      />
      <label htmlFor={`question-choice-${id}`}>{option}</label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAnswering: state.game.questions.progress.isAnswering,
    selectedAnswerIds: state.game.questions.progress.selectedAnswerIds,
  };
};

const mapDispatchToProps = {
  setAnswer,
  removeAnswer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionChoice);
