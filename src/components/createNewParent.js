import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import Flexbox from 'flexbox-react';


import '../css/register.css'; 

class CreateNewParent extends Component {

  handleChange(){


  }

  render() {
    return (
      <div className="center-flex registerContainer">
     
     <h1>Register</h1>
        <form className="center-flex" onSubmit={this.handleSubmit}>

          <input className="register-form" type="text" name="first_name"  placeholder="First Name" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="last_name"  placeholder="Last Name" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="email"  placeholder="Email" onChange={(e) => this.handleChange(e)} required />

          <input className="register-form" type="text" name="address1"  placeholder="Address Line 1" onChange={(e) => this.handleChange(e)} required />
          <input className="register-form" type="text" name="address2"  placeholder="Address Line 2" onChange={(e) => this.handleChange(e)} required />

          <input className="register-form" type="text" name="phone_number"  placeholder="Phone Number" onChange={(e) => this.handleChange(e)} required />

          <input className="register-form" type="password" name="password"  placeholder="Password" onChange={(e) => this.handleChange(e)} required />

          <input className="register-form" type="submit" value="Submit" />

       </form>

      <p><Link to="/">Go Back</Link></p>
      
      </div>
    );
  }
}

export default CreateNewParent;
