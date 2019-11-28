/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ImgCategoriesLink,
  ImgCategoriesCompleted,
  CategoryP,
  CompletedDiv,
} from '../styles/categoriesStyle';
import { StyledP } from '../styles/indexStyles';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cleanName: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const CategoryLink = ({ id, name, cleanName, isDisabled }) => {
  if (isDisabled)
    return (
      <CompletedDiv>
        <ImgCategoriesCompleted
          src={require(`../assets/images/categoryLogos/${cleanName}.png`)}
          alt={cleanName}
        />
        <CategoryP>{name}</CategoryP>
      </CompletedDiv>
    );

  return (
    <Link
      to={`/categories/${id}`}
      style={{ textDecoration: 'none', margin: '20px' }}>
      <ImgCategoriesLink
        src={require(`../assets/images/categoryLogos/${cleanName}.png`)}
        alt={cleanName}
      />
      <StyledP>{name}</StyledP>
    </Link>
  );
};

CategoryLink.propTypes = propTypes;

export default CategoryLink;
