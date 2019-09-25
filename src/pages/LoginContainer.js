import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const LoginContainer = ({ isAuthenticated, location }) => {
  if (isAuthenticated === true) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    );
  }

  return (
    <div>
      <SiteTitle title="Fazer Työturvallisuuspeli" />
      <LoginForm />
      <Footer />
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
)(LoginContainer);
