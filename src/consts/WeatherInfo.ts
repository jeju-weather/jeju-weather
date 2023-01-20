import { WeatherInfoTypes } from 'types/weather';

export const initialWeatherState: WeatherInfoTypes = {
  current: {
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    wind_speed: 0,
    rain: 0,
    weather: [
      {
        icon: '',
      },
    ],
  },
  daily: [
    {
      dt: 0,
      temp: {
        min: 0,
        max: 0,
      },
      weather: [
        {
          icon: '',
        },
      ],
    },
  ],
  hourly: [
    {
      dt: 0,
      humidity: 0,
      temp: 0,
      rain: { '1h': 0 },
      snow: { '1h': 0 },
      wind_speed: 0,
      weather: [
        {
          icon: '',
        },
      ],
    },
  ],
};
