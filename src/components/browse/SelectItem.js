import React, { useState } from 'react';

const SelectItem = ({
  text,
  data,
  className,
  defaultValue,
  id,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

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
      <label htmlFor={id}>
        {`${text.charAt(0).toUpperCase()}${text.slice(1)}`}
      </label>
      <select
        id={id}
        value={defaultValue}
        onChange={(e) => onChange(id, e.target.value)}
      >
        {renderOptions()}
      </select>
    </div>
  );
};

export default SelectItem;
