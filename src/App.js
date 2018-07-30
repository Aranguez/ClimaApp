import React, { Component } from 'react';

import './App.css';

//components
import Weather from './components/weather'

//services
//import Data from './services/WeatherData'

class App extends Component {

  constructor(){
    super();
    this.state = {
      city:'Buenos Aires'
    }
  }

  render() {
    return (
      <div>
        <Weather city={this.state.city}/>
      </div>
    );
  }
}

export default App;
