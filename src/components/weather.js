import React, { Component } from 'react'
import '../App.css'

import Menu from './menu'

export default class Weather extends Component {

    constructor({ city }){
        super();
        this.state = {
            city,
            data: [],
            loading: true
        }
    }

    componentDidMount(){
        this.getData(this.state.city)
    }

    getData = city => {
        const api_key = '89b9552c3cc30cb689089e33a41dac98';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        
        fetch(url)
            .then(response => response.json())
            .then(info => {
                const result = {
                    'city': info.name,
                    'temperature': Math.floor(info.main.temp),
                    'temp_max': info.main.temp_max,
                    'temp_min': info.main.temp_min,
                    'humidity': info.main.humidity,
                    'weatherState': info.weather[0].main
                }
                this.setState({
                    data: result,
                    loading: false
                })
            })
            .catch( error => console.log('parse have fail', error) )
    }

    render() {
        //destructuring
        const {city, temperature, weatherState, humidity, temp_min, temp_max} = this.state.data

        //rendering
        return (
            <div>
                <Menu/>
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
