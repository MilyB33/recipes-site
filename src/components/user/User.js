import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserRecipes from './UserRecipes';
import Modal from './Modal';
class User extends Component {
  state = {
    visible: false,
  };

  onClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <section className="user">
        <UserInfo onClick={this.onClick} />
        <UserRecipes />
        {this.state.visible && <Modal onClick={this.onClick} />}
      </section>
    );
  }
}

export default User;
