import React from 'react';
import sliderPhoto from '../../static/slider-temp.jpg';

const Slider = ({ text }) => {
  return (
    <section className="slider">
      <img
        src={sliderPhoto}
        alt="slider Photo"
        className="slider__photo"
      />
      <h1 className="slider__description">{text}</h1>
    </section>
  );
};

export default Slider;