import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchInstructions,
  toggleInstructionsVisibility,
} from '../actions/instructionsActions';
import { fetchWelcomeMessage } from '../actions/welcomeMessageActions';
import Landing from '../components/Landing';
import { selectWelcomeMessage } from '../selectors/welcomeMessageSelectors';
import {
  selectInstructions,
  selectInstructionsVisibility,
} from '../selectors/instructionsSelectors';

const mapState = state => ({
  welcomeMessage: selectWelcomeMessage(state),
  isInstructionsVisible: selectInstructionsVisibility(state),
  instructions: selectInstructions(state),
});

const mapDispatch = {
  fetchInstructions,
  fetchWelcomeMessage,
  toggleInstructionsVisibility,
};

const propTypes = {
  fetchWelcomeMessage: PropTypes.func.isRequired,
  welcomeMessage: PropTypes.arrayOf(PropTypes.shape({})),
  fetchInstructions: PropTypes.func.isRequired,
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
  instructions: PropTypes.arrayOf(PropTypes.shape({})),
};

const LandingContainer = ({
  fetchWelcomeMessage,
  welcomeMessage,
  fetchInstructions,
  isInstructionsVisible,
  toggleInstructionsVisibility,
  instructions,
}) => {
  useEffect(() => {
    fetchWelcomeMessage();
    fetchInstructions();
  }, [fetchWelcomeMessage, fetchInstructions]);

  return (
    welcomeMessage &&
    instructions && (
      <Landing
        lastName="Doe"
        welcomeMessage={welcomeMessage}
        isInstructionsVisible={isInstructionsVisible}
        toggleInstructionsVisibility={toggleInstructionsVisibility}
        instructions={instructions}
      />
    )
  );
};

LandingContainer.propTypes = propTypes;

export default connect(
  mapState,
  mapDispatch
)(LandingContainer);
