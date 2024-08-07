import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import ForecastWeather from "./components/ForecastWeather/ForecastWeather";


function App() {

    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecastWeather, setForecastWeather] = useState(null)

    const handleOnSearchChange = (searchData)=>{
        const [lat, lon] = searchData.value.split(" ")
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastWeatherFetch]).then(async (response)=>{
            const weatherResponse = await response[0].json()
            const forecastResponse = await response[1].json()

            setCurrentWeather({city: searchData.label, ...weatherResponse})
            setForecastWeather({city: searchData.label, ...forecastResponse})
        }).catch(err =>{
            console.error(err);
        })
    }

    console.log(currentWeather);
    console.log(forecastWeather);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecastWeather && <ForecastWeather data={forecastWeather} />}
        </div>
    );
}

export default App
