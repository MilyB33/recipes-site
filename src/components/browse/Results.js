import React, { useEffect, useState } from 'react';
import getRecipes from '../../api/spoon';
import Recipe from './Recipe';

const Results = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    console.log(process.env);
    const response = await getRecipes.get(
      `?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=20`
    );
    setRecipes(response.data.results);
    // eslint-disable-next-line
  }, []);

  const renderRecipes = () => {
    return recipes.map((recipe) => {
      return <Recipe key={recipe.id} recipe={recipe} />;
    });
  };

  return <div className="browse__results">{renderRecipes()}</div>;
};

export default Results;
