import React from 'react';

import { Link } from 'react-router-dom';

const CategoryLink = ({ id, name }) => {
  return (
    <Link to={`/categories/${id}`}>
      <div>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default CategoryLink;
