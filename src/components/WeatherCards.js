import React, { Component } from 'react'

export default class WeatherCards extends Component {

    constructor({ citys }){
        super();
        this.state = {
            citys,
            data: [],
            loading: true
        }
    }

    componentWillReceiveProps({citys}){
        this.setState({
            citys,
            loading: false
        })
    }

    componentDidMount(){
        this.getData(this.state.citys)
    }

    getData = citys => {
        const api_key = '89b9552c3cc30cb689089e33a41dac98';
        citys.map(city => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        
            return fetch(url)
                .then(response => response.json())
                .then(info => {
                    const data = {
                        city: info.name,
                        weather: {
                            'temperature': Math.floor(info.main.temp)
                        }
                    }
                    this.state.data.push(data)
                })
                .catch( error => console.log('parse have fail', error) )
        })

        this.setState({
            loading: false
        })
    }

    render() {

        return (
        <div className="weatherCard">
            { this.state.data !== null ?

                this.state.data.map(item => (
                        <div className="card" key={item.city}>
                            <h4>{`${item.city}`}</h4>
                            <h2>{`${item.weather.temperature}`}°</h2>
                        </div>
                    )
                )
                : 'Cargando'}
        </div>
        )
    }
}
