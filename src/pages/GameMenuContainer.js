import React, { useEffect } from 'react';

import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';
import Instructions from '../components/Instructions';
import CategoryList from '../components/CategoryList';
import {
  toggleInstructionsVisibility,
  setInstructions,
} from '../reducers/info/instructionReducer';
import { setAllCategories } from '../reducers/game/category/allCategoriesReducer';

const GameMenuContainer = ({
  isAuthenticated,
  location,
  toggleInstructionsVisibility,
  instructions,
  setInstructions,
  allCategories,
  setAllCategories,
}) => {
  // Get instructions, categories
  useEffect(() => {
    if (instructions.data === null) {
      setInstructions();
    }

    if (allCategories.data === null) {
      setAllCategories();
    }
  }, [
    instructions.data,
    setInstructions,
    allCategories.data,
    setAllCategories,
  ]);

  // Protected route
  if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: location,
          },
        }}
      />
    );
  }

  const handleInfoClick = () => {
    toggleInstructionsVisibility();
  };

  return (
    <div>
      <SiteTitle title="Valitse kategoria" />

      <Instructions />

      <CategoryList />

      <Link to="/">
        <button type="button">Palaa alkuun</button>
      </Link>

      <button onClick={handleInfoClick} type="button">
        Info
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    location: state.router.location,
    instructions: state.info.instructions,
    allCategories: state.game.categories.allCategories,
  };
};

const mapDispatchToProps = {
  toggleInstructionsVisibility,
  setInstructions,
  setAllCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameMenuContainer);
