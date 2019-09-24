import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InfoDisplay from '../components/InfoDisplay';
import { removeUser } from '../reducers/userReducer';

const MainMenuScreen = ({ removeUser }) => {
  const [welcomeMessage, setWelcomeMessage] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('/api/v1/game/info');
      const data = await response.json();

      setWelcomeMessage(data.welcomeMessage);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleLogout = () => {
    removeUser();
  };

  return (
    <div>
      <h1>Tervetuloa, SUKUNIMI_TÄHÄN</h1>

      <InfoDisplay data={welcomeMessage} />

      <Link to="/gameMenu">
        <button type="button">Siirry peliin</button>
      </Link>

      <Link to="/">
        <button type="button" onClick={handleLogout}>
          Kirjaudu ulos
        </button>
      </Link>
    </div>
  );
};

MainMenuScreen.propTypes = {
  removeUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  removeUser,
};

export default connect(
  null,
  mapDispatchToProps
)(MainMenuScreen);
