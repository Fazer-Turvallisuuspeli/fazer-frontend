import React from 'react';

import { connect } from 'react-redux';

import CategoryDisabled from './CategoryDisabled';
import CategoryLink from './CategoryLink';

const CategoryList = ({ allCategories, completedCategories }) => {
  if (!allCategories.data) return null;

  return (
    <div>
      {allCategories.data.map(({ id, name }) =>
        completedCategories.ids.includes(id) ? (
          <CategoryDisabled key={id} name={name} />
        ) : (
          <CategoryLink key={id} id={id} name={name} />
        )
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allCategories: state.game.categories.allCategories,
    completedCategories: state.game.categories.completedCategories,
  };
};

export default connect(
  mapStateToProps,
  null
)(CategoryList);
