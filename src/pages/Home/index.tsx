import { DailyWeather, JejuMap } from './style';
import { getTime } from 'utils/getTime';
import { initialWeatherState, JejuLocation } from 'consts';
import { WeatherIcon } from 'components';
import { WeatherInfoTypes } from 'types';
import { getWeather } from 'apis';
import jejuMap from 'assets/images/jeju_map.png';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';

export const Home = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const [WeatherInfo, setWeatherInfo] = useState<WeatherInfoTypes>(initialWeatherState);
  const { current, daily, hourly } = WeatherInfo;

  useEffect(() => {
    (async () => {
      const getWeatherInfo = await getWeather({
        lat: JejuLocation[activeLocation].lat,
        lon: JejuLocation[activeLocation].lon,
      });
      setWeatherInfo(getWeatherInfo);
    })();
  }, [activeLocation]);

  return (
    <>
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
    </>
  );
};
