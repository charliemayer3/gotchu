import "./LoginModal.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from '../../pages/UserPortal';
import { Redirect } from 'react-router';
import { List, ListItem } from "../List";
import Login from '../../pages/Login';
import LoginCloseBtn from '../LoginCloseBtn';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : this.props.menuVisiblity
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({ visible: !this.props.menuVisibility });
  }
 
   render() {
    console.log(this.props)
    var visibility = "hide";
 
    if (this.props.menuVisibility) {   {/* why doesn't putting this.state.visible do the same thing?? If worked, we could use this.state.visible for closing */}
      visibility = "show";
    } else {
      visibility = "hide";
    }

    return (
      <div>
        <div id="loginModal" className={visibility}>
          <Login/>
          <button id="loginCloseBtn" onClick={() => {this.props.toggleLoginModal()}}>
          CLICK HERE TO CLOSE
          </button>
        </div>
      </div>
    );
  }
}
 
export default LoginModal;
