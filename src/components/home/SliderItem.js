import React from 'react';

const SliderItem = ({ url }) => {
  console.log(url);
  return (
    <div className="slider__item">
      <img
        src={`../../static/${url}`}
        alt="slider"
        className="slider__photo"
      />
    </div>
  );
};

export default SliderItem;
