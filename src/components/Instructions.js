import React from 'react';

import { connect } from 'react-redux';
import { toggleInstructionsVisibility } from '../reducers/info/instructionReducer';

const Instructions = ({ instructions, toggleInstructionsVisibility }) => {
  if (!instructions.isVisible || !instructions.data) return null;

  return (
    <div>
      {instructions.data.map(({ title, body }) => (
        <div key={title}>
          {title && <h2>{title}</h2>}
          {body
            .split('\n')
            .filter(Boolean)
            .map(text => (
              <p key={text}>{text}</p>
            ))}
        </div>
      ))}

      <button onClick={toggleInstructionsVisibility} type="button">
        Sulje
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    instructions: state.info.instructions,
  };
};

const mapDispatchToProps = {
  toggleInstructionsVisibility,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Instructions);
