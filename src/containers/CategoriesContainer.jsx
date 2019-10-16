import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import { fetchQuestions } from '../actions/questionsActions';
import { initProgress } from '../actions/progressActions';
import { selectCategoriesData } from '../selectors/categoriesSelectors';
import {
  fetchInstructions,
  toggleInstructionsVisibility,
} from '../actions/instructionsActions';
import Categories from '../components/Categories';
import {
  selectInstructionsVisibility,
  selectInstructionsData,
} from '../selectors/instructionsSelectors';
import {
  selectIsCategoryCompleted,
  selectCompletedCategories,
} from '../selectors/progressSelectors';

const mapState = state => ({
  categories: selectCategoriesData(state),
  completedCategories: selectCompletedCategories(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  instructions: selectInstructionsData(state),
  isCategoryCompleted: selectIsCategoryCompleted(state),
});

const mapDispatch = {
  fetchCategories,
  fetchQuestions,
  fetchInstructions,
  initProgress,
  toggleInstructionsVisibility,
};

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
  completedCategories: PropTypes.arrayOf(PropTypes.number),
  fetchCategories: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  fetchInstructions: PropTypes.func.isRequired,
  initProgress: PropTypes.func.isRequired,
  isCategoryCompleted: PropTypes.bool.isRequired,
};

const CategoriesContainer = ({
  fetchCategories,
  fetchQuestions,
  fetchInstructions,
  initProgress,
  isCategoryCompleted,
  categories,
  completedCategories,
  isInstructionsVisible,
  instructions,
  toggleInstructionsVisibility,
}) => {
  useEffect(() => {
    fetchCategories();
    fetchQuestions();
    fetchInstructions();
    initProgress();
  }, [fetchCategories, fetchQuestions, fetchInstructions, initProgress]);

  return (
    categories && (
      <Categories
        isCategoryCompleted={isCategoryCompleted}
        categories={categories}
        completedCategories={completedCategories}
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
