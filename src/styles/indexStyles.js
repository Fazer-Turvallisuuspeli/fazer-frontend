import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #E6E6E6;
	font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, "sans-serif";
	color: white;
	margin-top: 60px;
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
`;
