import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSelectedCategory } from '../reducers/selectedCategoryReducer';

const CategoryList = ({ categories, setSelectedCategory }) => {
  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {categories.map(category => (
        <Link
          onClick={() => handleCategoryClick(category)}
          key={category.id}
          to={`/gameCategory/${category.id}`}>
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  setSelectedCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = {
  setSelectedCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
