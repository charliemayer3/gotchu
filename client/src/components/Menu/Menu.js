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
import Footer from '../Footer';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isActive: false,
      visible: false,
      blackOverlay: false,
      social: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }
 
  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen, social: !this.state.social });
    console.log("TM click worked")
  }

  toggleLoginModal() {
    this.setState({ visible: !this.state.visible });
    this.setState({ blackOverlay: !this.state.blackOverlay });
    console.log("click worked")
  }
 
  render() {
    return (
      <div>
      	<div id="MenuButton">
        	<HamburgerArrow isActive={this.state.isOpen} toggleButton={this.toggleMenu} buttonColor="#FFBC67" barColor="white" />
        </div>

        <div id="blackOverlay" className={ this.state.blackOverlay ? "showBlack" : ""}>
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
                <Link onClick={() => {this.setState({ visible: !this.state.visible, blackOverlay: true }) }} to={"/"}>
                  Login + <br /> &nbsp; Signup
                </Link>
              </ListItem>
                <hr />
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/contact/"}>
                  The <br /> &nbsp; Crisis
                </Link>
              </ListItem>
                <hr />
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/mission/"}>
                  The <br /> &nbsp; Mission
                </Link>
              </ListItem>
                <hr />
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/team/"}>
                  The <br /> &nbsp; Team
                </Link>
              </ListItem>
                <hr />
            </List>
          </Router>
        </OverlayMenu>

        <LoginModal menuVisibility={this.state.visible} toggleLoginModal={this.toggleLoginModal} toggleBlack={this.toggleBlack}>
          
        </LoginModal>

        {this.state.social ? (
          <Footer footerVisibility={this.state.social} toggleSocialModal={this.toggleSocialModal} /> 
        ) : (
          ""
        )}

      </div>
    );
  }
}
 
export default Menu;
