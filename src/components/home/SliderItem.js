import React from 'react';
import PropTypes from 'prop-types';

const SliderItem = ({ url }) => {
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

SliderItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SliderItem;
