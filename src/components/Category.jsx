import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryCompleted from './CategoryCompleted';
import QuestionsContainer from '../containers/QuestionsContainer';
import Instructions from './Instructions';
import Footer from './Footer';

const propTypes = {
  isCompleted: PropTypes.bool.isRequired,
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

const Category = ({
  isCompleted,
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
}) => {
  if (isCompleted)
    return (
      <CategoryCompleted
        category={category}
        isInstructionsVisible={isInstructionsVisible}
        toggleInstructionsVisibility={toggleInstructionsVisibility}
      />
    );

  return (
    <>
      <h1>{category.name}</h1>

      <QuestionsContainer />

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