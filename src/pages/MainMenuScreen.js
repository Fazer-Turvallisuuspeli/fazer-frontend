import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InfoDisplay from '../components/InfoDisplay';
import { removeUser } from '../reducers/userReducer';

const MainMenuScreen = ({ user, game, removeUser }) => {
  const handleLogout = () => {
    removeUser();
  };

  return (
    <div>
      {user && <h1>Tervetuloa, {user.lastName}</h1>}

      {game.welcomeMessage && <InfoDisplay data={game.welcomeMessage} />}

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
  game: PropTypes.objectOf(PropTypes.array),
  removeUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = state => {
  return {
    user: state.user,
    game: state.game,
  };
};

const mapDispatchToProps = {
  removeUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenuScreen);
