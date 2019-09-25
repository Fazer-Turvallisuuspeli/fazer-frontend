import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GameCategoryScreen = ({ selectedCategory }) => {
  return (
    <div>
      <h2>{selectedCategory && selectedCategory.name}</h2>
    </div>
  );
};

GameCategoryScreen.propTypes = {
  selectedCategory: PropTypes.objectOf(PropTypes.object),
};

const mapStateToProps = state => {
  return {
    selectedCategory: state.selectedCategory,
  };
};

export default connect(
  mapStateToProps,
  null
)(GameCategoryScreen);
