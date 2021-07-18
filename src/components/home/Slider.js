import React from 'react';
import Slider from 'react-slick';
import { sliderPaths } from '../../static/data';
import SliderItem from './SliderItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderGalery = ({ text }) => {
  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplaySpeed: 7000,
    speed: 700,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
  };

  const renderElements = () => {
    return sliderPaths.map((element, index) => {
      return <SliderItem url={element} key={index} />;
    });
  };
  return (
    <section className="slider">
      <h1 className="slider__description">{text}</h1>
      <Slider className="slider__slick" {...settings}>
        {renderElements()}
      </Slider>
    </section>
  );
};

export default SliderGalery;
