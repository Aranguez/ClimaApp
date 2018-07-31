import React, { Component } from 'react';

import './App.css';

//components
import Weather from './components/weather'

//services
//import Data from './services/WeatherData'

class App extends Component {

  render() {
    return (
      <div>
        <Weather/>
      </div>
    );
  }
}

export default App;
