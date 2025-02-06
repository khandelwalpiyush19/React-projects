import './App.css'
import React, { useState } from 'react'
import { fetchWeatherData } from './weatherService'

function App() {
  const [place, setPlace] = useState('')
  const [weather, setWeather] = useState(null)


  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(place);
      setWeather(data);

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <h1>
        Weather App
      </h1>

      <input type="text" placeholder='Enter the place' value={place} onChange={(e) => setPlace(e.target.value)} />
      <button type='button' onClick={handleSearch}>search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>CURRENT ={weather.main.temp}°C</p>
          <p>HUMIDITY ={weather.main.
            humidity}%</p>
          <p>MAX = {weather.main.temp_max}°C</p>
          <p>FEELS LIKE={weather.main.feels_like}°C</p>
          <p>SUMMARY ={weather.weather[0].description}</p>
          <p>WIND speed ={weather.wind.speed} nautical miles</p>
        </div>
      )}
    </>
  )
}

export default App
