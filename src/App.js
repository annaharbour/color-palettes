import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import React, { Component } from 'react';
import './App.css'


class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
