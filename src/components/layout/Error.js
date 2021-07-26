import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

Error.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default connect(null, { clearErrors })(Error);
