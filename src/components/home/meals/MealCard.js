import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slideOnVisibility } from '../../../animations/animations';
const MealCard = ({ url, type, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    slideOnVisibility(ref.current);
  }, []);

  return (
    <article
      ref={ref}
      className={`meals__card meals__card--${className}`}
    >
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
