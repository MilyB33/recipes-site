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
      <div className="account">
        {this.state.register ? (
          <RegisterForm onChange={this.onAccountChange} />
        ) : (
          <LogInForm onChange={this.onAccountChange} />
        )}
      </div>
    );
  }
}

export default AccountAcces;
