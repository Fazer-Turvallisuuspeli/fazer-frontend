import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoriesContainer from './CategoriesContainer';
import CategoryContainer from './CategoryContainer';
import LandingContainer from './LandingContainer';
import AdminContainer from './AdminContainer';

const RootContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/categories" component={CategoriesContainer} />
        <Route
          exact
          path="/categories/:categoryId"
          component={CategoryContainer}
        />
        <Route exact path="/admin" component={AdminContainer} />
        <Route component={LandingContainer} />
      </Switch>
    </Router>
  );
};

export default RootContainer;
