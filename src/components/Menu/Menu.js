import "./Menu.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import OverlayMenu from 'react-overlay-menu';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from "../../pages/UserPortal";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isActive: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
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
            <Switch>
              <span id="navItems" style={{color: 'white', textAlign: 'center', fontSize: '80px' }}>
                <ul>
                  <Link to={"/login/"}>
                    <li>Sign In</li>
                  </Link>
                  <Link to={"/contact/"}>
                    <li>Contact</li>
                  </Link>
                  <Link to={"/mission/"}>
                    <li>Mission</li>
                  </Link>
                  <Link to={"/user/"}>
                    <li>Something Else</li>
                  </Link>
                </ul>
              </span>
            </Switch>

          </Router>
        </OverlayMenu>
      </div>
    );
  }
}
 
export default Menu;
