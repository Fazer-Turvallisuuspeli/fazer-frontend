import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';
import Footer from './Footer';
import { StyledRoundButton } from '../styles/indexStyles';

const propTypes = {
  lastName: PropTypes.string.isRequired,
  welcomeMessage: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  isInstructionsVisible: PropTypes.bool.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const defaultWelcomeMessage = [
  {
    title: 'welcomeMessageTitle',
    body: 'welcomeMessageBody',
  },
];

const defaultInstructions = [
  {
    title: 'instructionsTitle',
    body: 'instructionsBody',
  },
];

const Landing = ({
  lastName = 'Doe',
  welcomeMessage = defaultWelcomeMessage,
  isInstructionsVisible,
  instructions = defaultInstructions,
  toggleInstructionsVisibility,
}) => {
  return (
    <>
      <h1>Tervetuloa, {lastName}</h1>

      <Instructions instructions={welcomeMessage}>
        <Link to="/categories">
          <StyledRoundButton type="button">Siirry peliin</StyledRoundButton>
        </Link>
        <Link to="/logout">
          <StyledRoundButton type="button">Kirjaudu ulos</StyledRoundButton>
        </Link>
      </Instructions>

      {isInstructionsVisible && (
        <Instructions instructions={instructions}>
          <button onClick={toggleInstructionsVisibility} type="button">
            Sulje
          </button>
        </Instructions>
      )}

      <Footer toggleInstructionsVisibility={toggleInstructionsVisibility} />
    </>
  );
};

Landing.propTypes = propTypes;

export default Landing;
