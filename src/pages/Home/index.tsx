import { useState } from 'react';
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
  if (!data) {
    return <Loader />;
  }
  return (
    <>
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
          <WeatherIcon iconName={data.current.weather[0].icon} />
          <p>{Math.round(data.current.temp)}℃</p>
        </div>
        <div className="weather-container home__daily-sunrise">
          <div>
            <MdWbSunny />
            <p>{`${getTime(data.current.sunrise).hour} : ${
              getTime(data.current.sunrise).minutes
            } AM`}</p>
          </div>
          <div>
            <MdDarkMode />
            <p>{`${getTime(data.current.sunset).hour} : ${
              getTime(data.current.sunset).minutes
            } PM`}</p>
          </div>
        </div>
        <ul className="weather-container home__daily-info">
          <li>
            <h4>습도</h4>
            <p>{data.current.humidity}</p>
          </li>
          <li>
            <h4>풍속</h4>
            <p>{data.current.wind_speed}</p>
          </li>
          <li>
            <h4>강수량</h4>
            <p>{data.current.rain ? data.current.rain['1h'] : '-'}</p>
          </li>
        </ul>
      </style.DailyWeather>
      <ClothesIcon isLoading={isLoading} temp={data.current.temp} />
      <style.TimelyWeather>
        <ul className="home__timely-title">
          <li>시간</li>
          <li>습도(%)</li>
          <li>바람(m/s)</li>
          <li>강수량/적설량</li>
        </ul>
        <div className="home__timely-list">
          {data.hourly.map((info, idx) => (
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
          {data.daily.map((day, idx) => (
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
