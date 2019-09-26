import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryList = ({ allCategories }) => {
  if (allCategories.data === null) return null;

  return (
    <div>
      {allCategories.data.map(({ id, name }) => (
        <Link key={id} to={`/categories/${id}`}>
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

export default connect(
  mapStateToProps,
  null
)(CategoryList);
