import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import User from './pages/UserPortal';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Team from './pages/Team';
import Mission from './pages/Mission';
import Crisis from './pages/Crisis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
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
