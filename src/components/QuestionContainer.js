/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  checkAnswer,
  nextQuestion,
  setCompleted,
} from '../reducers/game/question/answersReducer';

const QuestionContainer = ({
  currentQuestions,
  nthQuestion,
  totalQuestionsAmount,
  isAnswering,
  checkAnswer,
  nextQuestion,
  isCompleted,
  setCompleted,
  nextCategoryId,
}) => {
  if (currentQuestions.data === null) return null;

  const handleCheckQuestionsClick = () => {
    checkAnswer();
  };

  const handleNextQuestionClick = () => {
    if (nthQuestion + 1 !== totalQuestionsAmount) {
      nextQuestion();
    } else {
      setCompleted();
    }
  };

  if (isCompleted) {
    return (
      <div>
        <p>
          (Kysymys {nthQuestion + 1} / {totalQuestionsAmount})
        </p>

        <h3>Kategoria suoritettu</h3>

        <p>
          Jatka seuraavaan kategoriaan painamalla
          &apos;Seuraava&apos;-painiketta tai palaa päävalikkoon valitakseksi
          toisen kategorian.
        </p>

        <Link to={`/categories/${nextCategoryId}`}>
          <button type="button">Seuraava</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p>
        (Kysymys {nthQuestion + 1} / {totalQuestionsAmount})
      </p>

      <h3>{currentQuestions.data[nthQuestion].question}</h3>

      <div>
        {currentQuestions.data[nthQuestion].choices.map(({ id, option }) => (
          <div key={id}>
            <input
              disabled={isAnswering}
              type="checkbox"
              name="question-choice"
              id={`question-choice-${id}`}
            />
            <label htmlFor={`question-choice-${id}`}>{option}</label>
          </div>
        ))}
      </div>

      {isAnswering && <p>Oikea vastaus (x): TODO EXPLANATION HERE</p>}

      {isAnswering ? (
        <button type="button" onClick={handleNextQuestionClick}>
          Eteenpäin
        </button>
      ) : (
        <button type="button" onClick={handleCheckQuestionsClick}>
          Tarkista vastaukset
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const nextCategoryIndex = () => {
    return (
      state.game.categories.allCategories.data.indexOf(
        state.game.categories.currentCategory.data
      ) + 1
    );
  };

  return {
    currentQuestions: state.game.questions.currentQuestions,
    nthQuestion: state.game.questions.answers.nthQuestion,
    totalQuestionsAmount: state.game.questions.currentQuestions.data
      ? state.game.questions.currentQuestions.data.length
      : 0,
    isAnswering: state.game.questions.answers.isAnswering,
    isCompleted: state.game.questions.answers.isCompleted,
    nextCategoryId: state.game.categories.allCategories.data[
      nextCategoryIndex()
    ]
      ? state.game.categories.allCategories.data[nextCategoryIndex()].id
      : 0,
  };
};

const mapDispatchToProps = {
  checkAnswer,
  nextQuestion,
  setCompleted,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer);
