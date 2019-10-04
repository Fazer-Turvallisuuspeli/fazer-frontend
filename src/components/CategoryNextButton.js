import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryNextButton = ({ nextCategoryId }) => {
  return (
    <Link to={`/categories/${nextCategoryId}`}>
      <button type="button">Seuraava</button>
    </Link>
  );
};

const getNextCategoryId = ({ game }) => {
  const { allCategories, currentCategory } = game.categories;

  const nextCategoryIndex =
    allCategories.data.indexOf(currentCategory.data) + 1;

  return allCategories.data[nextCategoryIndex]
    ? allCategories.data[nextCategoryIndex].id
    : allCategories.data[0].id;
};

const mapStateToProps = state => {
  return {
    nextCategoryId: getNextCategoryId(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(CategoryNextButton);
