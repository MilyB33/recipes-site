import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { sliderPaths } from '../../static/data';
import { slideOnLoad } from '../../animations/animations';
import SliderItem from './SliderItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderGalery = ({ text }) => {
  const ref = useRef(null);

  useEffect(() => {
    slideOnLoad(ref.current);
  }, []);

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
      <h1 ref={ref} className="slider__description">
        {text}
      </h1>
      <Slider className="slider__slick" {...settings}>
        {renderElements()}
      </Slider>
    </section>
  );
};

export default SliderGalery;
