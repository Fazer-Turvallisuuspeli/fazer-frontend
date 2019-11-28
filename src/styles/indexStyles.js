import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body {
    background-color: #15256B;
	  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, "sans-serif";
	  color: black;
    height: 95%;
}

#root {
  height: 100%;
}

.label {
  color: rgba(22, 22, 22, 0.97);
}

.input {
  background-color: #15256b;
  color: #fff;
  padding: 10px 35px;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 15px;
  outline: 0;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
}

.button {
  align-self: flex-end;
}

.fwdbutton {
  margin-left: 0px;
}

`;
export const StyledRoundButton = styled.button`
  background-color: #15256b;
  color: #fff;
  padding: 10px 35px;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 15px;
  outline: 0;
  cursor: pointer;
  /* margin-right: 20px;
  margin-left: 20px; */
`;

export const DivCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledP = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: space-between;
  width: 90%;
`;
