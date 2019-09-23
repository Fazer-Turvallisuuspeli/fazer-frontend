import React from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ history }) => {
  const handleLogin = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      history.push('mainMenu');
    }, 400);
  };

  return (
    <div>
      <h1>Kirjaudu sisään.</h1>

      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

LoginScreen.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default LoginScreen;
