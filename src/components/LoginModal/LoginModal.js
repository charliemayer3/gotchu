import "./LoginModal.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from '../../pages/UserPortal';
import { Redirect } from 'react-router';
import { List, ListItem } from "../List";
import Login from '../../pages/Login';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : this.props.menuVisiblity
    };
  }
   render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div>
        <div id="loginModal" className={visibility}>
          <Login />
        </div>
      </div>
    );
  }
}
 
export default LoginModal;
