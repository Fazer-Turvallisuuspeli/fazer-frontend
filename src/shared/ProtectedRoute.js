/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />;
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
};

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);
