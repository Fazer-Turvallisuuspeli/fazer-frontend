import React, { useEffect } from 'react';

import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';
import InfoDisplay from '../components/InfoDisplay';
import Footer from '../components/Footer';
import { setIsAuthenticated } from '../reducers/login/isAuthenticatedReducer';
import { setUser } from '../reducers/login/userReducer';
import { setWelcomeMessage } from '../reducers/info/welcomeMessageReducer';

const MainMenuContainer = ({
  isAuthenticated,
  welcomeMessage,
  setWelcomeMessage,
  setIsAuthenticated,
  setUser,
  location,
  user,
}) => {
  // Get welcome message
  useEffect(() => {
    if (isAuthenticated === false) return;

    if (welcomeMessage.data === null) {
      setWelcomeMessage();
    }
  }, [isAuthenticated, setWelcomeMessage, welcomeMessage.data]);

  // Protected route
  if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    );
  }

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
    isAuthenticated: state.login.isAuthenticated,
    location: state.router.location,
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
