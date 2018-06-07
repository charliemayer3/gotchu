import "./Menu.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import OverlayMenu from 'react-overlay-menu';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from "../../pages/UserPortal";
import { Redirect } from 'react-router';
import { List, ListItem } from "../List";
import LoginModal from '../LoginModal';
import LoginCloseBtn from '../LoginCloseBtn';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isActive: false,
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleLoginModal() {
    this.setState({ visible: !this.state.visible });
  }
 
 
  render() {
    return (
      <div>
      	<div id="MenuButton">
        	<HamburgerArrow isActive={this.state.isOpen} toggleButton={this.toggleMenu} buttonColor="#FFBC67" barColor="white" />
        </div>

        <OverlayMenu 
          open={this.state.isOpen} 
          onClose={this.toggleMenu}
        >
          <Router>
            <List>
              {/* <ListItem>
               <Link onClick={this.forceUpdate} to={"/"}>
                  Home
                </Link>
              </ListItem> */}
              <ListItem>
                <Link onClick={() => {this.setState({ visible: !this.state.visible }) }} to={"/signIn/"}>
                  Login
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/contact/"}>
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/mission/"}>
                  Mission
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/user/"}>
                  User Portal
                </Link>
              </ListItem>
            </List>
          </Router>
        </OverlayMenu>

        <LoginModal menuVisibility={this.state.visible}>
        </LoginModal>
        <LoginCloseBtn onClick={() => {this.setState({ visible: this.state.visible }) }}/>

      </div>
    );
  }
}
 
export default Menu;
