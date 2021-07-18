import React from 'react';

const SliderItem = ({ url }) => {
  return (
    <div className="slider__item">
      <img
        src={`./static/${url}`}
        alt="slider Photo"
        className="slider__photo"
      />
    </div>
  );
};

export default SliderItem;
