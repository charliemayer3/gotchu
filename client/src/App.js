import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
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
      alert: false,
      loginError: false
    }
    this._logout = this._logout.bind(this)
    // this._login = this._login.bind(this)
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
        console.log(response.data)
        if (!!response.data.user) {
          console.log('THERE IS A USER')
          this.setState({
            loggedIn: true,
            user: response.data.user
          })

        } else {
          this.setState({
            loggedIn: false,
            user: null       
          })
        }
    })
  }

  _logout() {
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: null,
          user: null
        })
        window.location = '/'
      }
      window.location = '/'
    })
  }

  setUser(user) {
    this.setState({
      loggedIn: true,
      user: user
    })
  }

  render() {
    
    return (
      <div className="App">
        <Menu user={this.state.user} setUser={this.setUser} logout={this._logout}/>
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
