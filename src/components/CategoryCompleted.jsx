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
  nextCategoryId: PropTypes.number.isRequired,
};

const CategoryCompleted = ({
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
  nextCategoryId,
}) => {
  return (
    <>
      <h1>{category.name}</h1>

      <h3>Kategoria suoritettu</h3>

      <p>
        Jatka seuraavaan kategoriaan painamalla &quot;Seuraava&quot;-painiketta
        tai palaa päävalikkoon valitakseksi toisen kategorian.
      </p>

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

        {/* TODO : Link to next category, or category list if last category */}
        <Link to={`/categories/${nextCategoryId}`}>
          <button type="button">Seuraava</button>
        </Link>
      </Footer>
    </>
  );
};

CategoryCompleted.propTypes = propTypes;

export default CategoryCompleted;
