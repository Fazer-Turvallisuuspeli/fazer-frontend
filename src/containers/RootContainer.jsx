import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoriesContainer from './CategoriesContainer';
import CategoryContainer from './CategoryContainer';
import LandingContainer from './LandingContainer';
import { initProgress } from '../actions/progressActions';

const mapDispatch = { initProgress };

const propTypes = {
  initProgress: PropTypes.func.isRequired,
};

const RootContainer = ({ initProgress }) => {
  useEffect(() => {
    initProgress();
  }, [initProgress]);

  return (
    <Router>
      <Switch>
        <Route exact path="/categories" component={CategoriesContainer} />
        <Route
          exact
          path="/categories/:categoryId"
          component={CategoryContainer}
        />
        <Route component={LandingContainer} />
      </Switch>
    </Router>
  );
};

RootContainer.propTypes = propTypes;

export default connect(
  null,
  mapDispatch
)(RootContainer);
