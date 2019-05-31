import React, { Component } from 'react';
import * as sha256 from 'sha256';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '', email: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let request = new XMLHttpRequest();
    request.open(
      'PUT',
      'https://theoppodcast-web.firebaseio.com/' +
        sha256(this.state.email.toLowerCase()) +
        '.json',
      true
    );
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(
      JSON.stringify({
        email: this.state.email,
      })
    );
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post" action="#">
        <input
          type="email"
          name="email"
          value={this.state.email}
          id="email"
          placeholder="Email Address"
          onChange={this.onEmailChange}
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
