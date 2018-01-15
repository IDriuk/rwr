import axios from 'axios';
const API_KEY = '79a75696684efc7388e79f74c79bca37';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=79a75696684efc7388e79f74c79bca37&q=123,us
${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
