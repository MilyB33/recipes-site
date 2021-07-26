import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions';

const Modal = ({ onClick, deleteAccount, user }) => {
  const onDelete = () => {
    deleteAccount(user.id);
  };

  return (
    <div className="modal">
      <div className="modal__box">
        <h1>Are you sure you want to delete your account!</h1>
        <button className="button button--modal" onClick={onDelete}>
          Yes
        </button>
        <button className="button button--modal" onClick={onClick}>
          No
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { deleteAccount })(Modal);
