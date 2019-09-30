import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  setCurrentCategory,
  resetCurrentCategory,
} from '../reducers/game/category/currentCategoryReducer';
import {
  setCurrentQuestions,
  resetCurrentQuestions,
} from '../reducers/game/question/currentQuestionsReducer';
import { resetAnswers } from '../reducers/game/question/answersReducer';

const CategoryList = ({
  allCategories,
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentQuestions,
  resetCurrentQuestions,
  currentCategory,
  resetAnswers,
}) => {
  if (allCategories.data === null) return null;

  const handleCategoryChange = categoryId => {
    const filteredCurrentCategory = allCategories.data.find(
      category => category.id === Number(categoryId)
    );

    if (filteredCurrentCategory !== undefined) {
      const isPreviousCategory = Object.is(
        filteredCurrentCategory,
        currentCategory.data
      );

      setCurrentCategory({
        category: filteredCurrentCategory,
      });

      if (isPreviousCategory === false) {
        setCurrentQuestions({ categoryId });
      }
    } else {
      resetCurrentCategory();
      resetCurrentQuestions();
      resetAnswers();
    }
  };

  return (
    <div>
      {allCategories.data.map(({ id, name }) => (
        <Link
          key={id}
          onClick={() => handleCategoryChange(id)}
          to={`/categories/${id}`}>
          <div>
            <p>{name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allCategories: state.game.categories.allCategories,
    currentCategory: state.game.categories.currentCategory,
  };
};

const mapDispatchToProps = {
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentQuestions,
  resetCurrentQuestions,
  resetAnswers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
