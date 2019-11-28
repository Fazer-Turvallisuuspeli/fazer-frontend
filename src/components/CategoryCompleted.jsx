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
import {
  StyledHeading1,
  QuestionBackgroundDiv,
} from '../styles/categoriesStyle';
import { DivButton, StyledRoundButton, DivCont } from '../styles/indexStyles';

const propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  nextCategoryId: PropTypes.number.isRequired,
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
        <QuestionStyleDiv className="questiondiv">
          <StyledHeading1>{category.name}</StyledHeading1>
          <QuestionDiv>
            <StyledHeadingH3>Kategoria suoritettu</StyledHeadingH3>

            <p>
              Jatka seuraavaan kategoriaan painamalla
              &quot;Seuraava&quot;-painiketta tai palaa päävalikkoon
              valitakseksi toisen kategorian.
            </p>
          </QuestionDiv>
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

            {/* TODO : Link to next category, or category list if last category */}
            <Link className="button" to={`/categories/${nextCategoryId}`}>
              <StyledRoundButton type="button">Seuraava</StyledRoundButton>
            </Link>
          </DivButton>
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
