import styled from 'styled-components';

export const QuestionStyleDiv = styled.div`
  background-color: rgba(226, 226, 226, 0.84);
  // eslint-disable-next-line no-undef
  background-size: 40% 90%;
  display: flex;
  flex: 1;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  @media (max-width: 400px) {
    width: 100%;
    height: 89%;
    left: 0%;
    padding: 0;
  }
  @media (min-width: 400px) {
    width: 100%;
    height: 89%;
    left: 0%;
    padding: 0;
  }
  @media (min-width: 1000px) {
    height: 89%;
    width: 40%;
    padding: 10px 10px;
    left: 60%;
  }
`;

export const StyledHeadingH2 = styled.h2`
  color: rgba(22, 22, 22, 0.97);
  text-align: center;
  align-self: center;
  margin-top: 0;
  @media (max-width: 400px) {
    font-size: 100%;
  }
`;

export const StyledHeadingH3 = styled.h3`
  color: rgba(22, 22, 22, 0.97);
  text-align: center;
  align-self: center;
  font-size: 80%;
`;

export const QuestionDiv = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;
`;
