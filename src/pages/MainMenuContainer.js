import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';
import InfoDisplay from '../components/InfoDisplay';
import Footer from '../components/Footer';
import { setIsAuthenticated } from '../reducers/loginReducer/isAuthenticatedReducer';
import { setUser } from '../reducers/loginReducer/userReducer';

const MainMenuContainer = ({
  isAuthenticated,
  setIsAuthenticated,
  setUser,
  location,
  user,
}) => {
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
        <button type="button">Siirry peliin</button>
        <button type="button" onClick={handleLogout}>
          Kirjaudu ulos
        </button>
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
  };
};

const mapDispatchToProps = {
  setIsAuthenticated,
  setUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenuContainer);
