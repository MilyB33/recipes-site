import React, { useEffect } from 'react';

const Error = ({ message, className }) => {
  useEffect(() => {
    console.log(message);
  });
  return (
    <div className={`error ${className}`}>
      <p>{message}</p>
    </div>
  );
};

export default Error;
