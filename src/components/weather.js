import React, { Component } from 'react';
import '../App.css';

import  { Button }  from 'react-bootstrap';

import Menu from './menu'
import getData from './../services/GetData.service';
import AddCityModal from './addCityModal';

export default class Weather extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: [],
            cardData: [],
            loading: true,
            showModal: false
        }
    }

    showModal = () => {
        this.setState({
          showModal: true
        })
    }

    closeModal = () =>{
        this.setState({ showModal: false });
    }

    addCity = (event) => {
        const city = document.querySelector('#city').value
        event.preventDefault()
        getData(city, this, 'cards')
        this.setState({ showModal: false });
    }

    componentDidMount(){
        getData(this.state.city, this, 'main-weather')
    }

    render() {
        
        const {city, temperature, weatherState, humidity, temp_min, temp_max} = this.state.data

        return (
            <div>
                <AddCityModal addCity={this.addCity} show={this.state.showModal} closeModal={this.closeModal}/>
                <Menu cardData={this.state.cardData} />
                <Button bsStyle="primary" bsSize="medium" onClick={this.showModal}>
                    <i className="fas fa-plus"></i>
                </Button>
                <h1>{ this.state.loading && <i className="fas fa-circle-notch fa-spin loading"></i> }</h1>
                { this.state.data && !this.state.loading && //--> render template

                    <div className="animated fadeIn slow">

                        <h3 className="ciudad"><i className="fas fa-map-marker-alt"></i> {city}</h3>
                        <span className="temperatura">
                            {temperature}°
                            <p><i className="fas fa-tint"></i> {weatherState}</p>
                        </span>
                        
                        <span>Humedad: {humidity}%</span><br/>
                        <span>Minima: {temp_min}°</span><br/>
                        <span>Máxima: {temp_max}°</span>
                    </div>
                }
            </div>
        )
    }
}
