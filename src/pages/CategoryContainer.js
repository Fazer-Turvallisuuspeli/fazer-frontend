import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import CategoryTitle from '../components/CategoryTitle';
import Infobank from '../components/Infobank';
import QuestionContainer from '../components/QuestionContainer';
import {
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentCategoryError,
} from '../reducers/game/category/currentCategoryReducer';
import { toggleInfobankVisibility } from '../reducers/game/infobankReducer';
import {
  setCurrentQuestions,
  resetCurrentQuestions,
} from '../reducers/game/question/currentQuestionsReducer';
import { resetAnswers } from '../reducers/game/question/progressReducer';

const CategoryContainer = ({
  location,
  currentCategory,
  setCurrentCategory,
  isAuthenticated,
  allCategories,
  resetCurrentCategory,
  setCurrentCategoryError,
  toggleInfobankVisibility,
  setCurrentQuestions,
  resetCurrentQuestions,
  resetAnswers,
}) => {
  // Set current category
  useEffect(() => {
    if (isAuthenticated === false) return;

    const urlParams = location.pathname.split('/');
    const categoryId = String(urlParams[urlParams.length - 1]);

    if (
      currentCategory.data !== null &&
      currentCategory.data.id === Number(categoryId)
    )
      return;

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
  }, [
    isAuthenticated,
    currentCategory,
    location,
    setCurrentCategory,
    allCategories.data,
    resetCurrentCategory,
    setCurrentQuestions,
    resetCurrentQuestions,
    resetAnswers,
  ]);

  // Protected route
  if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: location,
          },
        }}
      />
    );
  }

  // Broken category link
  if (currentCategory.data === null) {
    setCurrentCategoryError({ error: `Category not found` });
    return (
      <Redirect
        to={{
          pathname: '/game-menu',
          state: {
            from: location,
          },
        }}
      />
    );
  }

  const handleInfobankClick = () => {
    toggleInfobankVisibility();
  };

  return (
    <div>
      <CategoryTitle />

      <QuestionContainer />

      <Infobank>
        <button type="button" onClick={handleInfobankClick}>
          Jatka peliin
        </button>
      </Infobank>

      <Link to="/game-menu">
        <button type="button">Päävalikko</button>
      </Link>
      <button type="button" onClick={handleInfobankClick}>
        Tietopankki
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    location: state.router.location,
    currentCategory: state.game.categories.currentCategory,
    isAuthenticated: state.login.isAuthenticated,
    allCategories: state.game.categories.allCategories,
  };
};

const mapDispatchToProps = {
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentCategoryError,
  toggleInfobankVisibility,
  setCurrentQuestions,
  resetCurrentQuestions,
  resetAnswers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
