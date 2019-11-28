import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentCategory } from '../selectors/categoriesSelectors';
import { setCurrentCategoryId } from '../actions/categoriesActions';
import {
  setCurrentQuestionId,
  fetchQuestions,
} from '../actions/questionsActions';
import { initProgress } from '../actions/progressActions';
import { selectInstructionsVisibility } from '../selectors/instructionsSelectors';
import { toggleInstructionsVisibility } from '../actions/instructionsActions';
import {
  selectIsCategoryCompleted,
  selectNextCategoryId,
} from '../selectors/progressSelectors';
import Category from '../components/Category';

const mapState = state => ({
  category: selectCurrentCategory(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  isCategoryCompleted: selectIsCategoryCompleted(state),
  nextCategoryId: selectNextCategoryId(state),
});

const mapDispatch = {
  setCurrentCategoryId,
  fetchQuestions,
  setCurrentQuestionId,
  initProgress,
  toggleInstructionsVisibility,
};

const propTypes = {
  setCurrentCategoryId: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  setCurrentQuestionId: PropTypes.func.isRequired,
  initProgress: PropTypes.func.isRequired,
  isCategoryCompleted: PropTypes.bool.isRequired,
  category: PropTypes.shape({}),
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
  nextCategoryId: PropTypes.string,
};

const CategoryContainer = ({
  setCurrentCategoryId,
  fetchQuestions,
  setCurrentQuestionId,
  initProgress,
  isCategoryCompleted,
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
  nextCategoryId,
}) => {
  const { categoryId } = useParams();
  useEffect(() => {
    setCurrentCategoryId(categoryId);
    initProgress();
    setCurrentQuestionId();
    fetchQuestions();
  }, [
    setCurrentCategoryId,
    setCurrentQuestionId,
    fetchQuestions,
    initProgress,
    categoryId,
  ]);

  return category ? (
    <Category
      isCategoryCompleted={isCategoryCompleted}
      category={category}
      isInstructionsVisible={isInstructionsVisible}
      toggleInstructionsVisibility={toggleInstructionsVisibility}
      nextCategoryId={nextCategoryId}
    />
  ) : null;
};

CategoryContainer.propTypes = propTypes;

export default connect(
  mapState,
  mapDispatch
)(CategoryContainer);
