import styled from 'styled-components';

export const StyledHeading = styled.h2`
  font-weight: bold;
  color: #012169;
  text-align: center;
`;
export const StyledParagraph = styled.p`
  color: black;
  margin: 15px, 0, 15px, 0;
  text-align: justify;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  padding: 20px;
  transition: visibility 0s, opacity 0.5s linear;
  width: 40%;
  height: 60%;
`;

export const DivButtonInstruction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: space-between;
  width: 100%;
`;
