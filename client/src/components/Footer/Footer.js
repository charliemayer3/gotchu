import "./Footer.css";
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import OverlayMenu from 'react-overlay-menu';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserPortal from "../../pages/UserPortal";
import { Redirect } from 'react-router';
import { List, ListItem } from "../List";
import LoginModal from '../LoginModal';
import LoginCloseBtn from '../LoginCloseBtn';
import Facebook from '../../images/facebookLogo.png';
import Instagram from '../../images/instagramLogo.png';
import Twitter from '../../images/twitterLogo.png';
import Contact from '../../images/letterIcon.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: this.props.footerVisibility,
      email: "hello@GotchU.world"
    };
    this.toggleFooterModal = this.toggleFooterModal.bind(this);
  }

  toggleFooterModal() {
    this.setState({ visible: !this.props.footerVisibility });
  }

  openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
  }
 
  render() {

    console.log(this.props)
    var visibility = "hide";
 
    if (this.props.footerVisibility) {   {/* why doesn't putting this.state.visible do the same thing?? If worked, we could use this.state.visible for closing */}
      visibility = "showFooter";
    } else {
      visibility = "hideFooter";
    }

    return (
      <div>
        <div id="socialModal" className={visibility}>
          <div className="socialIcons">
            <Router>
              <List>
                <ListItem>
                  <Route>
                    <img onClick={() => this.openInNewTab('https://facebook.com')} src={Facebook} />
                  </Route>
                </ListItem>
                <ListItem>
                  <Route>
                    <img onClick={() => this.openInNewTab('https://www.instagram.com/gotchu.world/')} src={Instagram} />
                  </Route>
                </ListItem>
                <ListItem>
                  <Route>
                    <img onClick={() => this.openInNewTab('https://twitter.com/GotchuW')} src={Twitter} />
                  </Route>
                </ListItem>
                <ListItem>
                  <a href={"mailto:" + this.state.email}>
                    <img src={Contact} />
                  </a>
                </ListItem>
              </List>
            </Router>
          </div>

        </div>
      </div>
    );
  }
}
 
export default Footer;