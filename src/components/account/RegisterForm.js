import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions';
import Error from '../layout/Error';

const RegisterForm = ({ onVisibilityChange, register, error }) => {
  const [user, setUser] = useState({
    username: '',
    ['register-email']: '',
    ['register-password']: '',
    ['confirm-password']: '',
    inputError: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (user['register-password'] === user['confirm-password']) {
      register({
        username: user.username,
        email: user['register-email'],
        password: user['register-password'],
      });
    } else {
      setUser({ ...user, inputError: `Passwords aren't identical` });
      setInterval(() => setUser({ ...user, inputError: null }), 4000);
    }
  };

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const renderError = () => {
    return (
      <Fragment>
        {error || user.inputError ? (
          <Error message={error || user.inputError} />
        ) : (
          ''
        )}
      </Fragment>
    );
  };

  return (
    <form className="account__form" onSubmit={onSubmit}>
      <h1>Register :</h1>

      {renderError()}

      <label htmlFor="username">Username :</label>
      <input
        type="text"
        id="username"
        name="username"
        className="account__input"
        autoComplete="off"
        onChange={onChange}
      />

      <label htmlFor="register-email">Email :</label>
      <input
        type="email"
        id="register-email"
        name="register-email"
        className="account__input"
        autoComplete="off"
        onChange={onChange}
      />

      <label htmlFor="register-password">Password :</label>
      <input
        type="password"
        id="register-password"
        name="register-password"
        className="account__input"
        onChange={onChange}
      />

      <label htmlFor="confirm-password">Confirm Password :</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        className="account__input"
        onChange={onChange}
      />

      <input type="submit" value="Register" className="button" />
      <button className="button--link" onClick={onVisibilityChange}>
        Already have Account? Log In.
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { error: state.auth.error };
};

export default connect(mapStateToProps, { register })(RegisterForm);
