import React from 'react';

const LogInForm = ({ onChange }) => {
  return (
    <form className="account__form">
      <h1>Log In :</h1>

      <label htmlFor="login-email">Email :</label>
      <input
        type="email"
        id="login-email"
        className="account__input"
        autoComplete="off"
      />

      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="login-password"
        className="account__input"
      />

      <input type="submit" value="Log In" className="button" />
      <button className="button--link" onClick={onChange}>
        Don't have an Account? Create one.
      </button>
    </form>
  );
};

export default LogInForm;
