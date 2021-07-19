import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const Tags = ({ diets, dishTypes, cuisines }) => {
  const renderList = () => {
    const type = _.concat(diets, dishTypes, cuisines);

    return type?.map((name, index) => {
      return (
        <Link key={index} to={`/browse/${name}`}>
          <p className="recipe__tags__list__item">{name}</p>
        </Link>
      );
    });
  };

  return (
    <article className="recipe__tags">
      <h2>Tags :</h2>
      <div className="recipe__tags__list">{renderList()}</div>
    </article>
  );
};

Tags.defaultProps = {
  diets: [],
  dishTypes: [],
  cuisines: [],
};

export default Tags;
