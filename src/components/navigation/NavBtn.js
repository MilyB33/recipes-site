import React from 'react';
import ReactDOM from 'react-dom';

const NavBtn = ({ onClick }) => {
  return ReactDOM.createPortal(
    <button className="button button--navigation" onClick={onClick}>
      <i className="fas fa-bars"></i>
    </button>,
    document.querySelector('#navBtn')
  );
};

export default NavBtn;
