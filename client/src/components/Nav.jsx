import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import axios from 'axios';
import '../assets/styles/index.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item list-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>&nbsp;&nbsp;&nbsp;
              <li className="nav-item list-item active">
                <Link to="/userfinances">Finances</Link>
              </li>&nbsp;&nbsp;&nbsp;
              <li className="nav-item list-item">
                <Link to="activity">All Activity</Link>
              </li>&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link to="/pickgroup">Add Transaction</Link>
              </li>&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link to="/issues">Issues</Link>
              </li>
            </ul>
          </div>
          <span className="navs">
            <div className="dropdown">
              <button className="btn btn-primary dropbtn">Account<span className="caret"></span></button>
              <div className="dropdown-content">
                <Link to="/address">
                  Enter address
                </Link>
                <Link to="/group">
                  Create Group
                </Link>
                <Link to="/deletegroup">
                  Delete Group
                </Link>
                <Link to="/logout">
                  Logout
                </Link>
              </div>
            </div>
          </span>
      </nav>
    );
  }
}

export default Nav;
