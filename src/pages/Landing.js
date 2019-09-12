import React from 'react';

import styled from 'styled-components';

import { StyledLanding, Title, Main } from './LandingStyles';
import Login from '../components/Login';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <StyledLanding>
      <Main>
        <Title>Työturvallisuuspeli</Title>
        <Login></Login>
      </Main>

      <Footer></Footer>
    </StyledLanding>
  );
};

export default Landing;
