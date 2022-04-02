import React from 'react';
import Slider from '../home/Slider';
import BrowseFrom from './BrowseForm';
import Results from './Results';

const Browse = ({ match }) => {
  return (
    <main className="container">
      <Slider text="Search for recipe" />
      <BrowseFrom param={match.params.type} />
      <Results />
    </main>
  );
};

export default Browse;
