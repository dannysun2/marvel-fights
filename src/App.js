import React, { Component } from 'react';
import './App.css';
import Battlefield from '../src/components/Battlefield'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Battlefield />
      </div>
    );
  }
}

export default App;
