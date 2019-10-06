import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';
import Footer from './Footer';

const propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const defaultCategory = {
  id: 0,
  name: 'categoryName',
  instructions: [
    {
      title: 'instructionsTitle',
      body: 'instructionsBody',
    },
  ],
};

const Category = ({
  category = defaultCategory,
  isInstructionsVisible,
  toggleInstructionsVisibility,
}) => {
  return (
    <>
      <h1>{category.name}</h1>

      {isInstructionsVisible && (
        <Instructions instructions={category.instructions}>
          <button type="button" onClick={toggleInstructionsVisibility}>
            Jatka peliin
          </button>
        </Instructions>
      )}

      <Footer>
        <Link to="/categories">
          <button type="button">Päävalikko</button>
        </Link>

        <button type="button" onClick={toggleInstructionsVisibility}>
          Tietopankki
        </button>
      </Footer>
    </>
  );
};

Category.propTypes = propTypes;

export default Category;
