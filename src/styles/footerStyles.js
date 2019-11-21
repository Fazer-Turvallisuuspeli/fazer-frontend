import styled from 'styled-components';
import fazerLogo from '../assets/images/logos/fazer-logo-border.png';

export const StyledCopyright = styled.p`
  color: #a7a7a7;
  font-size: 12px;
`;

export const StyledFooter = styled.div`
  text-align: center;
  background-color: #15256b;
  background-image: url(${fazerLogo});
  background-repeat: no-repeat;
  background-position: 20px 5px;
  background-size: 4%;
  flex: 1;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const InfoImage = styled.img`
  width: 3%;
  float: right;
  padding: 10px 20px;
`;
