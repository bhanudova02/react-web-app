import axios from "axios";
import { useState } from "react";

const Weather = () => {
    const [cityName, setCityName] = useState('');
    const url = 'https://api.openweathermap.org/data/2.5/weather'
    const api_key = '5cde3b4aabae4ad29e2a6ad25a3f563e'
    const [weatherData, setWeatherData] = useState({ name: '', weather: [{ description: '' }], main: { temp: 0 } })
    function handelCityChange(e) {
        setCityName(e.target.value)
    }

    function handelSearchClick() {
        if (!cityName.trim()) {
            alert("Please Enter City Name")
            setWeatherData(weatherData)
            return;
        };

        axios.get(url, {
            params: {
                q: cityName,
                appid: api_key,
                units: 'metric'
            }
        }).then(res => {
            console.log(res.data)
            setWeatherData(res.data)
        }).catch(err => {
            console.log(err)
            setWeatherData({
                name: '',
                weather: [{ description: 'City Not Found' }],
                main: { temo: 0 }
            })
        })
    }
    return (
        <div className="w-50 mx-auto">
            <div className="py-4">
                <div className="input-group">
                    <input onKeyDown={(e) => { if (e.key === 'Enter') { handelSearchClick() } }} onChange={handelCityChange} type="text" className="form-control" />
                    <button onClick={handelSearchClick} className="bi bi-search btn btn-warning"></button>
                </div>
                <div className="mt-4 card card-body text-center border-2">
                    <h3>{weatherData.name} - {weatherData.weather[0].description}</h3>
                    <div className="fs-4 fw-semibold">
                        <p className="m-0">{weatherData.main.temp} &deg; C <span className="bi bi-sun"></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Weather;