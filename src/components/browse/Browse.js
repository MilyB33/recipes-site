import React from 'react';
import Slider from '../home/Slider';
import BrowseFrom from './BrowseForm';

const Browse = () => {
  return (
    <main className="container container--home">
      <Slider text="Search for recipe" />
      <BrowseFrom />
    </main>
  );
};

export default Browse;
