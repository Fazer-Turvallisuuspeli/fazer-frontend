import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../shared/SiteTitle';
import LoginForm from '../components/LoginForm';
import Footer from '../shared/Footer';
import { setUnits } from '../reducers/info/unitReducer';

const LoginContainer = ({ isAuthenticated, location, setUnits }) => {
  useEffect(() => {
    setUnits();
  }, [setUnits]);

  if (isAuthenticated) {
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

const mapDispatchToProps = {
  setUnits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
