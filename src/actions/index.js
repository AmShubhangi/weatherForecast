const API_KEY = '11bc9111b701d7cc909d9f1b9dfd89bc';
const root_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
     const url = `${root_URL}&q=${city},in`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}