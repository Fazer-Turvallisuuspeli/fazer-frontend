import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryCompleted from './CategoryCompleted';
import QuestionContainer from '../containers/QuestionContainer';
import Instructions from './Instructions';
import Footer from './Footer';
import {
  StyledHeading1,
  QuestionBackgroundDiv,
} from '../styles/categoriesStyle';
import { StyledRoundButton, DivCont, DivButton } from '../styles/indexStyles';
import { QuestionStyleDiv } from '../styles/questionStyle';

const propTypes = {
  isCategoryCompleted: PropTypes.bool.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  isInstructionsVisible: PropTypes.bool.isRequired,
  toggleInstructionsVisibility: PropTypes.func.isRequired,
  nextCategoryId: PropTypes.string.isRequired,
};

const Category = ({
  isCategoryCompleted,
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
  nextCategoryId,
}) => {
  if (isCategoryCompleted)
    return (
      <CategoryCompleted
        category={category}
        isInstructionsVisible={isInstructionsVisible}
        toggleInstructionsVisibility={toggleInstructionsVisibility}
        nextCategoryId={nextCategoryId}
      />
    );

  return (
    <DivCont className="root">
      <QuestionBackgroundDiv className="background">
        <QuestionStyleDiv className="h1questionandbuttons">
          <StyledHeading1>{category.name}</StyledHeading1>

          <QuestionContainer />
          <DivButton>
            <Link className="button" to="/categories">
              <StyledRoundButton type="button">Päävalikko</StyledRoundButton>
            </Link>

            <StyledRoundButton
              className="button"
              type="button"
              onClick={toggleInstructionsVisibility}>
              Tietopankki
            </StyledRoundButton>
          </DivButton>
        </QuestionStyleDiv>

        {isInstructionsVisible && (
          <Instructions instructions={category.instructions}>
            <StyledRoundButton
              type="button"
              onClick={toggleInstructionsVisibility}>
              Jatka peliin
            </StyledRoundButton>
          </Instructions>
        )}
      </QuestionBackgroundDiv>

      <Footer toggleInstructionsVisibility={toggleInstructionsVisibility} />
    </DivCont>
  );
};

Category.propTypes = propTypes;

export default Category;
