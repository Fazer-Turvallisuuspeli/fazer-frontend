import styled from 'styled-components';
import fazerLogo from '../assets/images/logos/fazer-logo-border.png';

export const StyledCopyright = styled.p`
  color: #a7a7a7;
  font-size: 12px;
`;

export const StyledFooter = styled.footer`
  text-align: center;
  background-color: #15256b;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: url(${fazerLogo});
  background-repeat: no-repeat;
  background-position: 20px 5px;
  background-size: 4%;
`;

export const InfoImage = styled.img`
  width: 3%;
  float: right;
  padding: 10px 20px;
`;
