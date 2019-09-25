import React, { useEffect, useCallback } from 'react';

import { connect } from 'react-redux';

import { setQuestions } from '../reducers/questionReducer';
import { setCurrentQuestion } from '../reducers/currentQuestionReducer';
import QuestionContainer from '../components/QuestionContainer';

const GameCategoryScreen = ({
  selectedCategory,
  setQuestions,
  setCurrentQuestion,
}) => {
  const memoizedFetchData = useCallback(async () => {
    const response = await fetch(
      `/api/v1/game/categories/${selectedCategory.id}/questions`
    );
    const data = await response.json();

    setQuestions(data);
    setCurrentQuestion(data[0]);
  }, [selectedCategory, setQuestions, setCurrentQuestion]);

  useEffect(() => {
    if (!selectedCategory) return;

    memoizedFetchData();
  }, [selectedCategory, memoizedFetchData]);

  if (!selectedCategory) return null;

  return (
    <div>
      <h2>{selectedCategory.name}</h2>

      <QuestionContainer />

      <button type="button">Tarkista vastaukset</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedCategory: state.selectedCategory,
  };
};

const mapDispatchToProps = {
  setQuestions,
  setCurrentQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCategoryScreen);
