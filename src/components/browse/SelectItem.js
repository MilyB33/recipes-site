import React from 'react';

const SelectItem = ({
  text,
  data,
  className,
  defaultValue,
  id,
  onChange,
}) => {
  const renderOptions = () => {
    return data.map((item) => {
      return (
        <option key={item} value={item} className="option--browse">
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
        className="input--browse"
        onChange={(e) => onChange(id, e.target.value)}
      >
        {renderOptions()}
      </select>
    </div>
  );
};

export default SelectItem;
