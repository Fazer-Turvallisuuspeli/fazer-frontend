import React, { useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { setData } from '../reducers/gameReducer';

const LoginScreen = ({ game, setData }) => {
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
    if (game.units) return;

    memoizedFetchData();
  }, [memoizedFetchData, game]);

  return (
    <div>
      <h1>Kirjaudu sisään.</h1>

      {game.units && <LoginForm />}
    </div>
  );
};

LoginScreen.propTypes = {
  game: PropTypes.objectOf(PropTypes.array),
  setData: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    game: state.game,
  };
};

const mapDispatchToProps = {
  setData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
