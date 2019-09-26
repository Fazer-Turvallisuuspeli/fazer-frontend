import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// import CategoryTitle from '../components/CategoryTitle';
import {
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentCategoryError,
} from '../reducers/categoryReducer/currentCategoryReducer';

const CategoryContainer = ({
  location,
  currentCategory,
  setCurrentCategory,
  isAuthenticated,
  allCategories,
  resetCurrentCategory,
  setCurrentCategoryError,
}) => {
  // Set current category
  useEffect(() => {
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
      setCurrentCategory({
        category: filteredCurrentCategory,
      });
    } else {
      resetCurrentCategory();
    }
  }, [
    currentCategory,
    location,
    setCurrentCategory,
    allCategories.data,
    resetCurrentCategory,
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

  return (
    <div>
      <h2>{currentCategory.data.name}</h2>

      <Link to="/game-menu">
        <button type="button">Päävalikko</button>
      </Link>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    location: state.router.location,
    currentCategory: state.categories.currentCategory,
    isAuthenticated: state.login.isAuthenticated,
    allCategories: state.categories.allCategories,
  };
};

const mapDispatchToProps = {
  setCurrentCategory,
  resetCurrentCategory,
  setCurrentCategoryError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
