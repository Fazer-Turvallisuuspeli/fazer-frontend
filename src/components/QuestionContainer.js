import React from 'react';

import { connect } from 'react-redux';

const QuestionContainer = ({ currentQuestion }) => {
  if (!currentQuestion) return null;

  const { question, choices } = currentQuestion;

  return (
    <div>
      <h3>{question}</h3>

      <div>
        {choices.map(choice => (
          <div key={choice.id}>
            <input id={`choice-${choice.id}`} type="checkbox" />
            <label htmlFor={`choice-${choice.id}`}>{choice.option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion,
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionContainer);
