import "./Menu.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import OverlayMenu from 'react-overlay-menu';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from "../../pages/UserPortal";
import { Redirect } from 'react-router';
import { List, ListItem } from "../List";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isActive: false,
      loginOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenu2 = this.toggleMenu2.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleMenu2() {
    this.setState({ loginOpen: !this.state.loginOpen });
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
                <p style={{color: 'white'}} onClick={this.toggleMenu2}>
                  Login
                  <OverlayMenu style={{color: 'white'}} 
                    open={this.state.loginOpen} 
                    onClose={this.toggleMenu2}
                  >HELLO THERE!!</OverlayMenu>
                </p>
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
      </div>
    );
  }
}
 
export default Menu;
