import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import Flexbox from 'flexbox-react';

import '../css/landingPage.css';

class LandingPage extends Component {

  handleChange(){
    console.log("things are changing");
  };

  render() {
    return (
      <div className="landingContainer center-flex">
     
      <h1>KidCube</h1>
      <h2>Something will go here.</h2>
      <form className="center-flex" onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={(e) => this.handleChange(e)} />
        <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
        <input type="submit" value="Log-In" />
      </form>

      <p>No account? Create one <Link to="/register">here</Link>.</p>
      </div>
    );
  }
}

export default LandingPage;
