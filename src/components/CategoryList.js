import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  setCurrentCategory,
  resetCurrentCategory,
} from '../reducers/categoryReducer/currentCategoryReducer';

const CategoryList = ({
  allCategories,
  setCurrentCategory,
  resetCurrentCategory,
}) => {
  if (allCategories.data === null) return null;

  const handleCategoryChange = categoryId => {
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
  };
};

const mapDispatchToProps = {
  setCurrentCategory,
  resetCurrentCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
