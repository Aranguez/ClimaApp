import React, { Component } from 'react';
import '../App.css';

import  { Button, Grid, Row, Col }  from 'react-bootstrap';

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
                <div className="add-btn" onClick={this.showModal}>
                    <span>Add City</span>
                    <Button className="btn-component">
                        <i className="fas fa-plus"></i>
                    </Button>
                </div>
                <h1>{ this.state.loading && <i className="fas fa-circle-notch fa-spin loading"></i> }</h1>
                { this.state.data && !this.state.loading && //--> render template

                    <div className="animated fadeIn slow">

                        <h3 className="ciudad"><i className="fas fa-map-marker-alt"></i> {city}</h3>
                        <span className="temperatura">
                            {temperature}°
                            <p><i className="fas fa-sun"></i> {weatherState}</p>
                        </span>
                        
                        <Grid>
                            <Row className="show-grid weatherData">
                                <Col xs={4} className="text-center">
                                    <span><i className="fas fa-tint"></i> {humidity}%</span><br/>
                                </Col>
                                <Col xs={4} className="text-center">
                                    <span>Min {temp_min}°</span><br/>
                                    <span>Max {temp_max}°</span>
                                </Col>
                                <Col xs={4} className="text-center" >
                                    
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}
