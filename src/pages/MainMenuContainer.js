import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../shared/SiteTitle';
import InfoDisplay from '../components/InfoDisplay';
import Footer from '../shared/Footer';
import { setIsAuthenticated } from '../reducers/login/isAuthenticatedReducer';
import { setUser } from '../reducers/login/userReducer';
import { setWelcomeMessage } from '../reducers/info/welcomeMessageReducer';

const MainMenuContainer = ({
  setWelcomeMessage,
  setIsAuthenticated,
  setUser,
  user,
}) => {
  // Get welcome message
  useEffect(() => {
    setWelcomeMessage();
  }, [setWelcomeMessage]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div>
      <SiteTitle title={`Tervetuloa, ${user.lastName}`} />

      <InfoDisplay>
        <Link to="game-menu">
          <button type="button">Siirry peliin</button>
        </Link>
        <Link to="/login">
          <button type="button" onClick={handleLogout}>
            Kirjaudu ulos
          </button>
        </Link>
      </InfoDisplay>

      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.login.user,
    welcomeMessage: state.info.welcomeMessage,
  };
};

const mapDispatchToProps = {
  setIsAuthenticated,
  setUser,
  setWelcomeMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenuContainer);
