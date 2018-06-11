import "./UserPortal.css";
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

class UserPortal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
 
  render() {
    return (
      <div className="userPortalContainer">
        <div className='welcomeHeader'>
          <h1>Hello, (user's first name)!</h1>
          <span className='userInfo'>
            <h3>
              Your latest contributions have helped [enter demographic here]!
            </h3>
            <h3>
              [total contributions]
            </h3>
          </span>
        </div>

        <div className='analyticsContainer'>
          <div className='pieChart'>
          </div>

          <div className='userGraph'>
          </div>
        </div>
      </div>
    );
  }
}
 
export default UserPortal;