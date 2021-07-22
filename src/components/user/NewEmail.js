import React, { Component } from 'react';

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

export default NewEmail;
