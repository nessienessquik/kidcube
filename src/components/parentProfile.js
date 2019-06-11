import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

// import Flexbox from 'flexbox-react';


class ParentProfile extends Component {
  render() {
    return (
      <div className="App center-flex">
     
      <h1>KidCube</h1>
      <h2>Parent Portal</h2>
      <h3>What would you like to do?</h3>

      <button>Add a New Student Profile</button>
      <button>View/Edit an Existing Student Profile</button>

      </div>
    );
  }
}

export default ParentProfile;
