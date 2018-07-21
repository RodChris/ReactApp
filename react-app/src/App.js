import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemInput from './ItemInput/ItemInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my first React App</h1>
        </header>
        <ItemInput />
      </div>
    );
  }
}

export default App;
