import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeading,
  StyledParagraph,
  StyledParagraphDiv,
  StyledFazerImage,
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
    <StyledDiv className="instruction content">
      {instructions.map(({ title, body }) => (
        <StyledParagraphDiv key={body}>
          {title && <StyledHeading>{title}</StyledHeading>}
          <StyledFazerImage
            // eslint-disable-next-line global-require
            src={require('../assets/images/logos/fazer-logo-border.png')}
          />
          <StyledParagraph>{body}</StyledParagraph>
        </StyledParagraphDiv>
      ))}

      {children}
    </StyledDiv>
  );
};

Instructions.propTypes = propTypes;

export default Instructions;
