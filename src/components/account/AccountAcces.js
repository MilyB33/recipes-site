import React from 'react';
import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';

class AccountAcces extends React.Component {
  state = {
    register: false,
  };

  onAccountChange = () => {
    this.setState((state) => {
      return { register: !state.register };
    });
  };

  render() {
    return (
      <main className="account">
        {this.state.register ? (
          <RegisterForm onVisibilityChange={this.onAccountChange} />
        ) : (
          <LogInForm onVisibilityChange={this.onAccountChange} />
        )}
      </main>
    );
  }
}

export default AccountAcces;
