import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const NavBtn = ({ onClick }) => {
  return ReactDOM.createPortal(
    <button className="button button--navigation" onClick={onClick}>
      <i className="fas fa-bars"></i>
    </button>,
    document.querySelector('#navBtn')
  );
};

NavBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavBtn;
