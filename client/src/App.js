import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import User from './pages/UserPortal';
import axios from 'axios';
import API from "./utils/API";

class App extends Component {
    constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null,
      id: null,
      brewery: null,
      breweryURL: null,
      breweries: [],
      beers: [],
      alert: false 
    }

  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
        console.log(response.data)
        if (!!response.data.user) {
          console.log('THERE IS A USER')
          this.setState({
            loggedIn: true,
            user: response.data.user,
            info: null,
            id: response.data.user._id,
            brewery: response.data.user.brewery,
            breweryURL: response.data.user.breweryURL
          })
        } else {
          this.setState({
            loggedIn: false,
            user: null,
            info: null,
            brewery: null,
            breweryURL: null         
          })
        }
    })
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
