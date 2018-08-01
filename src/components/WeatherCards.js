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
            
            <div className="weatherCard">

                { this.state.cardData.length > 0 && this.state.cardData.map( item => 
                    <div className="card" key={`${item.city}`}>
                        <div>
                            <h4>{`${item.city}`}</h4>
                            <h2>{`${item.temperature}°`}</h2>
                        </div>
                        <div>
                            <button type="button">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                ) }
            </div>
        )
    }
}
