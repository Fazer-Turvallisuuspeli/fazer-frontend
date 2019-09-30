import React from 'react';

import { connect } from 'react-redux';

const CategoryTitle = ({ categoryTitle }) => {
  if (categoryTitle === undefined) return null;

  return <h2>{categoryTitle}</h2>;
};

const mapStateToProps = state => {
  return {
    categoryTitle: state.categories.currentCategory.data.name,
  };
};

export default connect(
  mapStateToProps,
  null
)(CategoryTitle);
