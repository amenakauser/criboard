import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Nav/>
        <div className="jumbotron col-md-4 col-md-offset-4" style={{ marginTop:"20vh" }}>
          <h3>Help</h3>
        </div>
      </div>
    )
  }
}

export default Help;