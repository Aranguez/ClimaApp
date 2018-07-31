import React, { Component } from 'react'

import getData from './../services/GetData.service';

export default class WeatherCards extends Component {

    constructor(){
        super();
        this.state = {
            city: '',
            data: [],
            loading: true
        } 
    }

    addCity = (event) => {
        event.preventDefault()
        getData(this.refs.ciudad.value, this, 'cards')
        this.refs.form.reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addCity} ref="form">
                    <input type="text" placeholder="Agregar una ciudad" ref="ciudad"/>
                    <button type="submit">
                    <span className="fa-stack fa-2x" onClick={this.addCity}>
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                    </button>
                </form>
                <div className="weatherCard">
                    { this.state.data.map( item => 
                        <div className="card" key={`${item.city}`}>
                            <h4>{`${item.city}`}</h4>
                            <h2>{`${item.temperature}°`}</h2>
                    </div> ) }
                </div>
            </div>
        )
    }
}
