import styled from 'styled-components';
import animation from '../assets/animations/liikkuminen.gif';

export const StyledHeading1 = styled.h1`
  color: #15256b;
  @media (max-width: 400px) {
    font-size: 150%;
  }
`;

export const QuestionBackgroundDiv = styled.div`
  // eslint-disable-next-line no-undef
  background-repeat: no-repeat;
  background-size: 60% 90%;
  background-attachment: fixed;
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    background-image: none;
  }
  @media (min-width: 400px) {
    background-image: none;
  }
  /* @media (min-width: 750px) {
    width: 100%;
  } */
  @media (min-width: 1000px) {
    background-image: url(${animation});
  }
`;
