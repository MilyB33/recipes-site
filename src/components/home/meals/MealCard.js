import React from 'react';

const MealCard = ({ url, type, className }) => {
  return (
    <article className={`meals__card meals__card--${className}`}>
      <a href="" className="link meals__link">
        <div className="meals__image__wrapper">
          <img
            src={`./static/${url}`}
            alt="meal type"
            className="meals__image"
          />
        </div>

        <h2>{type}</h2>
      </a>
    </article>
  );
};

export default MealCard;
