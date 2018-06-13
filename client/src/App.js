import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Menu2 from './components/Menu2';
import Home from './pages/Home';
import User from './pages/UserPortal';
import axios from 'axios';
import API from "./utils/API";
import SignUp from './pages/SignUp';
import About from './pages/About';
import Team from './pages/Team';
import Mission from './pages/Mission';
import Crisis from './pages/Crisis';


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
        {!this.state.user ? (
          <Menu/>
        ) : (
          <Menu2/>
        )}
        <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" render={()=><User user={this.state.user}/>}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/crisis" component={Crisis} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
