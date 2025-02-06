import axios from 'axios';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const result = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return result.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
