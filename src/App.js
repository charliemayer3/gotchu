import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import User from './pages/UserPortal';

class App extends Component {
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
