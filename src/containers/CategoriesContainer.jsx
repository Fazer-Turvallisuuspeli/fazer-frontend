import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import { fetchQuestions } from '../actions/questionsActions';
import { initProgress } from '../actions/progressActions';
import { selectCategories } from '../selectors/categoriesSelectors';
import { toggleInstructionsVisibility } from '../actions/instructionsActions';
import Categories from '../components/Categories';
import {
  selectInstructionsVisibility,
  selectInstructions,
} from '../selectors/instructionsSelectors';
import { selectIsCompleted } from '../selectors/progressSelectors';

const mapState = state => ({
  categories: selectCategories(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  instructions: selectInstructions(state),
  isCompleted: selectIsCompleted(state),
});

const mapDispatch = {
  fetchCategories,
  fetchQuestions,
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
  initProgress: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

const CategoriesContainer = ({
  fetchCategories,
  fetchQuestions,
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
    initProgress();
  }, [fetchCategories, fetchQuestions, initProgress]);

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
