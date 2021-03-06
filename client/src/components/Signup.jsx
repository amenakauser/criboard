import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { Button } from 'react-bootstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordMatch: '',
      onUserFinances: false,
      onLandingPage: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit() {
    if (this.state.username === '' || this.state.email === '' || this.state.password === '')  {
      alert('username, email and password fields cannot be empty. Enter new values');
      // stay on signup page
    } else {
        var data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          passwordMatch: this.state.passwordMatch
        };
        axios.post('./signupuser', data)
          .then(result => {
            console.log(result);
            if (result.data === 'user created') {
              alert(`Info for ${this.state.username} has been saved`);
              // redirect to User Finances page after signup
              this.setState({
                onUserFinances: true
              })
            } else if (result.data === 'user already exists') {
              alert(`${this.state.username} already exists. Please login as ${this.state.username} or signup as a different user`)
              // redirect to landing page
              this.setState({
                onLandingPage: true
              })
            } else {
              var errors = result.data;
              var messages = errors.map((error) => {
                return error.msg;
              });
              alert(messages);
              this.setState({
                username: '',
                email: '',
                password: '',
                passwordMatch: ''
              });
            }
          })
          .catch(err => {
            console.log(err);
          })
    }
  }

  render() {
    if (this.state.onUserFinances) {
      return (
        <Redirect to="/userfinances" />
      );
    } else if (this.state.onLandingPage) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="col-md-4 col-md-offset-4 jumbotron" style={{ marginTop:"15vh" }}>
        <h1 className="display-2">Signup</h1>
          <div className="form-group">
            <label>Username</label>&nbsp;&nbsp;
            <input type="email" className="form-control" placeholder="Enter username" name="username" value={this.state.usernamel} onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Email address</label>&nbsp;&nbsp;
            <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Password</label>&nbsp;&nbsp;
            <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label>Re enter Password</label>&nbsp;&nbsp;
            <input type="password" className="form-control" placeholder="Re enter Password" name="passwordMatch" value={this.state.passwordMatch} onChange={this.onChange.bind(this)} />
          </div>
          <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default Signup;