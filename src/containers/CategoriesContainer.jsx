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
import { selectIsCompleted } from '../selectors/progressSelectors';

const mapState = state => ({
  categories: selectCategoriesData(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  instructions: selectInstructionsData(state),
  isCompleted: selectIsCompleted(state),
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
  fetchCategories: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  fetchInstructions: PropTypes.func.isRequired,
  initProgress: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

const CategoriesContainer = ({
  fetchCategories,
  fetchQuestions,
  fetchInstructions,
  initProgress,
  isCompleted,
  categories,
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
        isCompleted={isCompleted}
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
