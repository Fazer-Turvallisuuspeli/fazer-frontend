import styled from 'styled-components';

export const StyledHeading = styled.h2`
  font-weight: bold;
  color: #012169;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 70%;
  }

  @media (min-width: 400px) {
    font-size: 70%;
  }
  @media (min-width: 750px) {
    font-size: 100%;
  }
  /* @media (min-width: 1000px) {
    font-size: 100%;
  } */
`;
export const StyledParagraph = styled.p`
  color: black;
  margin: 15px, 0, 15px, 0;
  text-align: justify;
  @media (max-width: 400px) {
    font-size: 70%;
    text-align: left;
  }
  @media (min-width: 400px) {
    font-size: 70%;
    text-align: left;
  }
  @media (min-width: 750px) {
    font-size: 100%;
    text-align: justify;
  }
  /* @media (min-width: 1000px) {
    font-size: 100%;
  } */
`;

/* Instructions content, h2, p and buttons */
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  padding: 20px;
  transition: visibility 0s, opacity 0.5s linear;
  overflow: auto;
  z-index: 1;
  margin-top: 0;
  margin-top: ${props => props.theme.margintop};
  @media (max-width: 400px) {
    width: 70%;
    height: 75%;
    width: ${props => props.theme.width1};
    height: ${props => props.theme.height1};
  }
  @media (min-width: 400px) {
    width: 60%;
    height: 70%;
    width: ${props => props.theme.width2};
    height: ${props => props.theme.height2};
  }
  @media (min-width: 750px) {
    width: 60%;
    height: 80%;
    width: ${props => props.theme.width3};
    height: ${props => props.theme.height3};
  }
  @media (min-width: 1000px) {
    /* width: 40%; */
    /* height: 60%; */
    width: ${props => props.theme.width4};
    height: ${props => props.theme.height4};
  }
`;

StyledDiv.defaultProps = {
  theme: {
    height4: '60%',
    width4: '40%',
    bkimg1: '10%',
    bkimg2: '10%',
    bkimg3: '40%',
  },
};

export const theme = {
  height1: '81%',
  width1: '85%',
  height2: '80%',
  width2: '85%',
  height3: '84%',
  width3: '90%',
  height4: '81%',
  width4: '95%',
  bkimg1: '0%',
  bkimg2: '0%',
  bkimg3: '0%',
  margintop: '10px',
  paddingbottom: '10px',
};

export const StyledParagraphDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

/* Fazer logo shown only in smaler devices under the h2 */
export const StyledFazerImage = styled.img`
  @media (max-width: 400px) {
    width: 10%;
    width: ${props => props.theme.bkimg1};
  }
  @media (min-width: 400px) {
    width: 10%;
    width: ${props => props.theme.bkimg2};
  }
  @media (min-width: 750px) {
    width: 40%;
    width: ${props => props.theme.bkimg3};
  }
  @media (min-width: 1000px) {
    width: 0%;
  }
`;

export const DivButtonInstruction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: space-between;
  width: 100%;
  padding-bottom: 0;
  padding-bottom: ${props => props.theme.paddingbottom};
  /* @media (max-width: 400px) {
    width: 60%;
  }
  @media (min-width: 400px) {
    width: 80%;
  }
  @media (min-width: 750px) {
    width: 100%;
  } */
`;

//   /* Larger than desktop */
//   @media (min-width: 1000px) {}

//   /* Larger than Desktop HD */
//   @media (min-width: 1200px) {}
