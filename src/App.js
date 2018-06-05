import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Home/>
      </div>
    );
  }
}

export default App;
