import React, { Component } from 'react'

import WeatherCards from './WeatherCards';

export default class Menu extends Component {

  constructor(){
    super();
    this.state = {
      start: true,
      show: false,
      citys: ['Buenos Aires', 'Tokyo', 'Bogota', 'paris']
    }
  }

  handleShowClass(e){
    e.preventDefault()
    this.setState({
      show: !this.state.show,
      start: false
    })
  }

  render() {
    return (
      <div>
        <div className="menu" onClick={ e => this.handleShowClass(e) }>
          <i className="fas fa-bars"></i>
        </div>

        <div className={`slidemenu
                        ${this.state.start && 'hide'}
                        ${this.state.show ? 
                          'animated slideInLeft fast' :
                          'animated slideOutLeft fast' }`}>

          <button type="button" onClick={ e => this.handleShowClass(e) }>X</button>
          <WeatherCards citys={this.state.citys}/>
          
        </div>
      </div>
    )
  }
}

