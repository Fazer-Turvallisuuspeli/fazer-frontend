import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const Footer = ({ children }) => {
  return (
    <footer style={{ outline: '1px solid grey' }}>
      {children}
      <p>Copyright © Fazer {new Date().getFullYear()}</p>
      <p>Sovelluksen on tuottanut Lahden ammattikorkeakoulu</p>
    </footer>
  );
};

Footer.propTypes = propTypes;

export default Footer;
