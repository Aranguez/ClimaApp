//servicio para obtener data

const getData = city => {
    const api_key = '89b9552c3cc30cb689089e33a41dac98';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    fetch(url)
        .then(response => response.json())
        .then(info => this.filterData(info))
}

const filterData = (data) => {
    const result = {
        temperature: Math.floor(data.main.temp),
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        humidity: data.main.humidity,
        weatherState: data.weather[0].main
    }

    return result
}

const Data = getData('Buenos Aires')

export default Data
