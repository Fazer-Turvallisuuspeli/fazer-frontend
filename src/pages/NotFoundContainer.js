import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const NotFoundContainer = ({ location }) => {
  return (
    <Redirect
      to={{
        pathname: '/',
        state: {
          from: location,
        },
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    location: state.router.location,
  };
};

export default connect(
  mapStateToProps,
  null
)(NotFoundContainer);
