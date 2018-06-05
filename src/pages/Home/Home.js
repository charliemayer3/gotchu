import "./Home.css";
import React, { Component } from 'react';
import Logo from '../../images/gotchuLogo.png';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
 
  render() {
    return (

      <div className="homeBody">

        <div className="logoContainer">
          <img id="logo" src={Logo} />
        </div>

      	<div id="welcomeText">
          <h1>
            gotchu
          </h1>
        </div>

      </div>
    
    );
  }
}

export default Home;
