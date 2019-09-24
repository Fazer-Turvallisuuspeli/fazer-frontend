import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import InfoDisplay from '../components/InfoDisplay';

const GameMenuScreen = ({ game }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // @TODO: Fetch and persist categories

  return (
    <div>
      <h1>Valitse kategoria</h1>

      {game.instructions && isModalOpen && (
        <InfoDisplay data={game.instructions} />
      )}

      {/* @TODO: Loop over categories */}

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
  game: PropTypes.objectOf(PropTypes.array),
};

const mapStateToProps = state => {
  return {
    game: state.game,
  };
};

export default connect(
  mapStateToProps,
  null
)(GameMenuScreen);
