import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GameMenuContainer = ({ isAuthenticated, location }) => {
  // Protected route
  if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: location,
          },
        }}
      />
    );
  }

  return (
    <div>
      <h1>Game Menu</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    location: state.router.location,
  };
};

export default connect(
  mapStateToProps,
  null
)(GameMenuContainer);
