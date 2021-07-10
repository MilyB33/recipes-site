import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions';

const Error = ({ message, className, clearErrors }) => {
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 4000);
  });
  return (
    <div className={`error ${className}`}>
      <p>{message}</p>
    </div>
  );
};

export default connect(null, { clearErrors })(Error);
