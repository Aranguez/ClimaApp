import React, { Component } from 'react'

/* componentes */
import WeatherCards from './WeatherCards';

export default class Menu extends Component {

  constructor({cardData}){
    super();
    this.state = {
      cardData,
      start: true,
      show: false
    }
  }

  componentWillReceiveProps({cardData}){
    if (cardData.length !== 0) {
      this.setState({
        cardData
      })
    }
  }

  /*addCity = (event) => {
    const city = document.querySelector('#city').value
    event.preventDefault()
    getData(city, this, 'cards')
  }*/

  handleShowClass = (e) => {
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

          <button type="button" className="btn btn-primary" onClick={ e => this.handleShowClass(e) }>X</button>
          
          <WeatherCards cardData={this.state.cardData}/>              
        </div>
      </div>
    )
  }
}

