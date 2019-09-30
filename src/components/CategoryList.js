import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  setCurrentCategory,
  resetCurrentCategory,
} from '../reducers/categoryReducer/currentCategoryReducer';
import {
  setCurrentQuestions,
  resetCurrentQuestions,
} from '../reducers/categoryReducer/currentQuestionsReducer';

const CategoryList = ({
  allCategories,
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentQuestions,
  resetCurrentQuestions,
  currentCategory,
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
    allCategories: state.categories.allCategories,
    currentCategory: state.categories.currentCategory,
  };
};

const mapDispatchToProps = {
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentQuestions,
  resetCurrentQuestions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
