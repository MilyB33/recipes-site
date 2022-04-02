import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';

const AccountAccess = () => {
  const [register, setRegister] = useState(false);

  const onAccountChange = () => {
    setRegister(!register);
  };

  return (
    <main className="account">
      {register ? (
        <RegisterForm onVisibilityChange={onAccountChange} />
      ) : (
        <LogInForm onVisibilityChange={onAccountChange} />
      )}
    </main>
  );
};

export default AccountAccess;
