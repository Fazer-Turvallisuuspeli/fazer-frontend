import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.node,
};

const defaultInstructions = [
  {
    title: 'instructionsTitle',
    body: 'instructionsBody',
  },
];

const Instructions = ({ instructions = defaultInstructions, children }) => {
  return (
    <div>
      {instructions.map(({ title, body }) => (
        <div key={body}>
          {title && <h2>{title}</h2>}
          <p>{body}</p>
        </div>
      ))}

      {children}
    </div>
  );
};

Instructions.propTypes = propTypes;

export default Instructions;
