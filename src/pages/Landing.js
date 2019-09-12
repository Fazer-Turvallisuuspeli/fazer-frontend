import React from 'react';

import { StyledLanding, Title, Main } from './LandingStyles';
import Login from '../components/Login';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <StyledLanding>
      <Main>
        <Title>Työturvallisuuspeli</Title>
        <Login />
      </Main>

      <Footer />
    </StyledLanding>
  );
};

export default Landing;
