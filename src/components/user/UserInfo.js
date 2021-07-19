import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAccount, updateAccount } from '../../actions';
import NewEmail from './NewEmail';
import NewPassword from './NewPassword';

export class UserInfo extends Component {
  state = {
    changeEmail: false,
    changePassword: false,
  };

  onChangeInputVisibility = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });
  };

  onDeleteAccount = (event) => {
    event.preventDefault();
    this.props.deleteAccount(this.props.user.id);
  };

  onSubmit = (data) => {
    this.props.updateAccount(this.props.user, data);
    this.setState({
      changeEmail: false,
      changePassword: false,
    });
  };

  render() {
    return (
      <section className="user__info">
        <table className="table--user">
          <caption>
            <h2>Your Account :</h2>
          </caption>
          <tbody>
            <tr className="user__row">
              <td>Username :</td>
              <td>{this.props.user?.username}</td>
            </tr>

            <tr className="user__row">
              <td>Email :</td>
              <td>{this.props.user?.email}</td>
              <td>
                <button
                  className="button"
                  name="changeEmail"
                  onClick={this.onChangeInputVisibility}
                >
                  Change
                </button>
              </td>
            </tr>

            {this.state.changeEmail && (
              <NewEmail onSubmit={this.onSubmit} />
            )}

            <tr className="user__row">
              <td>Password :</td>
              <td>*********</td>
              <td>
                <button
                  className="button"
                  name="changePassword"
                  onClick={this.onChangeInputVisibility}
                >
                  Change
                </button>
              </td>
            </tr>

            {this.state.changePassword && (
              <NewPassword onSubmit={this.onSubmit} />
            )}

            <tr className="user__row">
              <td>
                <button
                  className="button button--danger"
                  onClick={this.onDeleteAccount}
                >
                  Delete Account
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, {
  deleteAccount,
  updateAccount,
})(UserInfo);
