import "./LoginModal.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from '../../pages/UserPortal';
import { Redirect } from 'react-router';
import { List, ListItem } from "../List";
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import LoginCloseBtn from '../LoginCloseBtn';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : this.props.menuVisiblity,
      signup: false
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({ visible: !this.props.menuVisibility });
  }
 
   render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {   {/* why doesn't putting this.state.visible do the same thing?? If worked, we could use this.state.visible for closing */}
      visibility = "show";
    } else {
      visibility = "hide";
    }

    return (
      <div>
        <div id="loginModal" className={visibility}>
          <h1 id="loginLink" onClick={() => {this.setState({ signUp: false }) }}>
            Login
          </h1>
          <h1 id="signUpLink" onClick={() => {this.setState({ signUp: true }) }}>
            Sign Up
          </h1>
          <br />
          <br />
          {!this.state.signUp ? (
            <Login/>
          ) : (
            <SignUp/>
          )}
          <LoginCloseBtn onClick={this.toggleLoginModal}/>
        </div>
      </div>
    );
  }
}
 
export default LoginModal;
