import React from 'react';

import QuestionProgress from './QuestionProgress';
import CategoryCompletedTitle from './CategoryCompletedTitle';
import CategoryNextButton from './CategoryNextButton';
import CategoryCompletedInfo from './CategoryCompletedInfo';

const CategoryCompletedContainer = () => {
  return (
    <div>
      <QuestionProgress />
      <CategoryCompletedTitle />
      <CategoryCompletedInfo />
      <CategoryNextButton />
    </div>
  );
};

export default CategoryCompletedContainer;
