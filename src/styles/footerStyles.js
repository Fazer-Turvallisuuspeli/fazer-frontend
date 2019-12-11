import styled from 'styled-components';
import fazerLogo from '../assets/images/logos/fazer-logo-border.png';

/* Footer p */
export const StyledCopyright = styled.p`
  color: #a7a7a7;
  @media (max-width: 400px) {
    font-size: 9px;
  }
  @media (min-width: 400px) {
    font-size: 9px;
  }
  @media (min-width: 750px) {
    font-size: 12px;
  }
`;

/* Div around footer */
export const StyledFooter = styled.div`
  text-align: center;
  background-color: #15256b;
  background-repeat: no-repeat;
  background-position: 20px 5px;
  background-size: 4%;
  flex: 1;
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0;
  left: 0;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 400px) {
    background-image: none;
  }
  @media (min-width: 400px) {
    background-image: none;
  }
  @media (min-width: 750px) {
    background-image: url(${fazerLogo});
  }
`;

/* Info image on the right */
export const InfoImage = styled.img`
  float: right;
  padding: 10px 20px;
  @media (max-width: 400px) {
    width: 10%;
  }
  @media (min-width: 400px) {
    width: 10%;
  }
  @media (min-width: 750px) {
    width: 3%;
  }
`;
