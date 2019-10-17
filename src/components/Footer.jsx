/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCopyright,
  StyledFooter,
  InfoImage,
} from '../styles/footerStyles';

const propTypes = {
  children: PropTypes.node,
};

const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <InfoImage src={require('../assets/images/info.png')} />
      {children}
      <StyledCopyright>
        Copyright © Fazer {new Date().getFullYear()}
      </StyledCopyright>
      <StyledCopyright>
        Sovelluksen on tuottanut Lahden ammattikorkeakoulu
      </StyledCopyright>
    </StyledFooter>
  );
};

Footer.propTypes = propTypes;

export default Footer;
