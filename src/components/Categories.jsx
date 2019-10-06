import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';
import Footer from './Footer';

const propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      instructions: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired
  ).isRequired,
  isInstructionsVisible: PropTypes.bool.isRequired,
  instructions: PropTypes.arrayOf(PropTypes.shape({})),
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const Categories = ({
  categories = [],
  isInstructionsVisible,
  instructions,
  toggleInstructionsVisibility,
}) => {
  return (
    <>
      <ul>
        {categories.map(({ id, name }) => (
          <Link key={id} to={`/categories/${id}`}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>

      {isInstructionsVisible && (
        <Instructions instructions={instructions}>
          <button onClick={toggleInstructionsVisibility} type="button">
            Sulje
          </button>
        </Instructions>
      )}

      <Footer>
        <Link to="/">
          <button type="button">Palaa alkuun</button>
        </Link>

        <button type="button" onClick={toggleInstructionsVisibility}>
          info
        </button>
      </Footer>
    </>
  );
};

Categories.propTypes = propTypes;

export default Categories;
