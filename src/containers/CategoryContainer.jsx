import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentCategory } from '../selectors/categoriesSelectors';
import { setCurrentCategory } from '../actions/categoriesActions';
import { selectInstructionsVisibility } from '../selectors/instructionsSelectors';
import { toggleInstructionsVisibility } from '../actions/instructionsActions';
import Category from '../components/Category';
import { selectIsCompleted } from '../selectors/progressSelectors';

const mapState = state => ({
  category: selectCurrentCategory(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  isCompleted: selectIsCompleted(state),
});

const mapDispatch = { setCurrentCategory, toggleInstructionsVisibility };

const propTypes = {
  setCurrentCategory: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  category: PropTypes.shape({}),
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const CategoryContainer = ({
  setCurrentCategory,
  isCompleted,
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
      isCompleted={isCompleted}
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
