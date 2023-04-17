import { useEffect, useState } from 'react';
import * as style from './style';
import { getTime } from 'utils/getTime';
import { Loader, WeatherIcon, ClothesIcon } from 'components';
import jejuMap from 'assets/images/jeju_map.png';
import { Button } from '@mui/material';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import useAxios from 'hooks/useAxios';
import { WeatherInfoTypes } from 'types';

export const Home = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const { isLoading, data } = useAxios<WeatherInfoTypes>({
    queryId: 'weather',
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/onecall`,
    params: {
      lat: JejuLocation[activeLocation].lat,
      lon: JejuLocation[activeLocation].lon,
      exclude: 'minutely',
      units: 'metric',
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
  const { current, hourly, daily } = data;

  return (
    <>
      {isLoading && <Loader />}
      <style.JejuMap>
        <img src={jejuMap} alt="제주지도" />
        {JejuLocation.map((location, idx) => (
          <Button
            key={idx}
            type="button"
            onClick={() => setActiveLocation(idx)}
            className={activeLocation === idx ? 'active' : ''}
          >
            {location.city}
          </Button>
        ))}
      </style.JejuMap>
      <style.DailyWeather>
        <div className="weather-container home__daily-title">
          <h3>{JejuLocation[activeLocation].city}</h3>
        </div>
        <div className="weather-container home__daily-temperature">
          <WeatherIcon iconName={current.weather[0].icon} />
          <p>{Math.round(current.temp)}℃</p>
        </div>
        <div className="weather-container home__daily-sunrise">
          <div>
            <MdWbSunny />
            <p>{`${getTime(current.sunrise).hour} : ${getTime(current.sunrise).minutes} AM`}</p>
          </div>
          <div>
            <MdDarkMode />
            <p>{`${getTime(current.sunset).hour} : ${getTime(current.sunset).minutes} PM`}</p>
          </div>
        </div>
        <ul className="weather-container home__daily-info">
          <li>
            <h4>습도</h4>
            <p>{current.humidity}</p>
          </li>
          <li>
            <h4>풍속</h4>
            <p>{current.wind_speed}</p>
          </li>
          <li>
            <h4>강수량</h4>
            <p>{current.rain ? current.rain['1h'] : '-'}</p>
          </li>
        </ul>
      </style.DailyWeather>
      <ClothesIcon isLoading={isLoading} temp={current.temp} />
      <style.TimelyWeather>
        <ul className="home__timely-title">
          <li>시간</li>
          <li>습도(%)</li>
          <li>바람(m/s)</li>
          <li>강수량/적설량</li>
        </ul>
        <div className="home__timely-list">
          {hourly.map((info, idx) => (
            <ul key={idx}>
              <li>{`${getTime(info.dt).hour} 시`}</li>
              <li>
                <WeatherIcon iconName={info.weather[0].icon} />
              </li>
              <li>{Math.floor(info.temp)}℃</li>
              <li>{info.humidity}</li>
              <li>{info.wind_speed}</li>
              <li>{`${info.rain ? info.rain['1h'] : '-'} / ${
                info.snow ? info.snow['1h'] : '-'
              }`}</li>
            </ul>
          ))}
        </div>
      </style.TimelyWeather>
      <style.WeeklyWeather>
        <h3>주간 예보</h3>
        <ul>
          {daily.map((day, idx) => (
            <li key={idx}>
              <div>
                <p>{getTime(day.dt).day}요일</p>
                <p>{`${getTime(day.dt).month}월 ${getTime(day.dt).date}일`}</p>
              </div>
              <div>
                <WeatherIcon iconName={day.weather[0].icon} />
              </div>
              <div>
                <p>
                  <small>최저</small>
                  {Math.floor(day.temp.min)}℃
                </p>
                <p>
                  <small>최고</small>
                  {Math.floor(day.temp.max)}℃
                </p>
              </div>
            </li>
          ))}
        </ul>
      </style.WeeklyWeather>
    </>
  );
};

const JejuLocation = [
  {
    city: '제주시',
    lat: 33.5141,
    lon: 126.5297,
  },
  {
    city: '성산시',
    lat: 33.3868,
    lon: 126.8802,
  },
  {
    city: '서귀포시',
    lat: 33.2462,
    lon: 126.5653,
  },
  {
    city: '고산시',
    lat: 33.2938,
    lon: 126.1628,
  },
];

const initialWeatherState: WeatherInfoTypes = {
  current: {
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    wind_speed: 0,
    rain: { '1h': 0 },
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
