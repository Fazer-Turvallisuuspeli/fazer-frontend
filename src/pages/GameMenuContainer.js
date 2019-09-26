import React, { useEffect } from 'react';

import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SiteTitle from '../components/SiteTitle';
import Instructions from '../components/Instructions';
import {
  toggleInstructionsVisibility,
  setInstructions,
} from '../reducers/infoReducer/instructionReducer';

const GameMenuContainer = ({
  isAuthenticated,
  location,
  toggleInstructionsVisibility,
  instructions,
  setInstructions,
}) => {
  // Get instructions
  useEffect(() => {
    if (instructions.data) return;

    setInstructions();
  }, [instructions.data, setInstructions]);

  // Protected route
  if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: location,
          },
        }}
      />
    );
  }

  const handleInfoClick = () => {
    toggleInstructionsVisibility();
  };

  return (
    <div>
      <SiteTitle title="Valitse kategoria" />

      <Instructions />

      <Link to="/">
        <button type="button">Palaa alkuun</button>
      </Link>

      <button onClick={handleInfoClick} type="button">
        Info
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    location: state.router.location,
    instructions: state.info.instructions,
  };
};

const mapDispatchToProps = {
  toggleInstructionsVisibility,
  setInstructions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameMenuContainer);
