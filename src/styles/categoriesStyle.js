import styled from 'styled-components';
import animation from '../assets/animations/liikkuminen.gif';

export const StyledHeading1 = styled.h1`
  color: #15256b;
`;

export const QuestionBackgroundDiv = styled.div`
  // eslint-disable-next-line no-undef
  background-image: url(${animation});
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
`;
