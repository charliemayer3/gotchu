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
import axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isActive: false,
      visible: false,
      blackOverlay: false,
      social: false,
      user: null
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  componentDidMount() {
    this.setState({user: this.props.user})
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user != nextProps.user) {
      this.setState({user: nextProps.user})
      console.log('there is a props.user')
      console.log(this.state.user)
    }
  }

  handleSubmit(event) {
    console.log(this.props)
    event.preventDefault()
    console.log('handleSubmit')
    this.props.logout()
    setTimeout(this.alertChange, 1200)
    window.location = '/'
  }
 
  render() {
    console.log(this.state.user)
    console.log(this.props)
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
              {/*
              <ListItem>
               <Link onClick={this.forceUpdate} to={"/"}>
                  Home
                </Link>
              </ListItem>
              <hr />
              */}
              {this.state.user ? (
                <ListItem>
                  <Link onClick={this.handleSubmit} to={"/"}>
                    Log Out
                  </Link>
                </ListItem>
              ) : (
                <ListItem>
                  <Link onClick={() => {this.setState({ visible: !this.state.visible, blackOverlay: true }) }} to={"/"}>
                    Login + <br /> &nbsp; Signup
                  </Link>
                </ListItem>
              )}
                <hr />
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/about/"}>
                  Who<br /> &nbsp; We Are
                </Link>
              </ListItem>
                <hr />
              <ListItem>
                <Link onClick={this.forceUpdate} to={"/crisis/"}>
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

        <LoginModal menuVisibility={this.state.visible} toggleLoginModal={this.toggleLoginModal} toggleBlack={this.toggleBlack} login={this.props.login} >
          
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
