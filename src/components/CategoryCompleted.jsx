import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';
import Footer from './Footer';
import {
  StyledHeadingH3,
  QuestionDiv,
  QuestionStyleDiv,
} from '../styles/questionStyle';
import { StyledHeading1, QuestionBackgroundDiv } from '../styles/categoryStyle';
import { StyledRoundButton, DivCont } from '../styles/indexStyles';

const propTypes = {
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

const CategoryCompleted = ({
  category,
  isInstructionsVisible,
  toggleInstructionsVisibility,
  nextCategoryId,
}) => {
  return (
    <DivCont className="root">
      <QuestionBackgroundDiv className="background">
        <QuestionStyleDiv className="questionstylediv">
          <StyledHeading1>{category.name}</StyledHeading1>
          <QuestionDiv className="questiondiv">
            <StyledHeadingH3>Kategoria suoritettu</StyledHeadingH3>

            <p>
              Jatka seuraavaan kategoriaan painamalla
              &quot;Seuraava&quot;-painiketta tai palaa päävalikkoon
              valitakseksi toisen kategorian.
            </p>
          </QuestionDiv>
          <div className="buttoncomplete">
            <Link className="button" to="/categories">
              <StyledRoundButton type="button">Päävalikko</StyledRoundButton>
            </Link>

            <StyledRoundButton
              className="button"
              type="button"
              onClick={toggleInstructionsVisibility}>
              Tietopankki
            </StyledRoundButton>

            {nextCategoryId !== '0' && (
              <Link className="button" to={`/categories/${nextCategoryId}`}>
                <StyledRoundButton type="button">Seuraava</StyledRoundButton>
              </Link>
            )}
          </div>
        </QuestionStyleDiv>

        {isInstructionsVisible && (
          <Instructions instructions={category.instructions}>
            <button type="button" onClick={toggleInstructionsVisibility}>
              Jatka peliin
            </button>
          </Instructions>
        )}
      </QuestionBackgroundDiv>
      <Footer toggleInstructionsVisibility={toggleInstructionsVisibility} />
    </DivCont>
  );
};

CategoryCompleted.propTypes = propTypes;

export default CategoryCompleted;
