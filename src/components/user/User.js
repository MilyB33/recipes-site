import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserRecipes from './UserRecipes';

class User extends Component {
  render() {
    return (
      <section className="user">
        <UserInfo />
        <UserRecipes />
      </section>
    );
  }
}

export default User;
