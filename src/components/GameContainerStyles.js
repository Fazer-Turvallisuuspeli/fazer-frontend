import styled from 'styled-components';

import LoginImage from '../assets/images/login.png';

export const StyledGameContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background-image: url(${LoginImage});
  background-size: contain;
  background-repeat: no-repeat, no-repeat;
  background-position: top center;
  background-color: #15256B;
  text-align: center;
`;