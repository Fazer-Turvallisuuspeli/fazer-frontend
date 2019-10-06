import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentCategory } from '../selectors/categoriesSelectors';
import { setCurrentCategory } from '../actions/categoriesActions';
import { selectInstructionsVisibility } from '../selectors/instructionsSelectors';
import { toggleInstructionsVisibility } from '../actions/instructionsActions';
import Category from '../components/Category';

const mapState = state => ({
  category: selectCurrentCategory(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
});

const mapDispatch = { setCurrentCategory, toggleInstructionsVisibility };

const propTypes = {
  setCurrentCategory: PropTypes.func.isRequired,
  category: PropTypes.shape({}),
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const CategoryContainer = ({
  setCurrentCategory,
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
}) => {
  const { categoryId } = useParams();

  useEffect(() => {
    setCurrentCategory(categoryId);
  }, [setCurrentCategory, categoryId]);

  return category ? (
    <Category
      category={category}
      isInstructionsVisible={isInstructionsVisible}
      toggleInstructionsVisibility={toggleInstructionsVisibility}
    />
  ) : null;
};

CategoryContainer.propTypes = propTypes;

export default connect(
  mapState,
  mapDispatch
)(CategoryContainer);
