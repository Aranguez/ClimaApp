import React, { Component } from 'react'

export default class WeatherCards extends Component {

    constructor({cardData}){
        super();
        this.state = {
            cardData,
            loading: true
        }
    }

    componentWillReceiveProps({cardData}){
        this.setState({
            cardData,
        })
    }

    render() {
        return (
            
            <div>
                { this.state.cardData.length > 0 ? this.state.cardData.map( item => 
                    <div className="card" key={`${item.city}`}>
                        <h4>{`${item.city}`}</h4>
                        <h2>{`${item.temperature}°`}</h2>
                    </div>
                ) : <div className="alert-message">
                        <i className="fas fa-exclamation-circle"></i>
                        <h3>No cities here !</h3>
                    </div> }
            </div>
        )
    }
}
