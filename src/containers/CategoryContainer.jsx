import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentCategory } from '../selectors/categoriesSelectors';
import { setCurrentCategoryId } from '../actions/categoriesActions';
import { fetchQuestions } from '../actions/questionsActions';
import { initProgress } from '../actions/progressActions';
import { selectInstructionsVisibility } from '../selectors/instructionsSelectors';
import { toggleInstructionsVisibility } from '../actions/instructionsActions';
import { selectIsCompleted } from '../selectors/progressSelectors';
import Category from '../components/Category';

const mapState = state => ({
  category: selectCurrentCategory(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  isCompleted: selectIsCompleted(state),
});

const mapDispatch = {
  setCurrentCategoryId,
  fetchQuestions,
  initProgress,
  toggleInstructionsVisibility,
};

const propTypes = {
  setCurrentCategoryId: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  initProgress: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  category: PropTypes.shape({}),
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const CategoryContainer = ({
  setCurrentCategoryId,
  fetchQuestions,
  initProgress,
  isCompleted,
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
}) => {
  const { categoryId } = useParams();

  useEffect(() => {
    setCurrentCategoryId(categoryId);
    fetchQuestions();
    initProgress();
  }, [setCurrentCategoryId, fetchQuestions, initProgress, categoryId]);

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
