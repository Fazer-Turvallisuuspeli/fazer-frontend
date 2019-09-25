import React, { useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { setData } from '../reducers/infoReducer';

const LoginScreen = ({ info, setData }) => {
  const memoizedFetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/v1/game/info');
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, [setData]);

  useEffect(() => {
    if (info.units) return;

    memoizedFetchData();
  }, [memoizedFetchData, info]);

  return (
    <div>
      <h1>Kirjaudu sisään.</h1>

      {info.units && <LoginForm />}
    </div>
  );
};

LoginScreen.propTypes = {
  info: PropTypes.objectOf(PropTypes.array),
  setData: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    info: state.info,
  };
};

const mapDispatchToProps = {
  setData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
