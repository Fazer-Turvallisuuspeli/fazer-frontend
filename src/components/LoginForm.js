import React, { useState } from 'react';

import { connect } from 'react-redux';

import { setUser } from '../reducers/loginReducer/userReducer';
import { setIsAuthenticated } from '../reducers/loginReducer/isAuthenticatedReducer';

const LoginForm = props => {
  const [inputs, setInputs] = useState({
    fazerId: '',
    lastName: '',
    unitName: '',
  });

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleLogin = async event => {
    event.preventDefault();

    props.setUser(inputs);
    props.setIsAuthenticated(true);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="fazer-id">
            Fazer ID
            <input
              value={inputs.fazerId}
              onChange={handleInputChange}
              name="fazerId"
              id="fazerId"
              type="text"
            />
          </label>
        </div>

        <div>
          <label htmlFor="last-name">
            Sukunimi
            <input
              value={inputs.lastName}
              onChange={handleInputChange}
              name="lastName"
              id="lastName"
              type="text"
            />
          </label>
        </div>

        <div>
          <label htmlFor="unit-name">
            Toimipiste
            <input
              value={inputs.unitName}
              onChange={handleInputChange}
              name="unitName"
              id="unitName"
              type="text"
            />
          </label>
        </div>

        <button type="submit">Kirjaudu sisään</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setUser,
  setIsAuthenticated,
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
