import React, { Component } from 'react';
import './App.css';
import ScoreButton from './scoreButton';
import ScoreTracker from './scoreTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ScoreTracker />
          <ScoreButton />
      </div>
    );
  }
}

export default App;
