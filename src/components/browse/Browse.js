import React from 'react';
import Slider from '../home/Slider';
import BrowseFrom from './BrowseForm';
import Results from './Results';

const Browse = () => {
  return (
    <main className="container container--home">
      <Slider text="Search for recipe" />
      <BrowseFrom />
      <Results />
    </main>
  );
};

export default Browse;
