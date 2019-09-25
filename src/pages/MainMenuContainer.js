import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';

const MainMenuContainer = ({ isAuthenticated, location, user }) => {
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

  return (
    <div>
      <SiteTitle title={`Tervetuloa, ${user.lastName}`} />
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

export default connect(
  mapStateToProps,
  null
)(MainMenuContainer);
