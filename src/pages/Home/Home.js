import "./Home.css";
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
 
  render() {
    return (
    	<h1>Home Page!!</h1>
    );
  }
}
 
export default Home;