import styled from 'styled-components';
import fazerLogin from '../assets/images/backgrounds/login.png';
import fazerLogo from '../assets/images/logos/fazer-logo-border.png';

export const StyledHeading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 4px grey;
  color: white;
`;

export const DivStyle = styled.div`
  background-color: #15256b;
  // eslint-disable-next-line no-undef
  background-image: url(${fazerLogo}), url(${fazerLogin});
  background-repeat: no-repeat;
  background-size: 15%, 100% 90%;
  background-attachment: fixed;
  background-position: 50px 50px, 0 0;
  /* 
  display: block;
  */
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  align-items: center;
`;
