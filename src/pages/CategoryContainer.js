import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CategoryTitle from '../shared/CategoryTitle';
import Infobank from '../components/Infobank';
import QuestionContainer from '../components/QuestionContainer';
import { toggleInfobankVisibility } from '../reducers/game/infobankReducer';
import { setCurrentCategory } from '../reducers/game/category/currentCategoryReducer';

const CategoryContainer = ({
  setCurrentCategory,
  currentCategory,
  toggleInfobankVisibility,
  location,
}) => {
  useEffect(() => {
    setCurrentCategory();
  }, [setCurrentCategory, location]);

  if (!currentCategory.data) return null;

  return (
    <div>
      <CategoryTitle />

      <QuestionContainer />

      <Infobank>
        <button type="button" onClick={toggleInfobankVisibility}>
          Jatka peliin
        </button>
      </Infobank>

      <Link to="/game-menu">
        <button type="button">Päävalikko</button>
      </Link>
      <button type="button" onClick={toggleInfobankVisibility}>
        Tietopankki
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    currentCategory: state.game.categories.currentCategory,
    location: state.router.location,
  };
};

const mapDispatchToProps = {
  toggleInfobankVisibility,
  setCurrentCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
