import React from 'react';

const RegisterForm = ({ onChange }) => {
  return (
    <form className="account__form">
      <h1>Register :</h1>
      <label htmlFor="username">Username :</label>
      <input
        type="text"
        id="username"
        className="account__input"
        autoComplete="off"
      />

      <label htmlFor="register-email">Email :</label>
      <input
        type="email"
        id="register-email"
        className="account__input"
        autoComplete="off"
      />

      <label htmlFor="register-password">Password :</label>
      <input
        type="register-password"
        id="password"
        className="account__input"
      />

      <label htmlFor="confirm-password">Confirm Password :</label>
      <input
        type="password"
        id="confirm-password"
        className="account__input"
      />

      <input type="submit" value="Register" className="button" />
      <button className="button--link" onClick={onChange}>
        Already have Account? Log In.
      </button>
    </form>
  );
};

export default RegisterForm;
