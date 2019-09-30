import React, { useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import { setUnits } from '../reducers/info/unitReducer';

const LoginContainer = ({ isAuthenticated, location, units, setUnits }) => {
  // Get units
  useEffect(() => {
    if (units.data === null) {
      setUnits();
    }
  }, [units.data, setUnits]);

  // Protected route
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
    units: state.info.units,
  };
};

const mapDispatchToProps = {
  setUnits,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
