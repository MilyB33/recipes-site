import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewEmail extends Component {
  state = {
    email: '',
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onClick = () => {
    if (this.state.email === this.props.user.email) {
      console.log('Emails are same');
      return;
    }

    if (this.state.email.length === 0) {
      console.log('Field cant be empty');
      return;
    }

    this.props.onSubmit(this.state);
    this.setState({ email: '' });
  };

  render() {
    return (
      <tr className="user__row user__row--additional">
        <td>New Email :</td>
        <td>
          <input
            type="email"
            className="input--user"
            placeholder="Email"
            name="email"
            onChange={this.onInputChange}
            value={this.state.email}
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

NewEmail.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default NewEmail;
