import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../shared/SiteTitle';
import Instructions from '../components/Instructions';
import CategoryList from '../components/CategoryList';
import {
  toggleInstructionsVisibility,
  setInstructions,
} from '../reducers/info/instructionReducer';
import { setAllCategories } from '../reducers/game/category/allCategoriesReducer';

const GameMenuContainer = ({
  toggleInstructionsVisibility,
  setInstructions,
  setAllCategories,
}) => {
  useEffect(() => {
    setInstructions();
    setAllCategories();
  }, [setInstructions, setAllCategories]);

  return (
    <div>
      <SiteTitle title="Valitse kategoria" />

      <Instructions />

      <CategoryList />

      <Link to="/">
        <button type="button">Palaa alkuun</button>
      </Link>

      <button onClick={toggleInstructionsVisibility} type="button">
        Info
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  toggleInstructionsVisibility,
  setInstructions,
  setAllCategories,
};

export default connect(
  null,
  mapDispatchToProps
)(GameMenuContainer);
