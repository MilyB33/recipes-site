import React from 'react';
import Slider from './Slider';
import Meals from './meals/Meals';
import Category from './categories/Category';

const Home = () => {
  return (
    <main className="container container--home">
      <Slider text="Welcome to our Recipes Site" />
      <Meals />
      <Category />
    </main>
  );
};

export default Home;
