//servicio para obtener data

const getData = (city, thos, type) => {
    console.log('ejecutando servicio')
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
            if (type !== 'cards') {
                thos.setState({
                    data: result,
                    loading: false
                })
            } else{
                console.log('es una tarjeta !')
                thos.setState({
                    data: [ ...thos.state.data,result],
                    loading: false
                })
            }
            
        })
        .catch( error => console.log('parse have fail', error) )

}

export default getData
