import React, { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import InfoDisplay from '../components/InfoDisplay';
import { setCategories } from '../reducers/categoryReducer';
import CategoryList from '../components/CategoryList';

const GameMenuScreen = ({ info, setCategories, categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const memoizedFetchData = useCallback(async () => {
    const response = await fetch('/api/v1/game/categories');
    const data = await response.json();

    setCategories(data);
  }, [setCategories]);

  useEffect(() => {
    if (categories.length > 0) return;

    memoizedFetchData();
  }, [memoizedFetchData, categories]);

  return (
    <div>
      <h1>Valitse kategoria</h1>

      {info.instructions && isModalOpen && (
        <InfoDisplay data={info.instructions} />
      )}

      <CategoryList />

      <Link to="/gameMenu">
        <button type="button" onClick={handleModalClose}>
          Sulje
        </button>
      </Link>

      <Link to="/mainMenu">
        <button type="button">Palaa alkuun</button>
      </Link>
    </div>
  );
};

GameMenuScreen.propTypes = {
  info: PropTypes.objectOf(PropTypes.array),
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => {
  return {
    info: state.info,
    categories: state.categories,
  };
};

const mapDispatchToProps = {
  setCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameMenuScreen);
