import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import Error from '../layout/Error';

const LogInForm = ({ onVisibilityChange, error, login }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    login(user);

    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <form className="account__form" onSubmit={onSubmit}>
      <h1>Log In :</h1>

      {error && <Error message={error} />}

      <label htmlFor="login-email">Email :</label>
      <input
        type="email"
        id="login-email"
        className="account__input"
        autoComplete="off"
        name="email"
        value={user.email}
        onChange={onChange}
        required
      />

      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        className="account__input"
        name="password"
        onChange={onChange}
        value={user.password}
        required
      />

      <input type="submit" value="Log In" className="button" />
      <button className="button--link" onClick={onVisibilityChange}>
        Don't have an Account? Create one.
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { error: state.auth.error };
};

export default connect(mapStateToProps, { login })(LogInForm);
