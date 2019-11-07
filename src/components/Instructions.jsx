import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeading,
  StyledParagraph,
  StyledDiv,
} from '../styles/instructionsStyles';

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
    <StyledDiv>
      {instructions.map(({ title, body }) => (
        <div key={body}>
          {title && <StyledHeading>{title}</StyledHeading>}
          <StyledParagraph>{body}</StyledParagraph>
        </div>
      ))}

      {children}
    </StyledDiv>
  );
};

Instructions.propTypes = propTypes;

export default Instructions;
