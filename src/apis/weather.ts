import axios from 'axios';

interface GetWeatherPrams {
  lat: number;
  lon: number;
}

export const getWeather = async (params: GetWeatherPrams) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.lon}&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  return data;
};
