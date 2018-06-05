import "./Menu.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import OverlayMenu from 'react-overlay-menu';
// import MyMenu from './components/ui/MyMenu';
 
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
        <span id="navItems" style={{color: 'white', textAlign: 'center', fontSize: '80px' }}>
        	<ul>
        		<li>Sign In</li>
        		<li>Contact</li>
        		<li>Mission</li>
        		<li>Something Else</li>
        	</ul>
        </span>
        </OverlayMenu>
      </div>
    );
  }
}
 
export default Menu;
