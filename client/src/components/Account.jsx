import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../components/Home.jsx';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <Home />
      <h3>Account</h3>
        <ul>
          <li>Profile picture</li>
          <li>Settings</li>
        </ul>
      </div>
    )
  }
}

export default Account;