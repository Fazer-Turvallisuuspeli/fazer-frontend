import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import InfoDisplay from '../components/InfoDisplay';

const GameMenuScreen = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // @TODO: Fetch and persist categories

  return (
    <div>
      <h1>Valitse kategoria</h1>

      {info.instructions && isModalOpen && (
        <InfoDisplay data={info.instructions} />
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
  info: PropTypes.objectOf(PropTypes.array),
};

const mapStateToProps = state => {
  return {
    info: state.info,
  };
};

export default connect(
  mapStateToProps,
  null
)(GameMenuScreen);
