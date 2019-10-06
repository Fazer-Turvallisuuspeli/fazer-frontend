import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import { selectCategories } from '../selectors/categoriesSelectors';
import { toggleInstructionsVisibility } from '../actions/instructionsActions';
import Categories from '../components/Categories';
import {
  selectInstructionsVisibility,
  selectInstructions,
} from '../selectors/instructionsSelectors';

const mapState = state => ({
  categories: selectCategories(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  instructions: selectInstructions(state),
});

const mapDispatch = { fetchCategories, toggleInstructionsVisibility };

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
      ),
    })
  ),
  fetchCategories: PropTypes.func.isRequired,
};

const CategoriesContainer = ({
  fetchCategories,
  categories,
  isInstructionsVisible,
  instructions,
  toggleInstructionsVisibility,
}) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    categories && (
      <Categories
        categories={categories}
        isInstructionsVisible={isInstructionsVisible}
        instructions={instructions}
        toggleInstructionsVisibility={toggleInstructionsVisibility}
      />
    )
  );
};

CategoriesContainer.propTypes = propTypes;

export default connect(
  mapState,
  mapDispatch
)(CategoriesContainer);
