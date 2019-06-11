import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// import Flexbox from 'flexbox-react';

import CreateNewParent from "./components/createNewParent.js";
import CreateNewStudent from "./components/createNewStudent.js";
import LandingPage from "./components/landingPage.js";
import ParentProfile from "./components/parentProfile.js";

import './css/App.css';
import './css/reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/register' component={CreateNewParent}/>
            <Route path='/profile' component={ParentProfile}/>    
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
