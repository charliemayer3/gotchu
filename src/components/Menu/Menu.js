// import "./Menu.css";
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
        <HamburgerArrow isActive={this.state.isOpen} toggleButton={this.toggleMenu} buttonColor="#FFBC67" barColor="white" />
        
        <OverlayMenu 
          open={this.state.isOpen} 
          onClose={this.toggleMenu}
        >
        <span style={{color: 'white'}}>
        HELLO!! l;kdsjf;lkdsaf;lkdsajf;lkdsajf
          {/* <MyMenu /> */}
        </span>
        </OverlayMenu>
      </div>
    );
  }
}
 
export default Menu;
