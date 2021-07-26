import React from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { deleteAccount })(Modal);
