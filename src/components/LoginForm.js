import React, { useState } from 'react';

import { connect } from 'react-redux';

import { setUser } from '../reducers/loginReducer/userReducer';
import { setIsAuthenticated } from '../reducers/loginReducer/isAuthenticatedReducer';

const LoginForm = ({ setUser, setIsAuthenticated, units }) => {
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

    setUser(inputs);
    setIsAuthenticated(true);
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
            <select
              value={inputs.unitName}
              onChange={handleInputChange}
              name="unitName"
              id="unitName">
              <option value="">-- Valitse toimipiste --</option>
              {units.data &&
                units.data.map(unit => (
                  <option key={unit.id} value={unit.name}>
                    {unit.name}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <button type="submit">Kirjaudu sisään</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    units: state.info.units,
  };
};

const mapDispatchToProps = {
  setUser,
  setIsAuthenticated,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
