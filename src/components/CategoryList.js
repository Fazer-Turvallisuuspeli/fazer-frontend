import React from 'react';

import { connect } from 'react-redux';

import CategoryLink from './CategoryLink';

const CategoryList = ({ allCategories }) => {
  if (!allCategories.data) return null;

  return (
    <div>
      {allCategories.data.map(({ id, name }) => (
        <CategoryLink key={id} id={id} name={name} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allCategories: state.game.categories.allCategories,
  };
};

export default connect(
  mapStateToProps,
  null
)(CategoryList);
