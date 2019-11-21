import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body {
    background-color: #15256B;
	  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, "sans-serif";
	  color: white;
    height: 95%;
}

#root {
  height: 100%;
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
  margin-right: 20px;
  margin-left: 20px;
`;

export const DivCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledP = styled.p`
  font-size: 14px;
  color: white;
`;

export const DivCategories = styled.div`
  display: flex;
  background-color: #ff9900;
  border-radius: 40px;
  width: 40%;
  height: 70%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ImgCategories = styled.img`
  width: 50%;
`;

export const ImgCategories2 = styled.img`
  width: 12%;
`;

export const DivButton = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
