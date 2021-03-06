import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

class NewPassword extends Component {
  state = {
    password: '',
    confrimPassword: '',
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onClick = () => {
    if (this.state.password === this.state.confrimPassword) {
      this.props.onSubmit(_.pick(this.state, 'password'));
      this.setState({ password: '', confrimPassword: '' });
    }
  };

  render() {
    return (
      <tr className="user__row user__row--additional">
        <td>New Password :</td>
        <td className="user__passwords">
          <input
            type="password"
            placeholder="password"
            className="input--user"
            name="password"
            onChange={this.onInputChange}
            value={this.state.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="input--user"
            name="confrimPassword"
            onChange={this.onInputChange}
            value={this.state.confrimPassword}
          />
        </td>

        <td>
          <button className="button" onClick={this.onClick}>
            Save
          </button>
        </td>
      </tr>
    );
  }
}

NewPassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewPassword;
