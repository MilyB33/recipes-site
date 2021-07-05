import React from 'react';

const SelectItem = ({ text, data, className }) => {
  const renderOptions = () => {
    return data.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  };

  return (
    <div className={`browse-form__box ${className ?? ''}`}>
      <label htmlFor={text}>
        {`${text.charAt(0).toUpperCase()}${text.slice(1)}`}
      </label>
      <select id={text}>{renderOptions()}</select>
    </div>
  );
};

export default SelectItem;
