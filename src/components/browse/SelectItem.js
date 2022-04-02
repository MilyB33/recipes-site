import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const SelectItem = ({
  text,
  data,
  className,
  defaultValue,
  id,
  onChange,
}) => {
  return (
    <div className={`browse-form__box ${className ?? ''}`}>
      <label htmlFor={id}>{`${_.capitalize(text)}`}</label>
      <select
        id={id}
        value={defaultValue}
        className="input--browse"
        onChange={(e) => onChange(id, e.target.value)}
      >
        {data.map((item) => (
          <option key={item} value={item} className="option--browse">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectItem.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  class: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectItem.defaultProps = {
  data: [],
};

export default SelectItem;
