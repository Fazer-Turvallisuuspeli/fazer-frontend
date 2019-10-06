import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';
import Footer from './Footer';

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
          <button type="button">Siirry peliin</button>
        </Link>
        <Link to="/logout">
          <button type="button">Kirjaudu ulos</button>
        </Link>
      </Instructions>

      {isInstructionsVisible && (
        <Instructions instructions={instructions}>
          <button onClick={toggleInstructionsVisibility} type="button">
            Sulje
          </button>
        </Instructions>
      )}

      <Footer />
    </>
  );
};

Landing.propTypes = propTypes;

export default Landing;
