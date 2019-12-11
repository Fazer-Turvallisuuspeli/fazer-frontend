import styled from 'styled-components';
import fazerLogin from '../assets/images/backgrounds/login.png';
import fazerLogo from '../assets/images/logos/fazer-logo-border.png';
import fazerLoginSmall from '../assets/images/backgrounds/loginsmall.png';
import fazerLoginMedium from '../assets/images/backgrounds/loginmedium.png';

export const StyledHeading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 2px 4px grey;
  color: white;
`;

export const DivStyle = styled.div`
  display: flex;
  flex: 1;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 90%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    background-image: url(${fazerLoginSmall});
    background-attachment: fixed;
    background-size: 100%, 90%;
    background-repeat: no-repeat;
  }
  @media (min-width: 400px) {
    background-image: url(${fazerLoginMedium});
    background-attachment: fixed;
    background-size: 100%, 90%;
    background-repeat: no-repeat;
  }
  @media (min-width: 1000px) {
    // eslint-disable-next-line no-undef
    background-image: url(${fazerLogo}), url(${fazerLogin});
    background-color: #15256b;
    background-repeat: no-repeat;
    background-size: 15%, 100% 90%;
    background-attachment: fixed;
    background-position: 50px 50px, 0 0;
  }
`;
