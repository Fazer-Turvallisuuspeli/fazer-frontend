import styled from 'styled-components';

export const DivCategories = styled.div`
  display: flex;
  background-color: #ff9900;
  border-radius: 40px;
  width: 40%;
  height: 70%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  /* justify-content: center;
  align-items: center; */
`;

export const ImgCategoriesLink = styled.img`
  width: 100px;
`;

export const ImgCategoriesCompleted = styled.img`
  width: 100px;
  opacity: 0.5;
`;

export const CategoryP = styled.p`
  color: black;
  text-align: center;
  font-size: 14px;
  opacity: 0.5;
  /* margin-top: 20px; */
`;

export const CompletedDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  max-width: 100px;
`;
