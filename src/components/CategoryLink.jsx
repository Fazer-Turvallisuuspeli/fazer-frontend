/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImgCategories, ImgCategories2 } from '../styles/indexStyles';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cleanName: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const CategoryLink = ({ id, name, cleanName, isDisabled }) => {
  if (isDisabled)
    return (
      <>
        <ImgCategories2
          src={require(`../assets/images/categoryLogos/${cleanName}.png`)}
          alt={cleanName}
        />
        <p>{name}</p>
      </>
    );

  return (
    <Link to={`/categories/${id}`}>
      <ImgCategories
        src={require(`../assets/images/categoryLogos/${cleanName}.png`)}
        alt={cleanName}
      />
      <p>{name}</p>
    </Link>
  );
};

CategoryLink.propTypes = propTypes;

export default CategoryLink;
