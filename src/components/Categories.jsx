import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';
import Footer from './Footer';
import { formatString } from '../utils/stringUtils';
import CategoryLink from './CategoryLink';
import { DivCont, StyledRoundButton, DivButton } from '../styles/indexStyles';
import { DivStyle, StyledHeading } from '../styles/landingStyles';
import { DivCategories } from '../styles/categoryStyle';

const propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      instructions: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired
  ).isRequired,
  completedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isInstructionsVisible: PropTypes.bool.isRequired,
  instructions: PropTypes.arrayOf(PropTypes.shape({})),
  toggleInstructionsVisibility: PropTypes.func.isRequired,
};

const Categories = ({
  categories = [],
  completedCategories,
  isInstructionsVisible,
  instructions,
  toggleInstructionsVisibility,
}) => {
  return (
    <DivCont className="root">
      <DivStyle className="picture">
        <StyledHeading>VALITSE KATEGORIA</StyledHeading>
        <DivCategories>
          {categories.map(({ id, name }) => {
            const cleanName = formatString(name);

            return (
              <CategoryLink
                key={id}
                id={id}
                name={name}
                cleanName={cleanName}
                isDisabled={completedCategories.includes(id)}
              />
            );
          })}
        </DivCategories>

        {isInstructionsVisible && (
          <Instructions instructions={instructions}>
            <button onClick={toggleInstructionsVisibility} type="button">
              Sulje
            </button>
          </Instructions>
        )}
        <DivButton>
          <Link to="/">
            <StyledRoundButton type="button">Palaa alkuun</StyledRoundButton>
          </Link>

          <StyledRoundButton
            type="button"
            onClick={toggleInstructionsVisibility}>
            Info
          </StyledRoundButton>
        </DivButton>
      </DivStyle>
      <Footer>
        <Link to="/">
          <button type="button">Palaa alkuun</button>
        </Link>

        <button type="button" onClick={toggleInstructionsVisibility}>
          info
        </button>
      </Footer>
    </DivCont>
  );
};

Categories.propTypes = propTypes;

export default Categories;
