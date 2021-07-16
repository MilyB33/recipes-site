import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions';

export class UserInfo extends Component {
  state = {
    input: '',
    passwordConfirm: '',
    changeEmail: false,
    changePassword: false,
  };

  onChangeInputVisibility = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: !this.state[event.target.name],
    });
  };

  onInputChange = (event) => {};

  onDeleteAccount = (event) => {
    event.preventDefault();
    this.props.deleteAccount(this.props.user.id);
  };

  render() {
    return (
      <div className="user__info">
        <form className="form--user">
          <table className="table--user">
            <caption>
              <h2>Your Account :</h2>
            </caption>
            <tbody>
              <tr className="user__row">
                <td>Username :</td>
                <td>{this.props.user.username}</td>
              </tr>

              <tr className="user__row">
                <td>Email :</td>
                <td>{this.props.user.email}</td>
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
                <tr className="user__row">
                  <td>New Email :</td>
                  <td>
                    <input
                      type="email"
                      className="input--user"
                      placeholder="Email"
                    />
                  </td>
                  <td>
                    <button className="button">Save</button>
                  </td>
                </tr>
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
                <tr className="user__row">
                  <td>New Password :</td>
                  <td className="user__passwords">
                    <input
                      type="password"
                      placeholder="password"
                      className="input--user"
                    />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="input--user"
                    />
                  </td>

                  <td>
                    <button className="button">Save</button>
                  </td>
                </tr>
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { deleteAccount })(UserInfo);
