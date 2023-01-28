import { DailyWeather, JejuMap, TimelyWeather, WeeklyWeather } from './style';
import { getTime } from 'utils/getTime';
import { JejuLocation } from 'consts';
import { Loader, WeatherIcon } from 'components';
import jejuMap from 'assets/images/jeju_map.png';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { getWeatherInfo } from 'store/modules/weatherInfo';
import { ClothesIcon } from 'components';

export const Home = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const { isLoading, current, hourly, daily } = useAppSelector(({ weatherInfo }) => weatherInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(
        getWeatherInfo({
          lat: JejuLocation[activeLocation].lat,
          lon: JejuLocation[activeLocation].lon,
        })
      );
    })();
  }, [dispatch, activeLocation]);

  return (
    <>
      {isLoading && <Loader />}
      <JejuMap>
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
      </JejuMap>
      <DailyWeather>
        <div className="weather-container home__daily-title">
          <h3>{JejuLocation[activeLocation].city}</h3>
          <Button type="button"> 금일 국민 행동 안전 요령 확인하기</Button>
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
            <p>{current.rain || '-'}</p>
          </li>
        </ul>
      </DailyWeather>
      <ClothesIcon />
      <TimelyWeather>
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
              <li>{`${info.rain?.['1h'] || '-'} / ${info.snow?.['1h'] || '-'}`}</li>
            </ul>
          ))}
        </div>
      </TimelyWeather>
      <WeeklyWeather>
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
      </WeeklyWeather>
    </>
  );
};
