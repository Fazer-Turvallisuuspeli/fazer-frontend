import React from 'react';

import { connect } from 'react-redux';

const QuestionSolution = ({ isAnswering, explanation, characterPrefixes }) => {
  if (!isAnswering) return null;

  return (
    <p>
      Oikea vastaus ({characterPrefixes.join(', ')})
      {explanation && `: ${explanation}`}
    </p>
  );
};

const explanationToShow = ({ game }) => {
  const { questions } = game;
  const { nthQuestion } = questions.progress;

  const currentQuestion = questions.currentQuestions.data[nthQuestion];

  return currentQuestion.explanation;
};

const characterPrefixesToShow = ({ game }) => {
  const { questions } = game;
  const { nthQuestion } = questions.progress;

  const currentQuestionsData = questions.currentQuestions.data;
  const currentQuestion = questions.currentQuestions.data[nthQuestion];
  const correctChoiceIds = currentQuestion.correctChoiceId;

  const correctChoiceIndexes = currentQuestionsData
    .map((question, index) =>
      correctChoiceIds.some(choiceId => choiceId === question.id) ? index : null
    )
    .filter(Boolean);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const characterPrefixes = correctChoiceIndexes.map(
    choiceIndex => alphabet[choiceIndex]
  );

  return characterPrefixes;
};

const mapStateToProps = state => {
  return {
    isAnswering: state.game.questions.progress.isAnswering,
    explanation: explanationToShow(state),
    characterPrefixes: characterPrefixesToShow(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionSolution);
