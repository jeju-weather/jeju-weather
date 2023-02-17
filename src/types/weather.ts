export interface WeatherInfoTypes {
  current: {
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: number;
    wind_speed: number;
    rain: { '1h': number };
    weather: {
      icon: string;
    }[];
  };
  daily: DailyWeather[];
  hourly: HourlyWeather[];
}

interface DailyWeather {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      icon: string;
    }
  ];
}

interface HourlyWeather {
  dt: number;
  humidity: number;
  temp: number;
  snow?: { ['1h']: number };
  rain?: { '1h': number };
  wind_speed: number;
  weather: [
    {
      icon: string;
    }
  ];
}

export interface GetWeatherPrams {
  lat: number;
  lon: number;
}
