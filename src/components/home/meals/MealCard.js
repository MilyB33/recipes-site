import React from 'react';
import { Link } from 'react-router-dom';
const MealCard = ({ url, type, className }) => {
  return (
    <article className={`meals__card meals__card--${className}`}>
      <Link to={`/browse/${type}`} className="link meals__link">
        <div className="meals__image__wrapper">
          <img
            src={`./static/${url}`}
            alt="meal type"
            className="meals__image"
          />
        </div>

        <h2>{type}</h2>
      </Link>
    </article>
  );
};

export default MealCard;
