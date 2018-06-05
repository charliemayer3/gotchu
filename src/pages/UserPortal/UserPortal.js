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
    	<h1>User Portal!!</h1>
    );
  }
}
 
export default UserPortal;